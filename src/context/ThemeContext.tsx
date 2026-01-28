import { createContext, useState } from 'react'
import type { ReactNode } from 'react'

// Tipo del theme
type Theme = 'light' | 'dark'

// Tipo del contexto (qué datos provee)
interface ThemeContextType {
	theme: Theme
	toggleTheme: () => void
}

// Crear contexto
export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined,
)

// Provider component
export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<Theme>('light')

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
