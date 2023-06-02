import { getUserInfoAPI, getUserAPI } from "../../api/user/user.api";
import { GET_USER } from "./user.types";

export async function getUserAction(dispatch: any) {
	try {
		const response = await getUserAPI()
		
			return dispatch({
				type: GET_USER,
				payload: response.user[0]
			})
			
	} catch (err) {
		console.log(err);
	}
}