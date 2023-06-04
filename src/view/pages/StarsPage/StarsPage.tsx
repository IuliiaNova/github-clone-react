import HelmetSEO from "../../utils/HelmetSEO"
import StarsComponent from "../../components/StarsComponent/StarsComponent"

const StarsPage = () => {
 
  return (
    <HelmetSEO
      title={'GitRepos Stars'}
      description='GitRepos all stars'
    >
      
   <StarsComponent />
    </HelmetSEO>
  )
}

export default StarsPage