import { useReducer, useEffect, useMemo  } from 'react'
import RepoContext from './ReposContext';
import {repoReducer} from '../../reducer/repos/repo.reducer';
import initialRepoState from './initialRepoState';
import { getAllReposAction } from '../../reducer/repos/repo.actions';

export interface ChildrenProps {
  children: React.ReactNode
}

export default function ReposProvider(props: ChildrenProps) {

  const [repoState, dispatch] = useReducer(repoReducer, initialRepoState)

  useEffect(() => {
    const getAllRepos = async () => {
        await getAllReposAction(dispatch)
    }
    getAllRepos()
  }, [])

  const memoProvider = useMemo(() => ({ 
    ...repoState, 
     }), [repoState]);

  return (
    <RepoContext.Provider value={memoProvider}>
      {props.children}
    </RepoContext.Provider>
  )
}
