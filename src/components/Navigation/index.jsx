import React, { useState } from 'react'
import { NavBarStyle } from './styles'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openNav = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeNav = () => {
    setIsMenuOpen(false)
  }

  return (
    <NavBarStyle className={isMenuOpen ? 'responsive' : ''}>
      <div className="header__main">

        <div className="header__name">
          Mateus Ely Chies
        </div>

        <ul className="header__links">
          <li>
            <a href="#home" onClick={closeNav}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={closeNav}>
              About
            </a>
          </li>

          <li>
            <a href="#projects" onClick={closeNav}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeNav}>
              Contact
            </a>
          </li>
        </ul>

        <div
          className="header__main-ham-menu-cont"
          onClick={openNav}
        >
          &#9776;
        </div>

      </div>
    </NavBarStyle>
  )
}

export default Navigation