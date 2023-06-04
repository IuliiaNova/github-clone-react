import React, { useEffect, useState } from 'react'
import './repoComponent.scss'
import { RepoComponentProps } from '../../../interfaces/RepoContent'
import { RiStarSLine } from "react-icons/ri"
import moment from 'moment'

const RepoComponent: React.FC<RepoComponentProps> = ({ id, name, visibility, language, updated_at }) => {

  const formatedData = moment(updated_at).fromNow()
  const [bgColor, setBgColor]= useState('')

  useEffect(()=>{
    if(language === 'JavaScript'){
      setBgColor('orange')
    } else if (language === 'TypeScript'){
      setBgColor('#348EDD')
    } else if (language === 'PHP'){
      setBgColor('violet')
    } else {
      setBgColor('grey')
    }

  }, [language])

  return (
    <div className="repo" key={id}>
      <div className="repo__right">
        <div className="repo__right--firstline">
          <span className="repo__right--firstline--name">{name}</span>
          <span className="repo__right--firstline--visib">{visibility}</span>
        </div>
        <div className="repo__right--secondline">
          <div className="repo__right--secondline--lenguaje">
            <div className="repo__right--secondline--lenguaje--color" style={{backgroundColor: bgColor}}/>
            <span className="repo__right--secondline--lenguaje--name">{language}</span>
          </div>
          <span className="repo__right--secondline--undated">{formatedData}</span>
        </div>
      </div>

      <div className="repo__left">
        <button className="repo__left--btn"><RiStarSLine className='icon' />Star</button>
        <hr className="repo__left--hr" />
      </div>
    </div>
  )
}

export default RepoComponent