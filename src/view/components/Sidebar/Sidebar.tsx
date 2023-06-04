import './sidebar.scss';
import { useState, useContext, useEffect } from 'react';
import UserContext from '../../../context/user/UserContext';
import img from '../../../assets/img/avatar_gh.jfif'
import { MdOutlinePeopleAlt } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";



const Sidebar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)
  const { user } = useContext(UserContext)
  console.log(user)

  return (
    <nav className='sidebar__nav'>
      <img src={user.avatar_url ? user.avatar_url : img} alt='User avatar' className='sidebar__nav--img' />
      <span className='sidebar__nav--span'>{user.login}</span>
      <div className='sidebar__nav--follow'>
        <MdOutlinePeopleAlt className='icon-follow' />
        <span className='follow'>{user.followers}</span>
        <span>followers</span> ~ 
        <span className='follow'>{user.following}</span>
        <span>following</span>
      </div>
      <button onClick={() => setToggleDropdown(!toggleDropdown)} className='sidebar__nav--btn'>Profile</button>

      {toggleDropdown ? (
        <div>

          <span className='sidebar__nav--location'><CiLocationOn className='icon-location'/>{user.location}</span>

        </div>
      ) : null}

    </nav>
  )
}

export default Sidebar

