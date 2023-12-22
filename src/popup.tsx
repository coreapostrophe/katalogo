import { popperCSSVars } from "@chakra-ui/popper"
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import { useState } from "react"

import Layout from "~layout"

export const getStyle = () => {
	const style = document.createElement("style")
	style.textContent = popperCSSVars
	return style
}

function IndexPopup() {
	return (
		<ChakraProvider>
			<ColorModeScript initialColorMode="system" />
			<Layout />
		</ChakraProvider>
	)
}

export default IndexPopup
