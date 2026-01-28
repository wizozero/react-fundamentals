import type { ReactNode } from 'react'

// Componente principal
interface CardProps {
	children: ReactNode
}

function Card({ children }: CardProps) {
	return (
		<div
			style={{
				border: '1px solid #e5e7eb',
				borderRadius: '8px',
				boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
				overflow: 'hidden',
				backgroundColor: 'white',
			}}
		>
			{children}
		</div>
	)
}

// Subcomponente Header
interface CardHeaderProps {
	children: ReactNode
}

Card.Header = function CardHeader({ children }: CardHeaderProps) {
	return (
		<div
			style={{
				padding: '16px 24px',
				borderBottom: '1px solid #e5e7eb',
				backgroundColor: '#f9fafb',
			}}
		>
			{children}
		</div>
	)
}

// TODO: Añade Card.Body y Card.Footer siguiendo el mismo patrón

interface CardBodyProps {
	children: ReactNode
}

Card.Body = function CardBody({ children }: CardBodyProps) {
	return (
		<div
			style={{
				padding: '24px',
			}}
		>
			{children}
		</div>
	)
}

interface CardFooterProps {
	children: ReactNode
}

Card.Footer = function CardFooter({ children }: CardFooterProps) {
	return (
		<div
			style={{
				padding: '16px 24px',
				borderTop: '1px solid #e5e7eb',
				backgroundColor: '#f9fafb',
				display: 'flex',
				gap: '8px',
				justifyContent: 'flex-end',
			}}
		>
			{children}
		</div>
	)
}

export default Card
