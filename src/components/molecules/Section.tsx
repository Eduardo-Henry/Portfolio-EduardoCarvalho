import React from 'react'
import Heading from '../atoms/Heading'

type SectionProps = {
  id: string
  title: string
  children: React.ReactNode
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <Heading level={2}>{title}</Heading>
      <div className="section-content">{children}</div>
    </section>
  )
}
