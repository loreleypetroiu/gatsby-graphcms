import React from 'react';
import { ThemeProvider } from "styled-components"

const themeData = {
	colors: {
		primary: "#2C5F2D",
		secondary: "#B3CD8E",
		body: "#FFFFFF",
		text: "#444444",
		muted: "#999999",
		link: {
			text: "#2C5F2D",
		}
	},
	font: "Open Sans"
}

const Theme = ({ children }) => {
	return (
		<ThemeProvider theme={themeData}>
			{children}
		</ThemeProvider>
	)
}

export default Theme;