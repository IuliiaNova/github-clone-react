import HelmetSEO from "../../utils/HelmetSEO"
import UserProfile from "../../components/UserProfile/UserProfile"

const HomePage = () => {
 

  return (
    <HelmetSEO
      title={'GitRepos Profile'}
      description='GitRepos Profile information'
    >
      
   <UserProfile />


    </HelmetSEO>
  )
}

export default HomePage