
export interface RepoContent {
  name: string, 
  visibility: string, 
  lenguaje: string, 
  updated: string
}

export interface RepoComponentProps {
  content: RepoContent;
}