import { getAllReposAPI } from "../../api/repositories/repo.api"
import { GET_ALL_REPOS } from "./repo.types"

export async function getAllReposAction(dispatch: any) {
	try {
		const response = await getAllReposAPI()
		
			return dispatch({
				type: GET_ALL_REPOS,
				payload: response
			})
			
	} catch (err) {
		console.log(err);
	}
}