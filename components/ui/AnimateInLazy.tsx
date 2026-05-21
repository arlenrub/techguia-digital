'use client'
import React, { useState, useEffect, Suspense } from 'react'

const LazyAnimateIn = React.lazy(() => import('./AnimateIn'))

interface Props {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  className?: string
}

export default function AnimateIn({ children, ...props }: Props) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={props.className}>{children}</div>
  }

  return (
    <Suspense fallback={<div className={props.className}>{children}</div>}>
      <LazyAnimateIn {...props}>{children}</LazyAnimateIn>
    </Suspense>
  )
}
