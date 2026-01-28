import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

function Content() {
	const context = useContext(ThemeContext)
	if (!context) throw new Error('Content must be used within ThemeProvider')

	const { theme } = context

	return (
		<main
			style={{
				background: theme === 'dark' ? '#1a1a1a' : '#fff',
				color: theme === 'dark' ? '#fff' : '#000',
				padding: '40px',
				minHeight: '300px',
			}}
		>
			<h2>Main Content</h2>
			<p>This content adapts to the theme</p>
		</main>
	)
}

export default Content
