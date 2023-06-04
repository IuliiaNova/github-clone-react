import { GET_ALL_REPOS } from "./repo.types";
import { RepoState, RepoAction } from "../../interfaces/RepoContent";

export const repoReducer = (state: RepoState, action: RepoAction) => {
	const { type, payload } = action;

	switch (type) {
		case GET_ALL_REPOS:
			return {
				...state,
				repos: payload
			}

		default:
			return state
	}
}