import HelmetSEO from "../../utils/HelmetSEO"
import RepoComponent from "../../components/RepoComponent/RepoComponent"
import './reposPage.scss'

const ReposPage = () => {

  const content = {
    name: 'test',
    visibility: 'public',
    lenguaje: 'JavaScript',
    updated: 'Updated 8 ago'
  }


  return (
    <HelmetSEO
      title={'GitRepos Repositories'}
      description='GitRepos all epositories'
    >
<div className="repos-page">
  <RepoComponent content={content} />
</div>
      

    </HelmetSEO>
  )
}

export default ReposPage