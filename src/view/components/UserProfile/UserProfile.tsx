import { useContext, useEffect, useState } from "react"
import UserContext from "../../../context/user/UserContext"
import './userPage.scss'
import { FaHandPeace } from "react-icons/fa"
import RepoContext from "../../../context/repos/ReposContext"
import { Lang } from "../../../interfaces/RepoContent"

function UserProfile() {

  const { user } = useContext(UserContext)
  const { repos } = useContext(RepoContext)
  const [languages, setLanguages] = useState<Lang>({})

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
    <div className="user-page">
      <span className="user-page__name">{user.login} / README.md</span>
      <h2 className="user-page__hi">Hi, I'm {user.name}<FaHandPeace /></h2>
      {user.about ? <span className="user-page__about">About me</span> : null}
      <span className="user-page__contact">Contact me:</span>
      <a href={user.email ? (`mailto:${user.email}`) : (`mailto:`)} className="user-page__contact--link">{user.email ? user.email : 'mymail@gmail.com'}</a>
      <span className="user-page__repos">Popular repositories:</span>

      <div className="user-page__container">
        {repos.slice(0, 4).map(repo => {
          let bgColor = '';
          if (repo.language === 'JavaScript' || languages[repo.name] === 'JavaScript') {
            bgColor = 'orange';
          } else if (repo.language === 'TypeScript' || languages[repo.name] === 'TypeScript') {
            bgColor = '#348EDD';
          } else if (repo.language === 'PHP' || languages[repo.name] === 'PHP') {
            bgColor = 'violet';
          } else {
            bgColor = 'grey'
          }

          return (
            <div key={repo._id} className="user-page__container--item">
              <span className="user-page__container--item__name">{repo.name}</span>
              <span className="user-page__container--item__visibility">{repo.visibility}</span>
              <span className="user-page__container--item__lang">
                <div className="user-page__container--item__lang--color" style={{ backgroundColor: bgColor }} />{repo.language === null ? (languages[repo.name] || 'JavaScript'): repo.language}
                </span>
            </div>
          )
          })}
      </div>
    </div>
  )
}

export default UserProfile