import React from 'react'

type LinkProps = {
  href: string
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
}

export default function Link({ href, children, className, target, rel }: LinkProps) {
  return (
    <a className={className ?? 'link'} href={href} target={target} rel={rel}>
      {children}
    </a>
  )
}
