// import Button from './components/Button'
import Counter from './components/Counter'
import LoginForm from './components/LoginForm'
import UserProfile from './components/UserProfile'
import TaskList from './components/TaskList'
import DocumentTitle from './components/DocumentTitle'
import Timer from './components/Timer'
import UserList from './components/UserList'

function App() {
	return (
		<div style={{ padding: '20px' }}>
			<h1>React Fundamentals</h1>
			<Counter />
			<br />
			<LoginForm />
			<br />
			<UserProfile />
			<br />
			<TaskList />
			<br />
			<DocumentTitle />
			<br />
			<Timer />
			<br />
			<UserList />
		</div>
	)
}

export default App
