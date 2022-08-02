const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
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
				},
			},
			typography: ({ theme }) => ({
				gruvbox: {
					css: {
						"--tw-prose-body": theme("colors.white.alt"),
						"--tw-prose-headings": theme("colors.white.DEFAULT"),
						"--tw-prose-lead": theme("colors.white.alt"),
						"--tw-prose-links": theme("colors.green.light"),
						"--tw-prose-bold": theme("colors.white.alt"),
						"--tw-prose-counters": theme("colors.beige.dark"),
						"--tw-prose-bullets": theme("colors.beige.dark"),
						"--tw-prose-hr": theme("colors.green.light"),
						"--tw-prose-quotes": theme("colors.white.alt"),
						"--tw-prose-quote-borders": theme("colors.green.light"),
						"--tw-prose-captions": theme("colors.white.alt"),
						"--tw-prose-code": theme("colors.green.light"),
						"--tw-prose-pre-code": theme("colors.white.alt"),
						"--tw-prose-pre-bg": theme("colors.black.dark"),
						"--tw-prose-th-borders": theme("colors.white.DEFAULT"),
						"--tw-prose-td-borders": theme("colors.white.DEFAULT"),
					},
				},
				DEFAULT: {
					css: {
						img: {
							borderRadius: theme("borderRadius.xl")
						},
						blockQuote: {
							fontWeight: theme("fontWeight.light")
						},
						code: {
							fontWeight: theme("fontWeight.normal")
						}
					}
				}
			}),
		},
		fontFamily: {
			sans: ["THICCCBOI", ...defaultTheme.fontFamily.sans],
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
