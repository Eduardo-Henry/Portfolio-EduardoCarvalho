import React, { useEffect, useRef } from 'react'
import WorkCard from '../molecules/WorkCard'
import '../../styles/works.css'
import KaloBurnImage from '../../assets/KaloBurnUXProject.png'
import MedicineImage from '../../assets/MedicineUXProject.png'
import FashionImage from '../../assets/FashionUXProject.png'

const categories = ['UX Design', 'Social Media', 'Programming', 'All']

const works = [
  { 
    title: 'Kalo Burn', 
    description: 'UX Design project for fitness tracking', 
    tags: ['UX Design', 'Mobile'], 
    imageSrc: KaloBurnImage,
    ctaHref: '#kaloburn' 
  },
  { 
    title: 'MedClinic', 
    description: 'Healthcare platform design', 
    tags: ['UX Design', 'Web'], 
    imageSrc: MedicineImage,
    ctaHref: '#medclinic' 
  },
  { 
    title: 'Fashion UX', 
    description: 'Fashion e-commerce experience', 
    tags: ['UX Design', 'Mobile'], 
    imageSrc: FashionImage,
    ctaHref: '#fashion' 
  },
  { 
    title: 'Kalo Burn', 
    description: 'UX Design project for fitness tracking', 
    tags: ['UX Design', 'Mobile'], 
    imageSrc: KaloBurnImage,
    ctaHref: '#kaloburn' 
  },
  { 
    title: 'MedClinic', 
    description: 'Healthcare platform design', 
    tags: ['UX Design', 'Web'], 
    imageSrc: MedicineImage,
    ctaHref: '#medclinic' 
  },
  { 
    title: 'Fashion UX', 
    description: 'Fashion e-commerce experience', 
    tags: ['UX Design', 'Mobile'], 
    imageSrc: FashionImage,
    ctaHref: '#fashion' 
  },
]

export default function Works() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('reveal')
            }, index * 100)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
      }
    )

    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.work-card')
      cards.forEach((card) => observer.observe(card))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="section works-section bg-guidelines">
      <div className="works-head">
        <div className="pill">What I can Do</div>
        <h2 className="display section-title">Works</h2>
        <p className="muted">Selected Works</p>
        <div className="category-nav">
          {categories.map((c) => (
            <a key={c} href="#" className="pill small">{c}</a>
          ))}
        </div>
      </div>

      <div className="work-grid" ref={gridRef}>
        {works.map((w, i) => (
          <WorkCard key={`${w.title}-${i}`} {...w} />
        ))}
      </div>
    </section>
  )
}
