import { User } from "../../interfaces/User"


export const getUserInfoAPI = async (): Promise<any> => {
	const response = await fetch('https://api.github.com/users/IuliiaNova')
	const data = await response.json()
	return data
}

export const getUserAPI = async (): Promise<User> => {
	const response = await fetch('http://localhost:4000/api/v1/get-user')
	const data = await response.json()
	return data
}
