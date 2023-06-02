import { useEffect } from "react"
import { useContext } from "react"
import UserContext from "../../../context/user/UserContext"

function UserProfile() {

  const {user} = useContext(UserContext)

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <div>
      <span>About:</span>
      
    </div> 
  )
}

export default UserProfile