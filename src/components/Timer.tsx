import { useState, useEffect } from 'react'

function Timer() {
	const [seconds, setSeconds] = useState(0)
	const [isRunning, setIsRunning] = useState(false)

	// TODO: Implementa useEffect con setInterval
	// 1. Si isRunning es true, crea un interval que incremente seconds cada 1000ms
	// 2. IMPORTANTE: Retorna una función de cleanup que limpie el interval
	// Pista: usa setInterval y clearInterval
	// Pista 2: El cleanup se ejecuta antes de que el effect se vuelva a ejecutar
	useEffect(() => {
		let intervalId: number | undefined
		if (isRunning) {
			intervalId = setInterval(() => {
				setSeconds((sec) => sec + 1)
			}, 1000)
		}

		return () => {
			clearInterval(intervalId)
		}
	}, [isRunning])

	return (
		<div style={{ padding: '20px' }}>
			<h2>Timer</h2>
			<p style={{ fontSize: '48px', fontWeight: 'bold' }}>{seconds}s</p>
			<button onClick={() => setIsRunning(!isRunning)}>
				{isRunning ? 'Pause' : 'Start'}
			</button>
			<button onClick={() => setSeconds(0)}>Reset</button>
		</div>
	)
}

export default Timer
