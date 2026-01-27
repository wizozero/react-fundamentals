import { useState, useEffect } from 'react'

function DocumentTitle() {
	const [count, setCount] = useState(0)

	// TODO: Implementa useEffect
	// Debe actualizar document.title con el valor de count
	// Pista: usa document.title = "algo"
	// Pregunta: ¿Qué va en el dependency array?

	useEffect(() => {
		document.title = `Cambio de titulo ${count}`
	}, [count])

	return (
		<div style={{ padding: '20px' }}>
			<h2>Document Title Updater</h2>
			<p>Count: {count}</p>
			<p style={{ color: '#666' }}>
				Mira el título de la pestaña del navegador 👆
			</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<button onClick={() => setCount(count - 1)}>Decrement</button>
			<button onClick={() => setCount(0)}>Reset</button>
		</div>
	)
}

export default DocumentTitle
