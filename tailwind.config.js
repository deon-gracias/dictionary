const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Inter', ...defaultTheme.fontFamily.sans],
			serif: ['Playfair', ...defaultTheme.fontFamily.serif],
			mono: ['DM Mono', ...defaultTheme.fontFamily.mono]
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
