import React from 'react'

export type WorkCardProps = {
  title: string
  description: string
  tags?: string[]
  imageSrc?: string
  ctaHref?: string
  ctaLabel?: string
}

export default function WorkCard({
  title,
  description,
  tags = [],
  imageSrc,
  ctaHref = '#',
  ctaLabel = 'See Case Study →',
}: WorkCardProps) {
  return (
    <article className="work-card">
      <div className={"thumb" + (!imageSrc ? ' placeholder' : '')}>
        {imageSrc ? (
          <img src={imageSrc} alt={title} />
        ) : (
          <div className="thumb-fallback" aria-hidden />
        )}
      </div>
      <div className="work-meta">
        <h3 className="work-title">{title}</h3>
        <p className="work-desc muted">{description}</p>
        {tags.length > 0 && (
          <ul className="work-tags">
            {tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
        <a className="case-btn" href={ctaHref}>{ctaLabel}</a>
      </div>
    </article>
  )
}
