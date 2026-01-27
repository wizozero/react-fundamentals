import useFetch from '../hooks/useFetch'

interface User {
	id: number
	name: string
	email: string
	username: string
}

function UserListRefactored() {
	// ✨ Una sola línea reemplaza ~25 líneas de código
	const {
		data: users,
		isLoading,
		error,
	} = useFetch<User[]>('https://jsonplaceholder.typicode.com/users')

	return (
		<div style={{ padding: '20px', maxWidth: '800px' }}>
			<h2>User List (Refactored with useFetch)</h2>

			{isLoading && <p>Loading users...</p>}

			{error && <p style={{ color: 'red' }}>Error: {error}</p>}

			{!isLoading && !error && users && (
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

export default UserListRefactored
