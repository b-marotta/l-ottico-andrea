import globals from 'globals'
import pluginReact from 'eslint-plugin-react'
import eslint from '@eslint/js'
import prettier from 'eslint-config-prettier'
import pluginPrettier from 'eslint-plugin-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
	eslint.configs.recommended, // Configurazione di base di ESLint
	pluginReact.configs.flat.recommended, // Configurazione di React
	{
		files: ['**/*.{js,mjs,cjs,jsx}'], // Applica solo a questi file
		languageOptions: {
			globals: globals.browser, // Aggiungi i globali del browser
		},
	},
	{
		plugins: {
			prettier: pluginPrettier, // Aggiungi il plugin Prettier
		},
		rules: {
			'prettier/prettier': ['error', { semi: false }], // Regola di Prettier
			'no-console': ['error', { allow: ['warn', 'error'] }],
			'react/prop-types': 'off',
		},
	},
	{
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	prettier, // Deve essere l'ultimo per disabilitare le regole conflittuali
]
