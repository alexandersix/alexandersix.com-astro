const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				red: {
					dark: "#cc241d",
					light: "#fb4834",
				},
				green: {
					dark: "#98971a",
					light: "#b8bb26",
				},
				yellow: {
					dark: "#d79921",
					light: "#fabd2f",
				},
				blue: {
					dark: "#458588",
					light: "#83a598",
				},
				purple: {
					dark: "#b16286",
					light: "#d3869b",
				},
				aqua: {
					dark: "#689d6a",
					light: "#8ec07c",
				},
				orange: {
					dark: "#d65d0e",
					light: "#fe8019",
				},
				white: {
					DEFAULT: "#f8fafc",
					alt: "#e0d3d7",
				},
				black: {
					dark: "#1d2021",
					light: "#282828",
				},
				gray: {
					dark: "#928374",
					light: "#a89984",
				},
				beige: {
					DEFAULT: "#a89984",
					dark: "#ebdbb2",
					light: "#fbf1c7",
				}
			},
		},
		fontFamily: {
			sans: ["THICCCBOI", ...defaultTheme.fontFamily.sans],
		}
	},
	plugins: [require("@tailwindcss/typography")],
}
