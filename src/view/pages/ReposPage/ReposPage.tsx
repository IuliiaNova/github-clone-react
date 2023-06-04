import HelmetSEO from "../../utils/HelmetSEO"
import './reposPage.scss'
import RepoListComponent from "../../components/RepoListComponent/RepoListComponent"
import RepoContext from "../../../context/repos/ReposContext"
import { useContext, useState, useEffect } from 'react'
import { Select, Modal } from 'antd';
import filtredRepos from "../../components/ButtonsFilter/ButtonsFilter"
import { RiBook2Line } from "react-icons/ri"
import UserContext from "../../../context/user/UserContext"
import img from '../../../assets/img/avatar_gh.jfif'

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

          {/* <Modal
            title="Create a new repository"
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={500}
            className="modal"
          >
            <span className="modal-span">A repository contains all project files, including the revision history. </span>
            <div className="modal-container">
              <div className="modal-container__owner">
                <p className="modal-container__owner--p">Owner</p>
                <span className="modal-container__owner--user"><img src={user.avatar_url ? user.avatar_url : img}/>{user.login}</span>
              </div>
              <p> / </p>
              <div className="modal-container__input">
                <label htmlFor='repo-name' className="modal-container__input--label">Repository name:</label>
                <input type='text' id='repo-name' className="modal-container__input--input"></input>
              </div>
            </div>
            <div className="modal-container__radio">
              <div>
              <label htmlFor='radio-public'>Public</label>
                <p>Anyone on the internet can see this repository. You choose who can commit.</p>
                <input
                  type='radio'
                  name='radio-public'
                  value='public' />  
              </div>

              <div>
              <label htmlFor='radio-public'>Private</label>
                <p>You choose who can see and commit to this repository.</p>
                <input
                  type='radio'
                  name='radio-private'
                  value='private' />  
              </div>
              
            </div>

          </Modal> */}
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