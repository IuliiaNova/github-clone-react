import React from 'react'
import './repoComponent.scss'
import { RepoComponentProps } from '../../../interfaces/RepoContent'
import { RiStarSLine } from "react-icons/ri"

const RepoComponent: React.FC<RepoComponentProps> = ({ content }) => {
  const { name, visibility, lenguaje, updated } = content

  return (
    <div className="repo">
      <div className="repo__right">
        <div className="repo__right--firstline">
          <span className="repo__right--firstline--name">{name}</span>
          <span className="repo__right--firstline--visib">{visibility}</span>
        </div>
        <div className="repo__right--secondline">
          <div className="repo__right--secondline--lenguaje">
            <div className="repo__right--secondline--lenguaje--color"/>
            <span className="repo__right--secondline--lenguaje--name">{lenguaje}</span>
          </div>
          <span className="repo__right--secondline--undated">{updated}</span>
        </div>
      </div>

      <div className="repo__left">
        <button className="repo__left--btn"><RiStarSLine className='icon'/>Star</button>
        <hr className="repo__left--hr"/>
      </div>
    </div>
  )
}

export default RepoComponent