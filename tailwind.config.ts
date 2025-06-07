export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#f59e0b',
				secondary: '#ec4899'
			}
		}
	},
	plugins: [
		require('@tailwindcss/line-clamp')
	]
}