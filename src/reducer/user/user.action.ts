import { getUserInfoAPI, getUserAPI } from "../../api/user/user.api";
import { GET_USER } from "./user.types";

export async function getUserAction(dispatch: any) {
	try {

		//GitHub API REST
		
		const response = await getUserInfoAPI()
		
			return dispatch({
				type: GET_USER,
				payload: response
			})

		// DB with seeders

		// const response = await getUserAPI()
		
		// 	return dispatch({
		// 		type: GET_USER,
		// 		payload: response.user[0]
		// 	})
			
	} catch (err) {
		console.log(err);
	}
}