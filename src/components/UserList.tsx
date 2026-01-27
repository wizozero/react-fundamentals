import { useState, useEffect } from 'react'

interface User {
	id: number
	name: string
	email: string
	username: string
}

function UserList() {
	const [users, setUsers] = useState<User[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	// TODO: Implementa useEffect para fetch de datos
	// 1. Usa fetch para obtener datos de: https://jsonplaceholder.typicode.com/users
	// 2. Maneja estados: isLoading (true al inicio, false al terminar)
	// 3. Maneja errores: si fetch falla, setError con el mensaje
	// 4. Al tener datos, setUsers con el resultado
	// 5. IMPORTANTE: Usa AbortController para cleanup

	useEffect(() => {
		const controller = new AbortController()

		const fetchUsers = async () => {
			try {
				setIsLoading(true)
				setError(null) // Limpiar error anterior

				const response = await fetch(
					'https://jsonplaceholder.typicode.com/users',
					{ signal: controller.signal },
				)

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`)
				}

				const data = await response.json()
				setUsers(data)
			} catch (err) {
				if (err instanceof Error && err.name !== 'AbortError') {
					setError(err.message)
				}
			} finally {
				setIsLoading(false) // Siempre se ejecuta
			}
		}

		fetchUsers()

		return () => {
			controller.abort()
		}
	}, [])

	return (
		<div style={{ padding: '20px', maxWidth: '800px' }}>
			<h2>User List</h2>

			{isLoading && <p>Loading users...</p>}

			{error && <p style={{ color: 'red' }}>Error: {error}</p>}

			{!isLoading && !error && (
				<ul style={{ listStyle: 'none', padding: 0 }}>
					{users.map((user) => (
						<li
							key={user.id}
							style={{
								padding: '15px',
								marginBottom: '10px',
								backgroundColor: '#f0f0f0',
								borderRadius: '8px',
							}}
						>
							<strong>{user.name}</strong> (@{user.username})
							<br />
							<span style={{ color: '#666' }}>{user.email}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default UserList
