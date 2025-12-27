import React from 'react'
import '../../styles/carousel.css'

const phrases = [
  'Discover the power of techniques that transform ideas into reality.',
  'Design systems built for accessibility and clarity.',
  'Performance meets beauty in every interface.',
  'Crafting experiences that users love.',
  'Minimal complexity, maximum impact.',
]

export default function Carousel() {
  return (
    <section className="carousel-section">
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {/* Original phrases */}
          {phrases.map((phrase, i) => (
            <div key={`original-${i}`} className="carousel-item">
              <p className="carousel-text">{phrase}</p>
            </div>
          ))}
          {/* Duplicated for seamless loop */}
          {phrases.map((phrase, i) => (
            <div key={`duplicate-${i}`} className="carousel-item">
              <p className="carousel-text">{phrase}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
