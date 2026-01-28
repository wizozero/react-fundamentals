import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

// ============================================
// 1. CONTEXT INTERNO (solo para Tabs)
// ============================================

interface TabsContextType {
	activeIndex: number
	setActiveIndex: (index: number) => void
}

const TabsContext = createContext<TabsContextType | undefined>(undefined)

// Hook para usar el context (helper)
function useTabsContext() {
	const context = useContext(TabsContext)
	if (!context) {
		throw new Error('Tabs compound components must be used within Tabs')
	}
	return context
}

// ============================================
// 2. COMPONENTE PRINCIPAL (Tabs)
// ============================================

interface TabsProps {
	children: ReactNode
	defaultIndex?: number // Tab activo por defecto
}

function Tabs({ children, defaultIndex = 0 }: TabsProps) {
	// TODO: Crea estado para activeIndex (usa defaultIndex como inicial)
	// TODO: Provee el context con activeIndex y setActiveIndex
	const [activeIndex, setActiveIndex] = useState(defaultIndex)

	return (
		<TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
			<div>{children}</div>
		</TabsContext.Provider>
	)
}

// ============================================
// 3. TABLIST (contenedor de tabs)
// ============================================

interface TabListProps {
	children: ReactNode
}

Tabs.TabList = function TabList({ children }: TabListProps) {
	return (
		<div
			style={{
				display: 'flex',
				borderBottom: '2px solid #e5e7eb',
				gap: '4px',
			}}
		>
			{children}
		</div>
	)
}

// ============================================
// 4. TAB (cada pestaña individual)
// ============================================

interface TabProps {
	children: ReactNode
	index: number // Índice de este tab (0, 1, 2...)
}

Tabs.Tab = function Tab({ children, index }: TabProps) {
	// TODO: Obtén activeIndex y setActiveIndex del context
	// TODO: Determina si este tab está activo (index === activeIndex)
	// TODO: Al hacer click, llama setActiveIndex(index)

	const { activeIndex, setActiveIndex } = useTabsContext()

	const isActive = index === activeIndex

	return (
		<button
			onClick={() => {
				setActiveIndex(index)
			}}
			style={{
				padding: '12px 24px',
				border: 'none',
				borderBottom: isActive ? '2px solid #3b82f6' : '2px solid transparent',
				backgroundColor: 'transparent',
				color: isActive ? '#3b82f6' : '#6b7280',
				fontWeight: isActive ? 600 : 400,
				cursor: 'pointer',
				transition: 'all 0.2s',
			}}
		>
			{children}
		</button>
	)
}

// ============================================
// 5. TABPANEL (contenido de cada tab)
// ============================================

interface TabPanelProps {
	children: ReactNode
	index: number // Índice de este panel (0, 1, 2...)
}

Tabs.TabPanel = function TabPanel({ children, index }: TabPanelProps) {
	// TODO: Obtén activeIndex del context
	// TODO: Solo renderiza si index === activeIndex

	const { activeIndex } = useTabsContext()

	const isActive = index === activeIndex

	if (!isActive) return null

	return (
		<div
			style={{
				padding: '24px',
				backgroundColor: '#f9fafb',
				borderRadius: '0 0 8px 8px',
			}}
		>
			{children}
		</div>
	)
}

export default Tabs
