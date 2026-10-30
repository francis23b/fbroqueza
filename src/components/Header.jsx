import { useState } from 'react'
import './Header.css'
import fbLogo from '../assets/image/fbroqueza-logo.png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#home" className="logo" onClick={closeMenu}>
          <img src={fbLogo} alt="Francis Broqueza Logo" />
        </a>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`main-nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Main navigation"
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              closeMenu()
              document.querySelector('.menu-toggle')?.focus()
            }
          }}
        >
          <a href="#banner" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" className="header-contact" onClick={closeMenu} id="resume-download">
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header