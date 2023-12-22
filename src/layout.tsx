import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"

import Header from "~components/header/header"

function Layout() {
	return (
		<Box m={4}>
			<Header />
			<Tabs>
				<TabList>
					<Tab>All</Tab>
					<Tab>Unused</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>Hello World!</TabPanel>
					<TabPanel>Hello World!</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	)
}

export default Layout
