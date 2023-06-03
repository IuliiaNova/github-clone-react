import { useEffect } from "react"
import { useContext } from "react"
import UserContext from "../../../context/user/UserContext"
import './userPage.scss'

function UserProfile() {

  const {user} = useContext(UserContext)

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <div className="user-page">
      <span>About:</span>
      
    </div> 
  )
}

export default UserProfile