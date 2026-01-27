import useToggle from '../hooks/useToggle'

function ToggleDemo() {
	const [isVisible, { toggle, setTrue, setFalse }] = useToggle(false)

	return (
		<div style={{ padding: '20px' }}>
			<h2>Toggle Demo</h2>

			<div style={{ marginBottom: '20px' }}>
				<button onClick={toggle}>Toggle</button>
				<button onClick={setTrue} style={{ marginLeft: '10px' }}>
					Show
				</button>
				<button onClick={setFalse} style={{ marginLeft: '10px' }}>
					Hide
				</button>
			</div>

			{isVisible && (
				<div
					style={{
						padding: '20px',
						backgroundColor: '#e0f7fa',
						borderRadius: '8px',
					}}
				>
					<p>✨ This content is toggleable!</p>
				</div>
			)}
		</div>
	)
}

export default ToggleDemo
