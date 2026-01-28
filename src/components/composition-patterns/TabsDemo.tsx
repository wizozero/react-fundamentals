import Tabs from './Tabs'

function TabsDemo() {
	return (
		<div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
			<h1>Tabs Component</h1>

			<Tabs defaultIndex={0}>
				<Tabs.TabList>
					<Tabs.Tab index={0}>Profile</Tabs.Tab>
					<Tabs.Tab index={1}>Settings</Tabs.Tab>
					<Tabs.Tab index={2}>Notifications</Tabs.Tab>
				</Tabs.TabList>

				<Tabs.TabPanel index={0}>
					<h2>Profile Content</h2>
					<p>This is the profile tab content.</p>
				</Tabs.TabPanel>

				<Tabs.TabPanel index={1}>
					<h2>Settings Content</h2>
					<p>This is the settings tab content.</p>
				</Tabs.TabPanel>

				<Tabs.TabPanel index={2}>
					<h2>Notifications Content</h2>
					<p>This is the notifications tab content.</p>
				</Tabs.TabPanel>
			</Tabs>
		</div>
	)
}

export default TabsDemo
