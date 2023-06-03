import './header.scss';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { RiStarSLine, RiBook2Line, RiProfileLine } from "react-icons/ri";
import RepoContext from '../../../context/repos/ReposContext';
import {useContext} from 'react'



const Header = () => {
  const {repos} = useContext(RepoContext)
  const location = useLocation();

  const cuant = repos.length

  return (
    <header className='header'>
      <nav className='header__nav'>
        <ul className='header__nav__list'>
          <Link to='/'><li className={`header__nav__list__item ${location.pathname === '/' ? 'active' : ''}`}><RiProfileLine className="icon"/>Overview</li></Link>
          <Link to='repos'><li className={`header__nav__list__item ${location.pathname === '/repos' ? 'active' : ''}`}><RiBook2Line className="icon"/>Repositories<span className='header__nav__list__item--span'>{cuant}</span></li></Link>
          <Link to='stars'><li className={`header__nav__list__item ${location.pathname === '/stars' ? 'active' : ''}`}><RiStarSLine className="icon"/>Stars</li></Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header

