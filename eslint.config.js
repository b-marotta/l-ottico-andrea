import globals from 'globals'
import pluginReact from 'eslint-plugin-react'
import eslint from '@eslint/js'
import prettier from 'eslint-config-prettier'
import pluginPrettier from 'eslint-plugin-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
	eslint.configs.recommended,
	prettier,
	{
		plugins: {
			prettier: pluginPrettier,
		},
		rules: {
			'prettier/prettier': ['error', { semi: false }], // Disabilita i punti e virgola
		},
	},
	{
		files: ['**/*.{js,mjs,cjs,jsx}'],
	},
	{
		languageOptions: {
			globals: globals.browser,
		},
	},
	pluginReact.configs.flat.recommended,
]
