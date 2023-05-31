import './header.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { RiStarSLine, RiBook2Line, RiProfileLine } from "react-icons/ri";


const Header = () => {
  const location = useLocation();
  
  return (
    <header className='header'>
      <nav className='header__nav'>
        <ul className='header__nav__list'>
          <Link to='/'><li className={`navbar-page__nav__list__item ${location.pathname === '/' ? 'active' : ''}`}><RiProfileLine/>Overview</li></Link>
          <Link to='repos'><li className={`navbar-page__nav__list__item ${location.pathname === '/repos' ? 'active' : ''}`}><RiBook2Line/>Repositories</li></Link>
          <Link to='stars'><li className={`navbar-page__nav__list__item ${location.pathname === '/stars' ? 'active' : ''}`}><RiStarSLine/>Stars</li></Link>
          </ul>
      </nav>
    </header>
  )
}

export default Header

