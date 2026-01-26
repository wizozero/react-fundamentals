import Button from './components/Button'
import Counter from './components/Counter'
import LoginForm from './components/LoginForm'
import UserProfile from './components/UserProfile'

function App() {
	return (
		<div style={{ padding: '20px' }}>
			<h1>React Fundamentals</h1>
			<Counter />
			<br />
			<LoginForm />
			<br />
			<UserProfile />
		</div>
	)
}

export default App
