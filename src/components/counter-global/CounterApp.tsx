import CounterDisplay from './CounterDisplay'
import CounterControls from './CounterControls'
import CounterInput from './CounterInput'
import { CounterProvider } from '../../context/CounterContext'

function CounterApp() {
	return (
		<CounterProvider>
			{' '}
			{/* ← Usa CounterProvider, no CounterContext.Provider */}
			<div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
				<h2>Global Counter (useReducer + Context)</h2>

				{/* Componente que muestra el count */}
				<div
					style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}
				>
					Count: <CounterDisplay />
				</div>

				{/* Componente con botones de control */}
				<div style={{ marginBottom: '20px' }}>
					<CounterControls />
				</div>

				{/* Componente con input para incrementBy */}
				<CounterInput />
			</div>
		</CounterProvider>
	)
}

export default CounterApp
