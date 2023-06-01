import { GET_USER } from "./user.types";

export const userReducer = (state: any, action: any) => {

	const { type, payload } = action;

	switch (type) {
		case GET_USER:
			return {
				...state,
				user: payload
			}

		default:
			return state
	}
}