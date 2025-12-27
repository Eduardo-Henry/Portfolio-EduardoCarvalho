import React from 'react'

type HeadingProps = {
  level?: 1 | 2 | 3
  children: React.ReactNode
  className?: string
}

export default function Heading({ level = 1, children, className }: HeadingProps) {
  const Tag: keyof JSX.IntrinsicElements = level === 1 ? 'h1' : level === 2 ? 'h2' : 'h3'
  return <Tag className={className}>{children}</Tag>
}
