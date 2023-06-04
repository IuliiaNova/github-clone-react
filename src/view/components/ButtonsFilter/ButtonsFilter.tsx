interface Repo {
  name: string,
  visibility: string,
  language: string,
  updated_at: string,
  updatedAt: string,
}

const filtredRepos = ({
  repos,
  typeFilter,
  languageFilter,
  sortFilter,
  searchValue
}: {
    repos: Repo[];
    typeFilter: string,
    languageFilter: string,
    sortFilter: string,
    searchValue: string
  }): Repo[] => {

  return repos && repos.filter((repo: Repo) => {

    if (typeFilter !== 'All') {
      if (repo.visibility !== typeFilter) {
        return false
      }
    }

    if (languageFilter !== '') {
      if (repo.language !== languageFilter) {
        return false
      }
    }

    if(searchValue.length >= 3){
      return repo.name.toLowerCase().includes(searchValue.toLowerCase())
    }

    // if(languageFilter !== '' && languageFilter.length === 0){
    //   return console.log('No hay repositories con lenguaje eligido')
    // }

    return true
  }).sort((repoA: Repo, repoB: Repo) => {
    if (sortFilter === 'Last updated') {
      if(repoA.updated_at){
        return new Date(repoB.updated_at).getTime() - new Date(repoA.updated_at).getTime()
      } else {
        return new Date(repoB.updatedAt).getTime() - new Date(repoA.updatedAt).getTime()
      }
      
    } else if (sortFilter === 'Name') {
      return repoA.name.localeCompare(repoB.name)
    }

    return 0
  })
}

export default filtredRepos