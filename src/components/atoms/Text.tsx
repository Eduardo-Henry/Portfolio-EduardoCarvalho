import React from 'react'

type TextProps = {
  as?: 'p' | 'span'
  children: React.ReactNode
  className?: string
}

export default function Text({ as = 'p', children, className }: TextProps) {
  const Tag = as
  return <Tag className={className}>{children}</Tag>
}
