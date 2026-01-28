import { useReducer, useState } from 'react'

// ============================================
// 1. DEFINIR TIPOS DE ACTIONS
// ============================================
// Union type: la action puede ser UNO de estos 4 tipos
// El | significa "O" (OR)
type CounterAction =
	| { type: 'INCREMENT' } // Action simple (sin payload)
	| { type: 'DECREMENT' } // Action simple
	| { type: 'RESET' } // Action simple
	| { type: 'INCREMENT_BY'; payload: number } // Action con payload (datos extra)

// ============================================
// 2. REDUCER FUNCTION (lógica centralizada)
// ============================================
// Es una FUNCIÓN PURA: no muta state, solo devuelve nuevo state
// Recibe: estado actual + action
// Devuelve: nuevo estado
function counterReducer(state: number, action: CounterAction) {
	// Switch según el tipo de action
	switch (action.type) {
		case 'INCREMENT':
			return state + 1 // Devuelve nuevo estado (+1)

		case 'DECREMENT':
			return state - 1 // Devuelve nuevo estado (-1)

		case 'RESET':
			return 0 // Devuelve estado inicial (0)

		case 'INCREMENT_BY':
			// Aquí accedemos al payload (dato extra)
			// action.payload es el número que queremos sumar
			return state + action.payload

		default:
			// IMPORTANTE: siempre devolver state si no coincide ningún caso
			// Esto evita errores si dispatch recibe una action desconocida
			return state
	}
}

// ============================================
// 3. COMPONENTE
// ============================================
function CounterReducer() {
	// useReducer devuelve [estado, función dispatch]
	// Similar a useState pero más potente
	// Argumentos: (reducer function, estado inicial)
	const [count, dispatch] = useReducer(counterReducer, 0)

	// useState para el input (sí, puedes mezclar useState con useReducer)
	const [inputValue, setInputValue] = useState('')

	// Handler para el botón "Add"
	const handleAdd = () => {
		const num = parseInt(inputValue)

		// Validar que sea un número válido
		if (!isNaN(num)) {
			// Dispatch action con payload
			dispatch({ type: 'INCREMENT_BY', payload: num })
			setInputValue('') // Limpiar input después de añadir
		}
	}

	return (
		<div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
			<h2>Counter with useReducer</h2>

			{/* Mostrar count actual */}
			<p style={{ fontSize: '32px', fontWeight: 'bold' }}>Count: {count}</p>

			<div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
				{/* 
          onClick con dispatch:
          - dispatch({ type: 'ACTION_NAME' }) envía la action al reducer
          - El reducer procesa la action y devuelve nuevo state
          - useReducer actualiza count automáticamente
        */}
				<button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>

				<button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>

				<button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
			</div>

			{/* Input para increment by custom amount */}
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
		</div>
	)
}

export default CounterReducer
