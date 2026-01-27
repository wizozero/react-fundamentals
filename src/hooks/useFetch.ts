import { useState, useEffect } from 'react'

interface UseFetchResult<T> {
	data: T | null
	isLoading: boolean
	error: string | null
}

// TODO: Implementa useFetch
// Recibe: url (string)
// Devuelve: { data, isLoading, error }

function useFetch<T>(url: string): UseFetchResult<T> {
	const [data, setData] = useState<T | null>(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		// TODO: Implementa la lógica de fetch
		// Es EXACTAMENTE el mismo código que en UserList
		// pero genérico (funciona para cualquier URL y tipo de datos)

		// Pista 1: Crea AbortController
		// Pista 2: Crea función async fetchData
		// Pista 3: try/catch con setIsLoading, setData, setError
		// Pista 4: return cleanup con abort()
		// Pista 5: Dependency array [url]

		const controller = new AbortController()

		const fetchData = async () => {
			try {
				setIsLoading(true)
				setError(null)

				const response = await fetch(url, { signal: controller.signal })
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`)
				}
				const data = await response.json()
				setData(data)
			} catch (err) {
				if (err instanceof Error && err.name !== 'AbortError') {
					setError(err.message)
				}
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()

		return () => controller.abort()
	}, [url])

	return { data, isLoading, error }
}

export default useFetch
