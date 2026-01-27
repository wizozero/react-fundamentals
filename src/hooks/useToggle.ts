import { useState } from 'react'

// TODO: Implementa useToggle
// Debe devolver:
// - value: el valor booleano actual
// - toggle: función que invierte el valor
// - setTrue: función que pone el valor en true
// - setFalse: función que pone el valor en false

function useToggle(initialValue: boolean = false) {
	const [value, setValue] = useState(initialValue)
	const toggle = () => setValue((v) => !v)
	const setTrue = () => setValue(true)
	const setFalse = () => setValue(false)

	return [value, { toggle, setTrue, setFalse }] as const
}

export default useToggle
