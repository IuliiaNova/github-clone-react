
export interface RepoContent {
  _id: number,
  name: string, 
  visibility: string, 
  language: string, 
  updatedAt: Date
}

export interface RepoComponentProps {
  repos: RepoContent;
}
