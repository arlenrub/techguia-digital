'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Props {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
}

export default function CountUp({
  end,
  duration = 2,
  suffix = '',
  prefix = '',
  decimals = 0
}: Props) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const started = useRef(false)
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true

    const startTime = performance.now()
    const endTime = startTime + duration * 1000
    let rAFId: number

    function easeOutExpo(t: number): number {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
    }

    function update(currentTime: number) {
      const elapsed = currentTime - startTime
      const total = endTime - startTime
      const progress = Math.min(elapsed / total, 1)
      const easedProgress = easeOutExpo(progress)
      const current = easedProgress * end

      setCount(parseFloat(current.toFixed(decimals)))

      if (progress < 1) {
        rAFId = requestAnimationFrame(update)
      } else {
        setCount(end)
        setFinished(true)
      }
    }

    rAFId = requestAnimationFrame(update)

    return () => {
      if (rAFId) {
        cancelAnimationFrame(rAFId)
      }
    }
  }, [inView, end, duration, decimals])

  return (
    <span
      ref={ref}
      className={`transition-all duration-500 ${
        finished 
          ? 'drop-shadow-[0_0_20px_rgba(255,140,0,0.5)]' 
          : ''
      }`}
    >
      {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}
    </span>
  )
}
