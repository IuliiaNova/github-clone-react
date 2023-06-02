interface Repo {
  name: string,
  visibility: string,
  language: string,
  updatedAt: string
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
      if (repo.language.trim() !== languageFilter) {
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
      return new Date(repoB.updatedAt).getTime() - new Date(repoA.updatedAt).getTime()
    } else if (sortFilter === 'Name') {
      return repoA.name.localeCompare(repoB.name)
    }

    return 0
  })
}

export default filtredRepos