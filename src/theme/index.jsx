import {
	createSystem,
	defaultConfig,
	defineConfig,
	defineRecipe,
	defineTextStyles,
	mergeConfigs,
} from '@chakra-ui/react'
import buttonRecipe from './base/button'
import imageRecipe from './base/image'

const customConfig = defineConfig({
	theme: {
		recipes: {
			button: defineRecipe(buttonRecipe),
			image: defineRecipe(imageRecipe),
		},
		keyframes: {
			slides: {
				from: { transform: 'translateX(0%)' },
				to: { transform: 'translateX(-50%)' },
			},
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
				tertiary: {
					DEFAULT: { value: '#765b39' },
					light: { value: '#8c6d47' },
				},
			},
			fonts: {
				body: { value: 'Montserrat, sans-serif' },
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

const config = mergeConfigs(defaultConfig, customConfig)

export const system = createSystem(config)
