import {
	createSystem,
	defaultConfig,
	defineConfig,
	defineRecipe,
	defineTextStyles,
} from '@chakra-ui/react'
import buttonRecipe from './base/button'

const customConfig = defineConfig({
	theme: {
		recipes: {
			button: defineRecipe(buttonRecipe),
		},
		tokens: {
			colors: {
				primary: {
					DEFAULT: { value: '#082046' }, // #082046
					light: { value: '#0a367b' }, // #0a367b
				},
				secondary: {
					DEFAULT: { value: '#3e9308' },
					light: { value: '#48a70c' },
				},
			},
			fonts: {
				body: { value: 'Roboto, sans-serif' },
			},
		},
		textStyles: defineTextStyles({
			body: {
				description: 'The body text style - used in paragraphs',
				value: {
					fontWeight: '500',
					fontSize: '16px',
					lineHeight: '24',
					letterSpacing: '0',
					textDecoration: 'None',
					textTransform: 'None',
				},
			},
			button: {
				sm: {},
				md: {
					value: {},
				},
			},
		}),
	},
})

export const system = createSystem(defaultConfig, customConfig)
