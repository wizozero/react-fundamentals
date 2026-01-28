import { useContext } from 'react'
import { CounterContext } from '../../context/CounterContext'

function CounterControls() {
	const context = useContext(CounterContext)

	if (!context) {
		throw new Error('CounterControls must be used within CounterProvider')
	}

	const { dispatch } = context

	return (
		<div>
			<button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
			<button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
			<button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
		</div>
	)
}

export default CounterControls
