import { getUserInfoAPI } from "../../api/user/user.api";
import { GET_USER } from "./user.types";

export async function getUserAction(dispatch: any) {
	try {
		const response = await getUserInfoAPI()
		
			return dispatch({
				type: GET_USER,
				payload: response
			})
			
	} catch (err) {
		console.log(err);
	}
}