import { ThemeProvider } from '../../context/ThemeContext'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

export default function ThemeApp() {
	return (
		<ThemeProvider>
			<div>
				<Header />
				<Content />
				<Footer />
			</div>
		</ThemeProvider>
	)
}
