import { createContext, useReducer } from 'react'
import type { Dispatch, ReactNode } from 'react'

// 1️⃣ TIPOS - Define estos
type CounterAction =
	// TODO: Define tus actions aquí (igual que en CounterReducer)
	| { type: 'INCREMENT' }
	| { type: 'DECREMENT' }
	| { type: 'RESET' }
	| { type: 'INCREMENT_BY'; payload: number }

interface CounterContextType {
	// TODO: ¿Qué necesitas exponer? (count y dispatch)
	count: number
	dispatch: Dispatch<CounterAction>
}

// 2️⃣ CREAR CONTEXT
export const CounterContext = createContext<CounterContextType | undefined>(
	undefined,
)

// 3️⃣ REDUCER - Implementa la lógica (igual que antes)
function counterReducer(state: number, action: CounterAction): number {
	// TODO: Implementa el switch con los casos
	switch (action.type) {
		case 'INCREMENT':
			return state + 1
		case 'DECREMENT':
			return state - 1
		case 'RESET':
			return 0
		case 'INCREMENT_BY':
			return state + action.payload
		default:
			return state
	}
}

// 4️⃣ PROVIDER - Combina useReducer + Context
export function CounterProvider({ children }: { children: ReactNode }) {
	// TODO: usa useReducer aquí
	// TODO: provee count y dispatch en el value
	const [count, dispatch] = useReducer(counterReducer, 0)

	return (
		<CounterContext.Provider value={{ count, dispatch }}>
			{children}
		</CounterContext.Provider>
	)
}
