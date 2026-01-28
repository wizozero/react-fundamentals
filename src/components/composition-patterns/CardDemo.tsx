import Card from './Card'

function CardDemo() {
	return (
		<div
			style={{
				padding: '40px',
				display: 'flex',
				flexDirection: 'column',
				gap: '24px',
				maxWidth: '600px',
				margin: '0 auto',
			}}
		>
			<h1>Card Component Examples</h1>

			{/* Ejemplo 1: Card completo */}
			<Card>
				<Card.Header>
					<h2 style={{ margin: 0, fontSize: '20px' }}>User Profile</h2>
				</Card.Header>
				<Card.Body>
					<p style={{ margin: 0 }}>
						This is a complete card with header, body, and footer sections.
					</p>
				</Card.Body>
				<Card.Footer>
					<button style={{ padding: '8px 16px', cursor: 'pointer' }}>
						Cancel
					</button>
					<button
						style={{
							padding: '8px 16px',
							cursor: 'pointer',
							backgroundColor: '#3b82f6',
							color: 'white',
							border: 'none',
							borderRadius: '4px',
						}}
					>
						Save
					</button>
				</Card.Footer>
			</Card>

			{/* Ejemplo 2: Card sin Footer */}
			<Card>
				<Card.Header>
					<h2 style={{ margin: 0, fontSize: '20px' }}>Notification</h2>
				</Card.Header>
				<Card.Body>
					<p style={{ margin: 0 }}>
						This card has no footer. Notice how the Body adapts naturally.
					</p>
				</Card.Body>
			</Card>

			{/* Ejemplo 3: Card solo Body */}
			<Card>
				<Card.Body>
					<p style={{ margin: 0 }}>
						Simple card with only body content. Very flexible!
					</p>
				</Card.Body>
			</Card>

			{/* Ejemplo 4: Card con contenido rico */}
			<Card>
				<Card.Header>
					<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
						<div
							style={{
								width: '40px',
								height: '40px',
								borderRadius: '50%',
								backgroundColor: '#3b82f6',
							}}
						></div>
						<div>
							<h3 style={{ margin: 0, fontSize: '16px' }}>John Doe</h3>
							<p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>
								Software Engineer
							</p>
						</div>
					</div>
				</Card.Header>
				<Card.Body>
					<p style={{ marginTop: 0 }}>
						Example of a card with rich content in the header. The compound
						components pattern allows complete flexibility.
					</p>
					<ul style={{ marginBottom: 0 }}>
						<li>Feature 1</li>
						<li>Feature 2</li>
						<li>Feature 3</li>
					</ul>
				</Card.Body>
				<Card.Footer>
					<button style={{ padding: '8px 16px', cursor: 'pointer' }}>
						View Profile
					</button>
				</Card.Footer>
			</Card>
		</div>
	)
}

export default CardDemo
