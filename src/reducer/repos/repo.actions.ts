import { getAllReposAPI, getReposAPI } from "../../api/repositories/repo.api"
import { GET_ALL_REPOS } from "./repo.types"

export async function getAllReposAction(dispatch: any) {
	try {

		// GitHub

		// const response = await getAllReposAPI()
		// return dispatch({
		// 	type: GET_ALL_REPOS,
		// 	payload: response
		// })

		// DB with seeders
		
		const response = await getReposAPI()
		return dispatch({
			type: GET_ALL_REPOS,
			payload: response.repo
		})

	} catch (err) {
		console.log(err);
	}
}