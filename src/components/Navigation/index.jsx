import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavBarStyle } from './styles'
import img01 from '../../assets/images/img01.png'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openNav = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <NavBarStyle className={isMenuOpen ? 'responsive' : ''}>
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img src={img01} className="header__logo-img" />
          </div>
          <span className="header__logo-sub">Mateus Ely Chies</span>
        </div>

        <div className="header__main">
          <ul className="header__links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>

          <div className="header__main-ham-menu-cont" onClick={openNav}>
            &#9776;
          </div>
        </div>
      </div>
    </NavBarStyle>
  )
}

export default Navigation
