/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// Set font family
			fontFamily: {
			  sans: ["Inter", ...defaultTheme.fontFamily.sans],
			},
			// Set theme colors (Required config!)
			colors: {
			  primary: colors.purple,
			  secondary: colors.slate,
			},
		}
	},
	plugins: [],
}
