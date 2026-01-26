import { useState } from 'react'

function UserProfile() {
	// Estado con objeto
	const [user, setUser] = useState({
		name: '',
		age: 0,
		email: '',
	})

	// TODO: Implementar estas 3 funciones
	const updateName = (newName: string) => {
		// Actualizar solo name sin perder age y email
		setUser({
			...user,
			name: newName,
		})
	}

	const updateAge = (newAge: number) => {
		// Actualizar solo age sin perder name y email
		setUser({
			...user,
			age: newAge,
		})
	}

	const updateEmail = (newEmail: string) => {
		// Actualizar solo email sin perder name y age
		setUser({
			...user,
			email: newEmail,
		})
	}

	return (
		<div
			style={{
				padding: '20px',
				border: '1px solid #ccc',
				borderRadius: '8px',
				maxWidth: '400px',
			}}
		>
			<h2>User Profile</h2>

			<div>
				<label>Name:</label>
				<input
					type='text'
					value={user.name}
					onChange={(e) => updateName(e.target.value)}
					style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
				/>
			</div>

			<div>
				<label>Age:</label>
				<input
					type='number'
					value={user.age}
					onChange={(e) => updateAge(Number(e.target.value))}
					style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
				/>
			</div>

			<div>
				<label>Email:</label>
				<input
					type='email'
					value={user.email}
					onChange={(e) => updateEmail(e.target.value)}
					style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
				/>
			</div>

			<div
				style={{
					marginTop: '20px',
					padding: '10px',
					backgroundColor: '#f0f0f0',
					borderRadius: '4px',
				}}
			>
				<h3>Current Data:</h3>
				<p>Name: {user.name}</p>
				<p>Age: {user.age}</p>
				<p>Email: {user.email}</p>
			</div>
		</div>
	)
}

export default UserProfile
