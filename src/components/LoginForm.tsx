import { useState } from 'react'

function LoginForm() {
	// TODO: Crear 3 estados:
	// 1. email (string)
	// 2. password (string)
	// 3. showPassword (boolean)

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)

	const handleSubmit = () => {
		console.log('Email:', email)
		console.log('Password:', password)
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
			<h2>Login Form</h2>

			{/* TODO: Input de email */}
			<input
				type='email'
				placeholder='Email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				style={{
					width: '100%',
					padding: '8px',
					marginBottom: '10px',
				}}
			/>

			{/* TODO: Input de password */}
			<input
				type={showPassword ? 'text' : 'password'}
				placeholder='Password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				style={{
					width: '100%',
					padding: '8px',
					marginBottom: '10px',
				}}
			/>

			{/* TODO: Checkbox para mostrar/ocultar password */}
			<label>
				<input
					type='checkbox'
					checked={showPassword}
					onChange={(e) => setShowPassword(e.target.checked)}
				/>
				Show Password
			</label>

			<button
				onClick={handleSubmit}
				style={{
					width: '100%',
					padding: '10px',
					marginTop: '10px',
				}}
			>
				Login
			</button>
		</div>
	)
}

export default LoginForm
