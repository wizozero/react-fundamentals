import useLocalStorage from '../hooks/useLocalStorage'

function LocalStorageDemo() {
	const [name, setName] = useLocalStorage('username', '')
	const [count, setCount] = useLocalStorage('count', 0)
	const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light')

	return (
		<div style={{ padding: '20px' }}>
			<h2>LocalStorage Demo</h2>
			<p style={{ color: '#666' }}>
				✨ Los datos persisten al recargar la página
			</p>

			{/* Name */}
			<div style={{ marginBottom: '20px' }}>
				<label>
					Name:
					<input
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder='Enter your name'
						style={{ marginLeft: '10px', padding: '8px' }}
					/>
				</label>
				<p>Stored name: {name || '(empty)'}</p>
			</div>

			{/* Counter */}
			<div style={{ marginBottom: '20px' }}>
				<p>Count: {count}</p>
				<button onClick={() => setCount(count + 1)}>Increment</button>
				<button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>
					Reset
				</button>
			</div>

			{/* Theme */}
			<div style={{ marginBottom: '20px' }}>
				<p>Theme: {theme}</p>
				<button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
					Toggle Theme
				</button>
			</div>

			{/* Instructions */}
			<div
				style={{
					marginTop: '30px',
					padding: '15px',
					backgroundColor: '#f0f0f0',
					borderRadius: '8px',
				}}
			>
				<strong>🧪 Prueba esto:</strong>
				<ol>
					<li>Escribe tu nombre</li>
					<li>Incrementa el contador varias veces</li>
					<li>Cambia el theme</li>
					<li>
						<strong>Recarga la página (F5)</strong>
					</li>
					<li>✨ Todo debería mantenerse!</li>
				</ol>
			</div>

			{/* DevTools tip */}
			<div
				style={{
					marginTop: '20px',
					padding: '15px',
					backgroundColor: '#e3f2fd',
					borderRadius: '8px',
				}}
			>
				<strong>🔍 Inspecciona en DevTools:</strong>
				<p>
					Application → Local Storage → http://localhost:XXXX
					<br />
					Verás: username, count, theme
				</p>
			</div>
		</div>
	)
}

export default LocalStorageDemo
