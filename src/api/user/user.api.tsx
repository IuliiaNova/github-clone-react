import { User } from "../../interfaces/User"

export const getlUser = async (): Promise<User> => {
	const response = await fetch('http://localhost:4000/api/v1/get-user')
	const data = await response.json()
	return data
}