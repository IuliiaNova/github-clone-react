import './sidebar.scss';
import { useState, useContext, useEffect } from 'react';
import UserContext from '../../../context/user/UserContext';
import img from '../../../assets/img/avatar_gh.jfif'

const Sidebar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)
  const {user} = useContext(UserContext)
  console.log(user)

  return (

      <nav className='sidebar__nav'>
        <img src={user.avatar_url ? user.avatar_url : img} alt='User avatar' className='sidebar__nav--img'/>
        <span className='sidebar__nav--span'>{user.login}</span>
        <button onClick={() => setToggleDropdown(!toggleDropdown)} className='sidebar__nav--btn'>Edit profile</button>
        

        {toggleDropdown ? (
          <div>
            <span className='sidebar__nav--spann'>{user.location}</span>
          </div>
        ) : null}
        
      </nav>

  )
}

export default Sidebar

