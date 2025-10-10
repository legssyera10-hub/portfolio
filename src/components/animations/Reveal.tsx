import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

// Fades and slides content in when it enters the viewport (once)
export default function Reveal({ children, className, delay = 0, y = 20 }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

