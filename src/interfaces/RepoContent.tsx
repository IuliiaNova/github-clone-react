export interface Repo {
  name: string,
  visibility: string,
  language: string,
  updated_at: string,
  updatedAt: string,
}

export interface RepoContent {
  id: number,
  name: string, 
  visibility: string, 
  language: string, 
  updated_at: Date
}

export interface RepoComponentProps {
  repos: RepoContent;
}

export interface RepoState {
  repos: RepoContent;
}

export interface RepoAction {
  type: string,
  payload: any;
}

export interface Lang {
  [repoName: string]: string;
}