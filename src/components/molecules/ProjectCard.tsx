import React from 'react'
import Heading from '../atoms/Heading'
import Button from '../atoms/Button'
import Link from '../atoms/Link'
import Tag from '../atoms/Tag'

export type ProjectCardProps = {
  title: string
  description: string
  tags?: string[]
  link?: string
  repo?: string
}

export default function ProjectCard({ title, description, tags = [], link, repo }: ProjectCardProps) {
  return (
    <article className="card">
      <Heading level={3}>{title}</Heading>
      <p>{description}</p>
      {tags?.length > 0 && (
        <ul className="tags">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </ul>
      )}
      <div className="card-actions">
        {link && (
          <Button href={link}>Live</Button>
        )}
        {repo && (
          <Link href={repo} target="_blank" rel="noopener noreferrer">Code</Link>
        )}
      </div>
    </article>
  )
}
