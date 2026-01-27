import { useState } from 'react'

interface Product {
	id: number
	name: string
	price: number
}

interface CartItem {
	id: number
	name: string
	price: number
	quantity: number
}

function ShoppingCart() {
	const [products] = useState<Product[]>([
		{ id: 1, name: 'Laptop', price: 999 },
		{ id: 2, name: 'Mouse', price: 25 },
		{ id: 3, name: 'Keyboard', price: 75 },
		{ id: 4, name: 'Monitor', price: 299 },
	])

	const [cart, setCart] = useState<CartItem[]>([])

	// TODO: Implementa estas funciones

	const addToCart = (product: Product) => {
		// Pista: Verifica si el producto ya está en el carrito
		// - Si está: incrementa quantity
		// - Si no está: añádelo con quantity: 1
		const foundProduct = cart.find(
			(cartProduct) => cartProduct.id === product.id,
		)
		if (foundProduct) {
			setCart(
				cart.map((cartItem) =>
					cartItem.id === product.id
						? { ...cartItem, quantity: cartItem.quantity + 1 }
						: cartItem,
				),
			)
		} else {
			setCart([
				...cart,
				{
					id: product.id,
					name: product.name,
					price: product.price,
					quantity: 1,
				},
			])
		}
	}

	const incrementQuantity = (id: number) => {
		// Incrementa quantity del producto con ese id
		setCart(
			cart.map((cartItem) =>
				cartItem.id === id
					? { ...cartItem, quantity: cartItem.quantity + 1 }
					: cartItem,
			),
		)
	}

	const decrementQuantity = (id: number) => {
		setCart(
			cart
				.map((cartItem) =>
					cartItem.id === id
						? { ...cartItem, quantity: cartItem.quantity - 1 }
						: cartItem,
				)
				.filter((cartItem) => cartItem.quantity > 0),
		)
	}

	const calculateTotal = (): number => {
		// Calcula la suma de (price * quantity) de todos los items
		// Pista: reduce() es perfecto para esto
		return cart.reduce(
			(total, cartItem) => total + cartItem.price * cartItem.quantity,
			0,
		)
	}

	return (
		<div style={{ padding: '20px', display: 'flex', gap: '40px' }}>
			{/* Products List */}
			<div style={{ flex: 1 }}>
				<h2>Products</h2>
				{products.map((product) => (
					<div
						key={product.id}
						style={{
							padding: '15px',
							marginBottom: '10px',
							backgroundColor: '#f0f0f0',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<div>
							<strong>{product.name}</strong>
							<p>${product.price}</p>
						</div>
						<button onClick={() => addToCart(product)}>Add to Cart</button>
					</div>
				))}
			</div>

			{/* Shopping Cart */}
			<div style={{ flex: 1 }}>
				<h2>Shopping Cart</h2>
				{cart.length === 0 ? (
					<p>Cart is empty</p>
				) : (
					<>
						{cart.map((item) => (
							<div
								key={item.id}
								style={{
									padding: '15px',
									marginBottom: '10px',
									backgroundColor: '#f9f9f9',
									border: '1px solid #ddd',
								}}
							>
								<strong>{item.name}</strong>
								<p>
									${item.price} x {item.quantity}
								</p>
								<div
									style={{ display: 'flex', gap: '10px', marginTop: '10px' }}
								>
									<button onClick={() => decrementQuantity(item.id)}>-</button>
									<span>{item.quantity}</span>
									<button onClick={() => incrementQuantity(item.id)}>+</button>
								</div>
							</div>
						))}
						<div
							style={{
								marginTop: '20px',
								padding: '15px',
								backgroundColor: '#e0e0e0',
								fontWeight: 'bold',
							}}
						>
							Total: ${calculateTotal().toFixed(2)}
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default ShoppingCart
