import React, { ReactNode } from 'react'
import { Section } from './section'
import { cn } from '@/lib/utils'
interface HeroProps {
  image?: ReactNode
  caption?: ReactNode
  title?: string
  children?: ReactNode
  className?: string
}
export default function Hero({
  image,
  caption,
  title,
  children,
  className,
}: HeroProps) {
  return (
    <Section className={cn('p-6', className)}>
      <div
        className={cn(
          'relative flex flex-col items-start justify-center gap-5 overflow-hidden',
          'sm:items-center sm:gap-6 sm:rounded-lg sm:border sm:bg-card sm:px-8 sm:py-20 sm:shadow-tile lg:gap-8',
        )}
      >
        <h1>hej</h1>
      </div>
    </Section>
  )
}
