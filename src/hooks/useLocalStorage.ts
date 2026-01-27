import { useState, useEffect } from 'react'

// TODO: Implementa useLocalStorage
// Debe funcionar como useState, pero persistir en localStorage

function useLocalStorage<T>(key: string, initialValue: T) {
	// TODO 1: Crear estado inicial
	// Intenta leer de localStorage primero
	// Si no existe o hay error, usa initialValue
	// Pista: usa una función en useState para lazy initialization

	const [storedValue, setStoredValue] = useState<T>(() => {
		try {
			const item = localStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch (err) {
			console.log(err)
			return initialValue
		}
	})

	// TODO 2: useEffect que guarde en localStorage cada vez que storedValue cambie
	// Pista: usa JSON.stringify para guardar
	// Maneja errores con try/catch

	useEffect(() => {
		try {
			localStorage.setItem(key, JSON.stringify(storedValue))
		} catch (err) {
			console.error(err)
		}
	}, [key, storedValue])

	// TODO 3: Devolver igual que useState
	return [storedValue, setStoredValue] as const
}

export default useLocalStorage
