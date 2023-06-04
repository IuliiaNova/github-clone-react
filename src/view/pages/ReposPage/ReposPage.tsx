import HelmetSEO from "../../utils/HelmetSEO"
import './reposPage.scss'
import RepoListComponent from "../../components/RepoListComponent/RepoListComponent"
import RepoContext from "../../../context/repos/ReposContext"
import { useContext, useState, useEffect } from 'react'
import { Select, Modal } from 'antd';
import filtredRepos from "../../components/ButtonsFilter/ButtonsFilter"
import { RiBook2Line } from "react-icons/ri"
import UserContext from "../../../context/user/UserContext"

const ReposPage = () => {

  const { repos } = useContext(RepoContext)
  const { user } = useContext(UserContext)

  const [typeFilter, setTypeFilter] = useState('All')
  const [languageFilter, setLanguageFilter] = useState('')
  const [sortFilter, setSortFilter] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(repos)

  }, [repos])


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

  const filtred = filtredRepos({ repos, typeFilter, languageFilter, sortFilter, searchValue })

  return (
    <HelmetSEO
      title={'GitRepos Repositories'}
      description='GitRepos all epositories'
    >
      <div className="repos-page">
        <div className="repos-page__filtors">
          <input
            type="text"
            placeholder="Find a repository..."
            value={searchValue}
            onChange={handleSearchChange}
            className="repos-page__filtors--input" />

          <Select
            showSearch
            style={{ width: 120 }}
            placeholder="Sort"
            optionFilterProp="children"
            filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input)}
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            onChange={handleSortChange}
            className="repos-page__filtors--select"
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

          <Select
            showSearch
            style={{ width: 135 }}
            placeholder="Type"
            optionFilterProp="children"
            filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input)}
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            onChange={handleTypeChange}
            className="repos-page__filtors--select"
            options={[
              {
                value: 'All',
                label: 'All',
              },
              {
                value: 'public',
                label: 'Public',
              },
              {
                value: 'private',
                label: 'Private',
              }
            ]}
          />

          <Select
            showSearch
            style={{ width: 135 }}
            placeholder="Language"
            optionFilterProp="children"
            filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input)}
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            onChange={handleLanguageChange}
            className="repos-page__filtors--select"
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
              }
            ]}
          />


          <button className="repos-page__filtors--btn" onClick={() => setOpen(true)}><RiBook2Line />NEW</button>
          <Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
        </div>

        {filtred.length > 0 ? (
          <>
            {searchValue || typeFilter === 'Private' || typeFilter === 'Public' || languageFilter !== '' ? (
              <span className="repos-page__match">{filtred.length} results for repositories matching {searchValue}</span>
            ) : null}
            <RepoListComponent repos={filtred} searchValue={searchValue} />
          </>
        ) : <span className="repos-page__match">{user.login} doesn’t have any repositories that match</span>}


      </div>


    </HelmetSEO>
  )
}

export default ReposPage