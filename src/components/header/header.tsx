import { BellIcon, SunIcon } from "@chakra-ui/icons"
import {
	Button,
	Flex,
	Heading,
	IconButton,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverTrigger,
	useColorMode
} from "@chakra-ui/react"

function Header() {
	const { toggleColorMode } = useColorMode()

	return (
		<Flex alignItems="center" minW={350} justifyContent="space-between">
			<Heading whiteSpace="nowrap">Marks</Heading>
			<Flex gap={2}>
				<IconButton size="sm" aria-label="notifications" icon={<BellIcon />} />
				<IconButton
					size="sm"
					aria-label="toggle color mode"
					icon={<SunIcon />}
					onClick={toggleColorMode}
				/>
				<Popover>
					<PopoverTrigger>
						<Button size="sm">Profile</Button>
					</PopoverTrigger>
					<PopoverContent>
						<PopoverCloseButton />
						<PopoverBody>Profile works!</PopoverBody>
					</PopoverContent>
				</Popover>
			</Flex>
		</Flex>
	)
}

export default Header
