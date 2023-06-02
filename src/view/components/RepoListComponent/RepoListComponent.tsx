import { useEffect, useContext } from 'react';
import RepoContext from '../../../context/repos/ReposContext';
import RepoComponent from '../RepoComponent/RepoComponent';

const RepoListComponent = ({repos}: any) => {

  return (
    <div>
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