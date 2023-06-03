import { useContext, useEffect, useState } from "react"
import UserContext from "../../../context/user/UserContext"
import './userPage.scss'
import { FaHandPeace } from "react-icons/fa"
import RepoContext from "../../../context/repos/ReposContext"

function UserProfile() {

  const { user } = useContext(UserContext)
  const { repos } = useContext(RepoContext)

  useEffect(() => {
    console.log(user)
  }, [user])


  return (
    <div className="user-page">
      <span className="user-page__name">{user.nickname} / README.md</span>
      <h2 className="user-page__hi">Hi, I'm {user.name}<FaHandPeace /></h2>
      {user.about ? <span className="user-page__about">About me</span> : null}
      <span className="user-page__contact">Contact me:</span>
      <a href={`mailto:${user.email}`} className="user-page__contact--link">{user.email}</a>
      <span className="user-page__repos">Popular repositories:</span>
      <div className="user-page__container">
        {repos.slice(0, 4).map(repo => {
          let bgColor = '';
          if (repo.language === 'JavaScript') {
            bgColor = 'orange';
          } else if (repo.language === 'TypeScript') {
            bgColor = '#348EDD';
          } else if (repo.language === 'PHP') {
            bgColor = 'violet';
          } else {
            bgColor = 'grey'
          }

          return (
            <div key={repo._id} className="user-page__container--item">
              <span className="user-page__container--item__name">{repo.name}</span>
              <span className="user-page__container--item__visibility">{repo.visibility}</span>
              <span className="user-page__container--item__lang"><div className="user-page__container--item__lang--color" style={{ backgroundColor: bgColor }} />{repo.language}</span>
            </div>
          )
          })}
      </div>
    </div>
  )
}

export default UserProfile