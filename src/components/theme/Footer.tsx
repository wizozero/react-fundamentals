import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

function Footer() {
	const context = useContext(ThemeContext)
	if (!context) throw new Error('Footer must be used within ThemeProvider')

	const { theme, toggleTheme } = context

	return (
		<footer
			style={{
				background: theme === 'dark' ? '#222' : '#ddd',
				color: theme === 'dark' ? '#fff' : '#000',
				padding: '20px',
				textAlign: 'center',
			}}
		>
			<p>Footer - Theme: {theme}</p>
			<button onClick={toggleTheme}>Toggle from Footer</button>
		</footer>
	)
}

export default Footer
