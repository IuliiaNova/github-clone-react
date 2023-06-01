import './sidebar.scss';
import { useState, useContext } from 'react';
import img from '../../../assets/img/avatar.png'
import UserContext from '../../../context/user/UserContext';

const Sidebar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)
  const {user} = useContext(UserContext)

  
  return (

      <nav className='sidebar__nav'>
        <img src={user.avatar_url} alt='User avatar' className='sidebar__nav--img'/>
        <span className='sidebar__nav--span'>{user.login}</span>
        <button onClick={() => setToggleDropdown(!toggleDropdown)} className='sidebar__nav--btn'>Edit profile</button>

        {toggleDropdown ? (
          <div>hola</div>
        ) : null}
        
      </nav>

  )
}

export default Sidebar

