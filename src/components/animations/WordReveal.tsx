import { motion } from 'framer-motion'

type Props = {
  text: string
  className?: string
  delay?: number
  duration?: number
}

// Reveals text word by word with a subtle upward motion
export default function WordReveal({ text, className, delay = 0, duration = 0.5 }: Props) {
  const words = text.split(/(\s+)/) // keep spaces

  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        w.trim() === '' ? (
          <span key={`space-${i}`}>{w}</span>
        ) : (
          <motion.span
            key={`w-${i}`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.9 }}
            transition={{ duration, delay: delay + i * 0.05 }}
            style={{ display: 'inline-block' }}
          >
            {w}
          </motion.span>
        )
      ))}
    </span>
  )
}

