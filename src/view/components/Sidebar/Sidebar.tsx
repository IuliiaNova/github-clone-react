import './sidebar.scss';
import React, { useState } from 'react';

const Sidebar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)


  
  return (

      <nav className='header__nav'>
        <img src='@@' alt='User avatar'/>
        <span>Nickname</span>
        <button onClick={() => setToggleDropdown(!toggleDropdown)}>Edir profile</button>

        {toggleDropdown ? (
          <div>hola</div>
        ) : null}
        
      </nav>

  )
}

export default Sidebar

