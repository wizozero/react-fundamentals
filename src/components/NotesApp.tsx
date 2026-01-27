import { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import useToggle from '../hooks/useToggle'

interface Note {
	id: number
	title: string
	content: string
	createdAt: number
}

function NotesApp() {
	// TODO 1: Estado de notas con useLocalStorage
	const [notes, setNotes] = useLocalStorage<Note[]>('notes', [])

	// TODO 2: Estado para el formulario (título y contenido)
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')

	// TODO 3: Toggle para mostrar/ocultar formulario
	const [isFormVisible, { toggle: toggleForm, setTrue: showForm }] =
		useToggle(false)

	// TODO 4: Estado para edición (null si no está editando, id de la nota si está editando)
	const [editingId, setEditingId] = useState<number | null>(null)

	// TODO 5: Implementa estas funciones
	const addNote = () => {
		// Crear nueva nota con id único (Date.now())
		// Añadir al array de notes
		// Limpiar formulario
		if (!title.trim() || !content.trim()) return
		setNotes([
			...notes,
			{ id: Date.now(), title, content, createdAt: Date.now() },
		])
		setTitle('')
		setContent('')
		toggleForm()
	}

	const deleteNote = (id: number) => {
		// Filtrar notes para eliminar la nota con ese id
		setNotes(notes.filter((note) => note.id !== id))
	}

	const startEdit = (note: Note) => {
		// Poner la nota en el formulario para editarla
		// setEditingId con el id de la nota
		// setTitle y setContent con los valores de la nota
		// Mostrar el formulario si está oculto
		setEditingId(note.id)
		setTitle(note.title)
		setContent(note.content)
		if (!isFormVisible) {
			showForm()
		}
	}

	const updateNote = () => {
		// Actualizar la nota con editingId
		// Usar map para crear nuevo array con la nota modificada
		// Limpiar formulario y setEditingId(null)
		setNotes(
			notes.map((note) =>
				note.id === editingId ? { ...note, title, content } : note,
			),
		)
		setTitle('')
		setContent('')
		setEditingId(null)
		toggleForm()
	}

	const handleSubmit = () => {
		// Si editingId existe → updateNote()
		// Si no → addNote()
		if (editingId) {
			updateNote()
		} else {
			addNote()
		}
	}

	const cancelEdit = () => {
		// Limpiar formulario
		// setEditingId(null)
		setTitle('')
		setContent('')
		setEditingId(null)
	}

	return (
		<div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
			<h1>📝 Notes App</h1>

			{/* TODO: Implementa el JSX aquí */}
			{/* Botón para toggle del form */}
			<button onClick={toggleForm}>+ New Note</button>
			{/* Formulario (condicional según isFormVisible) */}
			{isFormVisible && (
				<div
					style={{
						padding: '20px',
						border: '1px solid #ccc',
						borderRadius: '8px',
						maxWidth: '400px',
					}}
				>
					<input
						type='text'
						placeholder='Title'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						style={{
							width: '100%',
							padding: '8px',
							marginBottom: '10px',
						}}
					/>

					<textarea // En lugar de input
						placeholder='Content'
						value={content}
						onChange={(e) => setContent(e.target.value)}
						rows={4}
						style={{
							width: '100%',
							padding: '8px',
							marginBottom: '10px',
							resize: 'vertical',
						}}
					/>

					<button
						onClick={handleSubmit}
						style={{
							width: '100%',
							padding: '10px',
							marginTop: '10px',
						}}
					>
						{editingId ? 'Update Note' : 'Add Note'}
					</button>

					{editingId && (
						<button
							onClick={cancelEdit}
							style={{
								width: '100%',
								padding: '10px',
								marginTop: '10px',
							}}
						>
							Cancel
						</button>
					)}
				</div>
			)}
			{/* Lista de notas */}
			{notes.map((note) => (
				<li
					key={note.id}
					style={{
						padding: '10px',
						marginBottom: '5px',
						backgroundColor: '#f0f0f0',
						display: 'flex',
						alignItems: 'center',
						gap: '10px',
					}}
				>
					<span
						style={{
							flex: 1,
						}}
					>
						{note.title}
						{note.content}
					</span>
					<button onClick={() => startEdit(note)}>Edit</button>
					<button onClick={() => deleteNote(note.id)}>Delete</button>
				</li>
			))}
		</div>
	)
}

export default NotesApp
