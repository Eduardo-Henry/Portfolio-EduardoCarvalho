import { useEffect, useRef, useState } from 'react'

export type ParallaxState = {
  scale: number
  translateY: number
  translateX: number
  opacity: number
  position: 'relative' | 'fixed' | 'absolute'
  zIndex: number
}

export function useParallaxImage(
  heroRef: React.RefObject<HTMLElement>,
  aboutRef: React.RefObject<HTMLElement>,
  initialSize: number = 160
): ParallaxState {
  const [state, setState] = useState<ParallaxState>({
    scale: 1,
    translateY: 0,
    translateX: 0,
    opacity: 1,
    position: 'relative',
    zIndex: 1,
  })

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current || !aboutRef.current) return

      const viewportHeight = window.innerHeight
      const scrollY = window.scrollY

      // Hero bounds
      const heroRect = heroRef.current.getBoundingClientRect()
      const heroBottom = heroRect.bottom + scrollY

      // About bounds
      const aboutRect = aboutRef.current.getBoundingClientRect()
      const aboutTop = aboutRect.top + scrollY
      const aboutBottom = aboutRect.bottom + scrollY

      // Phase 1: Image grows from initial size to viewport size during hero scroll
      // This happens while scrollY is between hero start and about start
      const heroStart = scrollY
      const growthRange = aboutTop - heroStart

      if (scrollY < aboutTop) {
        // Scaling phase: image grows
        const progress = (scrollY - heroStart) / growthRange
        const maxScale = viewportHeight / initialSize
        const scale = 1 + (maxScale - 1) * Math.min(1, progress)
        const translateY = scrollY * 0.15 // slight parallax while growing
        
        setState({
          scale,
          translateY,
          translateX: 0,
          opacity: 1,
          position: 'fixed',
          zIndex: 50,
        })
      } else if (scrollY >= aboutTop && scrollY < aboutBottom) {
        // Transition phase: snap to About left side
        const maxScale = viewportHeight / initialSize
        const transitionProgress = (scrollY - aboutTop) / (aboutBottom - aboutTop)
        
        // Scale down to fit in About
        const finalScale = 0.5
        const scale = maxScale - (maxScale - finalScale) * transitionProgress
        
        // Move to About position (left side, fixed width ~280px)
        const aboutLeftX = 40
        const translateX = transitionProgress * (aboutLeftX - (viewportHeight * (maxScale - 1)) / 2)
        const translateY = -(aboutTop - heroStart - growthRange) * 0.15
        
        setState({
          scale,
          translateY,
          translateX,
          opacity: 1,
          position: 'fixed',
          zIndex: 50,
        })
      } else {
        // After About: stick to left side
        const maxScale = viewportHeight / initialSize
        const finalScale = 0.5
        
        setState({
          scale: finalScale,
          translateY: 0,
          translateX: 40,
          opacity: 1,
          position: 'relative',
          zIndex: 1,
        })
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [heroRef, aboutRef, initialSize])

  return state
}
