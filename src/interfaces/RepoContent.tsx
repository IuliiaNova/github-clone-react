
export interface RepoContent {
  id: number,
  name: string, 
  visibility: string, 
  languages_url: string, 
  updated_at: Date
}

export interface RepoComponentProps {
  repos: RepoContent;
}