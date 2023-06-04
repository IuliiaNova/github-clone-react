
export const getAllReposAPI = async (): Promise<unknown> => {

	const response = await fetch('https://api.github.com/users/IuliiaNova/repos')
	const data = await response.json()
	return data
}

export const getReposAPI = async (): Promise<unknown> => {
	const response = await fetch('http://localhost:4000/api/v1/get-repos')
	const data = await response.json()
	return data
}