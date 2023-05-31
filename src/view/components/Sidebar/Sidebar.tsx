import './sidebar.scss';
import { useState } from 'react';
import img from '../../../assets/img/avatar.png'

const Sidebar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)

  
  return (

      <nav className='sidebar__nav'>
        <img src={img} alt='User avatar' className='sidebar__nav--img'/>
        <span className='sidebar__nav--span'>Nickname</span>
        <button onClick={() => setToggleDropdown(!toggleDropdown)} className='sidebar__nav--btn'>Edit profile</button>

        {toggleDropdown ? (
          <div>hola</div>
        ) : null}
        
      </nav>

  )
}

export default Sidebar

