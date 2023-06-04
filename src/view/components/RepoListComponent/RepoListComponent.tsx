import RepoComponent from '../RepoComponent/RepoComponent'
import './repoListComponent.scss'
import { useEffect, useState } from 'react'


const RepoListComponent = ({repos}: any) => {

  const [languages, setLanguages] = useState<any>({})

  useEffect(()=>{
    const fetchLang = async ()=>{
      for (const repo of repos){
        if (repo.language === null){
          const response = await fetch(`https://api.github.com/repos/IuliiaNova/${repo.name}/languages`);
          const data = await response.json();
          const langKeys = Object.keys(data);
          if(langKeys.length > 0){
            const repoLang = langKeys[0];
            setLanguages(prevLang =>({
              ...prevLang,
              [repo.name]: repoLang
            }))
          }
        }
      }
    }
    fetchLang()
  }, [repos])

  return (
    <div className='repo-list'>
      {repos.map((repo) => (
        <RepoComponent
          key={repo.id}
          id={repo.id}
          name={repo.name}
          visibility={repo.visibility}
          language={repo.language === null ? languages[repo.name] || 'HTML': repo.language}
          updated_at={repo.updated_at ? repo.updated_at : repo.updatedAt} />))}</div>
  )
}

export default RepoListComponent