/** @type {import("prettier").Config} */
const config = {
	tabWidth: 2,
	useTabs: true,
	semi: false,
	singleQuote: true,
	trailingComma: 'none',
	arrowParens: 'avoid',
	plugins: ['prettier-plugin-packagejson', 'prettier-plugin-organize-imports']
}

module.exports = config
