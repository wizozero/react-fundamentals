import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

function Header() {
	const context = useContext(ThemeContext)

	// Manejar caso donde context es undefined (fuera del Provider)
	if (!context) {
		throw new Error('Header must be used within ThemeProvider')
	}

	const { theme, toggleTheme } = context

	return (
		<header
			style={{
				background: theme === 'dark' ? '#333' : '#f0f0f0',
				color: theme === 'dark' ? '#fff' : '#000',
				padding: '20px',
			}}
		>
			<h1>Current theme: {theme}</h1>
			<button onClick={toggleTheme}>Toggle Theme</button>
		</header>
	)
}

export default Header
