import React from 'react'

type TagProps = {
  children: React.ReactNode
}

export default function Tag({ children }: TagProps) {
  return <li>{children}</li>
}
