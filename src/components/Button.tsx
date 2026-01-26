interface ButtonProps {
	label: string
	variant?: 'primary' | 'secondary'
	disabled?: boolean
	onClick?: () => void
}

function Button({
	label,
	variant = 'primary',
	disabled = false,
	onClick,
}: ButtonProps) {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			style={{
				backgroundColor: variant === 'primary' ? 'blue' : 'gray',
				color: 'white',
				padding: '10px 20px',
				border: 'none',
				borderRadius: '5px',
				cursor: disabled ? 'not-allowed' : 'pointer',
				opacity: disabled ? 0.5 : 1,
			}}
		>
			{label}
		</button>
	)
}
export default Button
