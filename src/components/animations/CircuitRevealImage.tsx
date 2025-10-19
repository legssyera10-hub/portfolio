import { motion } from 'framer-motion'
import { CSSProperties, useEffect, useMemo, useRef, useState } from 'react'

type Props = {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  radius?: number
  height?: number | string
  imageScale?: number
  variant?: 'blurFade' | 'fadeUp' | 'slide' | 'circuit'
}

// Shows an image with a subtle circuit-like sweep, then reveals the image.
export default function CircuitRevealImage({
  src,
  alt,
  className,
  imgClassName,
  radius = 16,
  height = 300,
  imageScale = 1,
  variant = 'fadeUp',
}: Props) {
  const [visible, setVisible] = useState(true)
  const [bgUrl, setBgUrl] = useState('/bg/ai-circuit-light.svg')
  const onceRef = useRef(false)

  useEffect(() => {
    // Choose circuit background based on current theme (best-effort)
    try {
      const isDark = document.documentElement.classList.contains('dark')
      setBgUrl(isDark ? '/bg/ai-circuit-dark.svg' : '/bg/ai-circuit-light.svg')
    } catch {}
  }, [])

  const wrapperStyle = useMemo<CSSProperties>(() => ({
    height: typeof height === 'number' ? `${height}px` : height,
    borderRadius: radius,
  }), [height, radius])

  return (
    <motion.div
      className={`relative w-full overflow-hidden ${className ?? ''}`}
      style={wrapperStyle}
      initial={variant === 'slide' ? { x: -60, opacity: 0, scale: 0.98 } : { opacity: 1 }}
      whileInView={variant === 'slide' ? { x: 0, opacity: 1, scale: 1 } : {}}
      viewport={{ once: true, amount: 0.6 }}
      transition={variant === 'slide' ? { duration: 0.7, ease: 'easeOut' } : {}}
    >
      {/* Image */}
      {visible && (
        <motion.img
          src={src}
          alt={alt}
          className={`h-full w-full object-cover ${imgClassName ?? ''}`}
          style={{ transform: `scale(${imageScale})` }}
          initial={
            variant === 'slide'
              ? { opacity: 1 }
              : variant === 'blurFade'
              ? { opacity: 0, filter: 'blur(8px)', scale: 0.98 }
              : variant === 'fadeUp'
              ? { opacity: 0, y: 20, scale: 0.95 }
              : { opacity: 0, scale: 0.98 }
          }
          whileInView={
            variant === 'slide'
              ? { opacity: 1 }
              : variant === 'blurFade'
              ? { opacity: 1, filter: 'blur(0px)', scale: 1 }
              : variant === 'fadeUp'
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 1, scale: 1 }
          }
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          onError={(e) => {
            setVisible(false)
            ;(e.currentTarget as HTMLImageElement).style.display = 'none'
          }}
        />
      )}

      {!visible && (
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
      )}

      {/* Optional circuit variant overlay */}
      {variant === 'circuit' && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={() => {
            if (onceRef.current) return { opacity: 0 }
            onceRef.current = true
            return { opacity: 1 }
          }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.1 }}
          className="pointer-events-none absolute inset-0"
        >
          <motion.div
            initial={{ x: '-110%' }}
            animate={{ x: '110%' }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
            style={{
              backgroundImage: `url(${bgUrl})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              filter: 'brightness(1.2) saturate(1.1)',
              mixBlendMode: 'screen',
              width: '60%',
              height: '100%',
              opacity: 0.85,
              boxShadow: '0 0 40px rgba(99, 102, 241, 0.35)',
            }}
          />
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(120px 120px at 50% 50%, rgba(99,102,241,0.25), transparent 60%)',
              mixBlendMode: 'screen',
            }}
          />
        </motion.div>
      )}

      

      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-black/5 dark:ring-white/5" />
    </motion.div>
  )
}
