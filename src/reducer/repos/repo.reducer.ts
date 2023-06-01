import { GET_ALL_REPOS } from "./repo.types";

export const repoReducer = (state: any, action: any) => {
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