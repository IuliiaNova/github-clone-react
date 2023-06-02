import './sidebar.scss';
import { useState, useContext } from 'react';
import UserContext from '../../../context/user/UserContext';
import img from '../../../assets/img/avatar_gh.jfif'

const Sidebar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)
  const {user} = useContext(UserContext)

  
  return (

      <nav className='sidebar__nav'>
        <img src={img} alt='User avatar' className='sidebar__nav--img'/>
        <span className='sidebar__nav--span'>{user.nickname}</span>
        <button onClick={() => setToggleDropdown(!toggleDropdown)} className='sidebar__nav--btn'>Edit profile</button>

        {toggleDropdown ? (
          <div>hola</div>
        ) : null}
        
      </nav>

  )
}

export default Sidebar

