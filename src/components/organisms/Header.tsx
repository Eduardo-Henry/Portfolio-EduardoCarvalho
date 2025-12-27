import React, { useEffect, useState } from 'react'
import Link from '../atoms/Link'
import Logo from '../../assets/LogoEduardoCarvalho.svg'
import LogoInverted from '../../assets/LogoEduardoCarvalhoInverted.svg'
import IconMenuWhite from '../../assets/iconMenuWhite.svg'
import IconMenuBlack from '../../assets/iconMenuBlack.svg'
import PDF from '../../assets/Curriculo-EduardoCarvalho.pdf'
import '../../styles/header.css'

export default function Header() {
  const [isLightMode, setIsLightMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const processSection = document.getElementById('process')
      const contactSection = document.getElementById('contact')
      
      if (processSection && contactSection) {
        const processRect = processSection.getBoundingClientRect()
        const contactRect = contactSection.getBoundingClientRect()
        
        // Header está sobre seções Process ou Contact (brancas)
        const isOverWhiteSection = 
          (processRect.top <= 50 && processRect.bottom > 50) ||
          (contactRect.top <= 50 && contactRect.bottom > 50)
        
        setIsLightMode(isOverWhiteSection)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isLightMode ? 'light-mode' : ''}`}>
      <a href="#home" className="brand">
        <img src={isLightMode ? Logo : LogoInverted} alt="Logo" className="brand-logo" />
      </a>
      <button 
        className="menu-toggle" 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <img 
          src={isLightMode ? IconMenuWhite : IconMenuBlack} 
          alt="Menu" 
          className="menu-icon" 
        />
      </button>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <Link href="#about" onClick={() => setMenuOpen(false)}>About Me</Link>
        <Link href="#projects" onClick={() => setMenuOpen(false)}>Works</Link>
        <Link href="#process" onClick={() => setMenuOpen(false)}>Process</Link>
        <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <a className="resume"  href={PDF} download aria-label="Download CV" onClick={() => setMenuOpen(false)}>Download CV</a>
      </nav>
    </header>
  )
}
