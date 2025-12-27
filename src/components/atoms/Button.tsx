import React from 'react'

type ButtonProps = {
  href: string
  children: React.ReactNode
  className?: string
}

export default function Button({ href, children, className }: ButtonProps) {
  return (
    <a className={className ?? 'button'} href={href}>
      {children}
    </a>
  )
}
