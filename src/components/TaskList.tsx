import { useState } from 'react'

interface Task {
	id: number
	text: string
	completed: boolean
}

function TaskList() {
	const [tasks, setTasks] = useState<Task[]>([])
	const [inputValue, setInputValue] = useState('')

	// TODO: Implementa esta función
	// Debe crear una nueva tarea con:
	// - id: usa Date.now() para generar un id único
	// - text: el valor de inputValue
	// - completed: false por defecto
	// Y añadirla al array de tasks
	const addTask = () => {
		// Tu código aquí
		if (inputValue.trim() === '') return
		setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }])
		setInputValue('')
	}

	// TODO: Implementa esta función
	// Debe eliminar la tarea con el id recibido
	const removeTask = (id: number) => {
		// Tu código aquí
		setTasks(tasks.filter((task) => task.id !== id))
	}

	// TODO: Implementa esta función
	// Debe cambiar el valor de 'completed' de la tarea con el id recibido
	const toggleTask = (id: number) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task,
			),
		)
	}

	return (
		<div style={{ padding: '20px', maxWidth: '500px' }}>
			<h2>Task List</h2>

			<div style={{ marginBottom: '20px' }}>
				<input
					type='text'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder='Add a new task...'
					style={{ padding: '8px', width: '70%' }}
				/>
				<button
					onClick={addTask}
					style={{ padding: '8px 16px', marginLeft: '10px' }}
				>
					Add
				</button>
			</div>

			<ul style={{ listStyle: 'none', padding: 0 }}>
				{tasks.map((task) => (
					<li
						key={task.id}
						style={{
							padding: '10px',
							marginBottom: '5px',
							backgroundColor: '#f0f0f0',
							display: 'flex',
							alignItems: 'center',
							gap: '10px',
						}}
					>
						<input
							type='checkbox'
							checked={task.completed}
							onChange={() => toggleTask(task.id)}
						/>
						<span
							style={{
								flex: 1,
								textDecoration: task.completed ? 'line-through' : 'none',
							}}
						>
							{task.text}
						</span>
						<button onClick={() => removeTask(task.id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default TaskList
