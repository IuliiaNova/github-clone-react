import {createContext} from 'react';
import initialRepoState from './initialRepoState';

const RepoContext = createContext(initialRepoState)

export default RepoContext