import HelmetSEO from "../../utils/HelmetSEO"
import './reposPage.scss'
import RepoListComponent from "../../components/RepoListComponent/RepoListComponent"
import RepoContext from "../../../context/repos/ReposContext"
import { useContext, useState } from 'react'
import { Select } from 'antd';
import filtredRepos from "../../components/ButtonsFilter/ButtonsFilter"

const ReposPage = () => {

  const { repos } = useContext(RepoContext)

  const [typeFilter, setTypeFilter] = useState('All')
  const [languageFilter, setLanguageFilter] = useState('')
  const [sortFilter, setSortFilter] = useState('')
  const [searchValue, setSearchValue] = useState('')


  const handleTypeChange = (value: string) => {
    setTypeFilter(value)
  }
  const handleLanguageChange = (value: string) => {
    setLanguageFilter(value)
  }
  const handleSortChange = (value: string) => {
    setSortFilter(value)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const filtred = filtredRepos({repos, typeFilter, languageFilter, sortFilter, searchValue})

  return (
    <HelmetSEO
      title={'GitRepos Repositories'}
      description='GitRepos all epositories'
    >
      <div className="repos-page">
        <div>
          <input 
          type="text" 
          placeholder="Find a repository..." 
          value={searchValue}
          onChange={handleSearchChange}/>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Type"
            optionFilterProp="children"
            onChange={handleTypeChange}
            options={[
              {
                value: 'All',
                label: 'All',
              },
              {
                value: 'Public',
                label: 'Public',
              },
              {
                value: 'Private',
                label: 'Private',
              }
            ]}
          />

          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Language"
            optionFilterProp="children"
            onChange={handleLanguageChange}
            options={[
              {
                value: '',
                label: 'All',
              },
              {
                value: 'JavaScript',
                label: 'JavaScript',
              },
              {
                value: 'TypeScript',
                label: 'TypeScript',
              },
              {
                value: 'PHP',
                label: 'PHP',
              },
              {
                value: 'CSS',
                label: 'CSS',
              }
            ]}
          />

          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Sort"
            optionFilterProp="children"
            onChange={handleSortChange}
            options={[
              {
                value: 'Last updated',
                label: 'Last updated',
              },
              {
                value: 'Name',
                label: 'Name',
              }
            ]}
          />

          <button>NEW</button>
        </div>


        <RepoListComponent repos={filtred} />
      </div>


    </HelmetSEO>
  )
}

export default ReposPage