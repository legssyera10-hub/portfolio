import { useEffect, useMemo, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

type Props<T extends keyof JSX.IntrinsicElements = 'span'> = {
  text: string
  as?: T
  className?: string
  speed?: number // ms per character
  startDelay?: number // ms before start
  cursorChar?: string // default "/"
  hideCursorOnComplete?: boolean
  startOnView?: boolean // start typing when visible
  once?: boolean // run only the first time it enters view
}

// Displays text with a typewriter effect, adding a temporary slash cursor at each step.
export default function Typewriter<T extends keyof JSX.IntrinsicElements = 'span'>(
  {
    text,
    as,
    className,
    speed = 35,
    startDelay = 0,
    cursorChar = '/',
    hideCursorOnComplete = true,
    startOnView = true,
    once = true,
  }: Props<T>
) {
  const Tag = (as || 'span') as any
  const [index, setIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(false)
  const timerRef = useRef<number | null>(null)
  const cursorTimerRef = useRef<number | null>(null)
  const { ref, inView } = useInView({ triggerOnce: once, threshold: 0.2 })

  const safeText = useMemo(() => text ?? '', [text])

  useEffect(() => {
    // Clear timers on unmount or prop changes
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
      if (cursorTimerRef.current) window.clearTimeout(cursorTimerRef.current)
    }
  }, [])

  useEffect(() => {
    if (!safeText) return
    if (startOnView && !inView) return
    // reset when text changes
    setIndex(0)
    setShowCursor(false)

    const tick = (i: number) => {
      if (i > safeText.length) {
        // Done typing
        if (hideCursorOnComplete) setShowCursor(false)
        return
      }

      // Momentarily show the cursor at current position
      setShowCursor(true)
      cursorTimerRef.current = window.setTimeout(() => {
        setShowCursor(false)
      }, Math.max(10, Math.floor(speed * 0.6)))

      setIndex(i)
      timerRef.current = window.setTimeout(() => tick(i + 1), speed)
    }

    const startTimer = window.setTimeout(() => tick(1), startDelay)
    return () => window.clearTimeout(startTimer)
  }, [safeText, speed, startDelay, hideCursorOnComplete, inView, startOnView])

  const visible = safeText.slice(0, index)
  const display = showCursor && index <= safeText.length ? `${visible}${cursorChar}` : visible

  return (
    <Tag ref={ref} className={className} aria-label={safeText}>
      {display}
    </Tag>
  )
}
