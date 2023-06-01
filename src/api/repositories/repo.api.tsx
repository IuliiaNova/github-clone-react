
export const getAllReposAPI = async (): Promise<any> => {
	const response = await fetch('https://api.github.com/users/IuliiaNova/repos')
	const data = await response.json()
	return data
}