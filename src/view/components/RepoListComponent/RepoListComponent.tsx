import RepoComponent from '../RepoComponent/RepoComponent'
import './repoListComponent.scss'

const RepoListComponent = ({repos}: any) => {

  return (
    <div className='repo-list'>
      {repos.map((repo) => (
        <RepoComponent
          key={repo._id}
          _id={repo._id}
          name={repo.name}
          visibility={repo.visibility}
          language={repo.language}
          updatedAt={repo.updatedAt} />))}</div>
  )
}

export default RepoListComponent