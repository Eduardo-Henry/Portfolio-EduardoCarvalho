import React, { useEffect, useState } from 'react'
import Logo from '../../assets/LogoEduardoCarvalhoInverted.svg'
import '../../styles/splash.css'

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setIsVisible(false), 1200)
    const removeTimer = window.setTimeout(() => setShouldRender(false), 1900)

    return () => {
      window.clearTimeout(fadeTimer)
      window.clearTimeout(removeTimer)
    }
  }, [])

  if (!shouldRender) return null

  return (
    <div className={`splash-screen ${isVisible ? 'is-visible' : 'is-hidden'}`} aria-hidden="true">
      <div className="splash-logo">
        <img src={Logo} alt="" />
      </div>
    </div>
  )
}
