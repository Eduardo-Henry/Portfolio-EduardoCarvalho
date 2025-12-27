import React, { useEffect, useState, useRef } from 'react'
import Text from '../atoms/Text'
import '../../styles/about.css'

export default function About() {
  const [scrollState, setScrollState] = useState({ 
    firstTextOpacity: 1, 
    secondTextOpacity: 0,
    thirdTextOpacity: 0,
    allContentOpacity: 1 
  })
  const aboutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutRef.current) return
      
      const aboutRect = aboutRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const aboutTop = aboutRect.top
      
      // Fase 1: Texto 1 visível
      if (aboutTop <= viewportHeight * 0.2 && aboutTop > viewportHeight * -0.15) {
        setScrollState({ 
          firstTextOpacity: 1, 
          secondTextOpacity: 0,
          thirdTextOpacity: 0,
          allContentOpacity: 1 
        })
      }
      // Fase 2: Texto 1 desaparece (sem texto 2 ainda)
      else if (aboutTop <= viewportHeight * -0.15 && aboutTop > viewportHeight * -0.4) {
        const fadeOutProgress = Math.max(0, Math.min(1, (viewportHeight * -0.15 - aboutTop) / (viewportHeight * 0.25)))
        const firstTextOpacity = 1 - fadeOutProgress
        
        setScrollState({ 
          firstTextOpacity, 
          secondTextOpacity: 0,
          thirdTextOpacity: 0,
          allContentOpacity: 1 
        })
      }
      // Fase 3: Texto 2 aparece (texto 1 já sumiu)
      else if (aboutTop <= viewportHeight * -0.4 && aboutTop > viewportHeight * -0.65) {
        const fadeInProgress = Math.max(0, Math.min(1, (viewportHeight * -0.4 - aboutTop) / (viewportHeight * 0.25)))
        const secondTextOpacity = fadeInProgress
        
        setScrollState({ 
          firstTextOpacity: 0, 
          secondTextOpacity,
          thirdTextOpacity: 0,
          allContentOpacity: 1 
        })
      }
      // Fase 4: Texto 2 desaparece (sem texto 3 ainda)
      else if (aboutTop <= viewportHeight * -0.65 && aboutTop > viewportHeight * -0.9) {
        const fadeOutProgress = Math.max(0, Math.min(1, (viewportHeight * -0.65 - aboutTop) / (viewportHeight * 0.25)))
        const secondTextOpacity = 1 - fadeOutProgress
        
        setScrollState({ 
          firstTextOpacity: 0, 
          secondTextOpacity,
          thirdTextOpacity: 0,
          allContentOpacity: 1 
        })
      }
      // Fase 5: Texto 3 aparece (texto 2 já sumiu)
      else if (aboutTop <= viewportHeight * -0.9 && aboutTop > viewportHeight * -1.15) {
        const fadeInProgress = Math.max(0, Math.min(1, (viewportHeight * -0.9 - aboutTop) / (viewportHeight * 0.25)))
        const thirdTextOpacity = fadeInProgress
        
        setScrollState({ 
          firstTextOpacity: 0, 
          secondTextOpacity: 0,
          thirdTextOpacity,
          allContentOpacity: 1 
        })
      }
      // Fase 6: Foto e texto 3 somem juntos - MAIS RÁPIDO
      else if (aboutTop <= viewportHeight * -1.15) {
        const phase6Progress = Math.max(0, Math.min(1, (viewportHeight * -1.15 - aboutTop) / (viewportHeight * 0.15)))
        const allContentOpacity = 1 - phase6Progress
        
        setScrollState({ 
          firstTextOpacity: 0, 
          secondTextOpacity: 0,
          thirdTextOpacity: allContentOpacity,
          allContentOpacity 
        })
      }
      // Estado inicial
      else {
        setScrollState({ 
          firstTextOpacity: 1, 
          secondTextOpacity: 0,
          thirdTextOpacity: 0,
          allContentOpacity: 1 
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="about" className="section about-section bg-guidelines" ref={aboutRef}>
      <div className="about-grid">
        <div 
          className="about-image-wrap"
          style={{
            opacity: scrollState.allContentOpacity,
            transition: 'opacity 0.3s ease-out'
          }}
        >
          <div id="about-image-anchor" className="about-image-anchor" aria-hidden="true" />
        </div>
        <div className="about-right">
          <div className="pill">Know Me</div>
          <h2 className="display section-title">About Me</h2>
          
          {/* Texto 1 - visível inicialmente */}
          {scrollState.firstTextOpacity > 0 && (
            <div 
              className="text-block"
              style={{
                opacity: scrollState.firstTextOpacity,
                transition: 'opacity 0.3s ease-out'
              }}
            >
              <h3 className="subhead">Who Am I?</h3>
              <Text className="muted intro-text">
                I am someone fascinated by creating and observing details that, due to the rush of
                daily life, go unnoticed by most people. <br />This sensitivity naturally led me to UX design,
                both because many people sometimes don't know how to use a product or service, and because
                of the opportunity to create solutions that truly optimize, are pleasing, and functional. <br />
                I believe that the human mind is custom-made and perfect for understanding the world, so
                the fact that someone cannot use a product is not their problem, but rather a problem with
                he design projected for the product.



 
              </Text>
            </div>
          )}
          
          {/* Texto 2 - aparece quando texto 1 some */}
          {scrollState.secondTextOpacity > 0 && (
            <div 
              className="text-block"
              style={{
                opacity: scrollState.secondTextOpacity,
                transition: 'opacity 0.3s ease-out'
              }}
            >
              <h3 className="subhead">How I Started In Design</h3>
              <Text className="muted reveal-text">
                I started in design by combining curiosity with problem-solving. <br /> My background in
                Systems Analysis and Development helped me understand how digital products work technically,
                but I quickly realized that technology alone doesn’t create good experiences. <br /> For me, design became
                the bridge between systems and people. <br /> I began studying UX/UI since 2024's end to learn how to transform complex
                ideas into clear, usable interfaces, always focusing on how users think, feel, and interact with products.
              </Text>
            </div>
          )}
          
          {/* Texto 3 - aparece quando texto 2 some */}
          {scrollState.thirdTextOpacity > 0 && (
            <div 
              className="text-block"
              style={{
                opacity: scrollState.thirdTextOpacity,
                transition: 'opacity 0.3s ease-out'
              }}
            >
              <h3 className="subhead">My Design Mindset</h3>
              <Text className="muted reveal-text">
                I believe that good design is not just about aesthetics, but about clarity, intention, and impact. <br />
                I approach each project by first understanding the problem, the user, and the business context.
                Influenced by authors such as Don Norman and Steve Krug, I focus on usability, simplicity, and meaningful interactions.
                My goal is to accelerate people's process of leveraging their goals by using the digital products I create.
              </Text>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
