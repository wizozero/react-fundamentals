import { useContext } from 'react'
import { CounterContext } from '../../context/CounterContext'

function CounterDisplay() {
	const context = useContext(CounterContext)
	if (!context) throw new Error('Content must be used within ThemeProvider')

	const { count } = context

	return <span>{count}</span>
}

export default CounterDisplay
