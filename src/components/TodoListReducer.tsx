import { useReducer, useState } from 'react'

interface Todo {
	id: number
	text: string
	completed: boolean
}

type TodoAction =
	| { type: 'ADD_TODO'; payload: string }
	| { type: 'DELETE_TODO'; payload: number }
	| { type: 'TOGGLE_TODO'; payload: number }
	| { type: 'EDIT_TODO'; payload: { id: number; text: string } }

function todoReducer(state: Todo[], action: TodoAction): Todo[] {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{ id: Date.now(), text: action.payload, completed: false },
			]

		case 'DELETE_TODO':
			return state.filter((todo) => todo.id !== action.payload)

		case 'TOGGLE_TODO':
			return state.map((todo) =>
				todo.id === action.payload
					? { ...todo, completed: !todo.completed }
					: todo,
			)

		case 'EDIT_TODO':
			return state.map((todo) =>
				todo.id === action.payload.id
					? { ...todo, text: action.payload.text }
					: todo,
			)

		default:
			return state
	}
}

function TodoReducer() {
	const [todo, dispatch] = useReducer(todoReducer, [])
	const [inputValue, setInputValue] = useState('')

	const handleAdd = () => {
		if (!inputValue.trim()) return

		dispatch({ type: 'ADD_TODO', payload: inputValue })
		setInputValue('')
	}

	const handleEdit = (id: number, currentText: string) => {
		const newText = prompt('Edit todo:', currentText)

		if (newText && newText.trim()) {
			dispatch({
				type: 'EDIT_TODO',
				payload: { id, text: newText },
			})
		}
	}

	return (
		<div style={{ padding: '20px' }}>
			<h2>TodoList with useReducer</h2>

			<div style={{ marginBottom: '20px' }}>
				<input
					type='text'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder='Enter a todo'
					style={{ padding: '8px', width: '200px' }}
				/>
				<button onClick={handleAdd}>Add</button>
			</div>

			<ul style={{ listStyle: 'none', padding: 0 }}>
				{todo.map((task) => (
					<li key={task.id} style={{ marginBottom: '10px' }}>
						<input
							type='checkbox'
							checked={task.completed}
							onChange={() =>
								dispatch({ type: 'TOGGLE_TODO', payload: task.id })
							}
						/>
						<span
							style={
								task.completed
									? { textDecoration: 'line-through', marginLeft: '10px' }
									: { marginLeft: '10px' }
							}
						>
							{task.text}
						</span>
						<button
							onClick={() =>
								dispatch({ type: 'DELETE_TODO', payload: task.id })
							}
							style={{ marginLeft: '10px' }}
						>
							Delete
						</button>
						<button
							onClick={() => handleEdit(task.id, task.text)}
							style={{ marginLeft: '5px' }}
						>
							Edit
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default TodoReducer
