import { useContext, useState } from 'react'
import { CounterContext } from '../../context/CounterContext'

function CounterInput() {
	const context = useContext(CounterContext)

	if (!context) {
		throw new Error('CounterControls must be used within CounterProvider')
	}

	const { dispatch } = context

	const [inputValue, setInputValue] = useState('')

	const handleAdd = () => {
		const num = parseInt(inputValue)

		if (!isNaN(num)) {
			dispatch({ type: 'INCREMENT_BY', payload: num })
			setInputValue('')
		}
	}

	return (
		<div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
			<input
				type='number'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder='Enter amount'
				style={{ padding: '8px', width: '120px' }}
			/>
			<button onClick={handleAdd}>Add</button>
		</div>
	)
}

export default CounterInput
