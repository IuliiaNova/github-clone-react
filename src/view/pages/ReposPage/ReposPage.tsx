import './reposPage.scss'
import HelmetSEO from "../../utils/HelmetSEO"
import RepoPageComponent from '../../components/RepoPageComponent.tsx/RepoPageComponent'

const ReposPage = () => {

  return (
    <HelmetSEO
      title={'GitRepos Repositories'}
      description='GitRepos all epositories'
    >
      <RepoPageComponent />
    </HelmetSEO>
  )
}

export default ReposPage