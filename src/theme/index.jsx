import { createSystem, defaultConfig, defineConfig, defineRecipe } from '@chakra-ui/react'
import buttonRecipe from './base/button'
import colorsToken from './tokens/colorsToken'

const customConfig = defineConfig({
	theme: {
		recipes: {
			button: defineRecipe(buttonRecipe),
		},
		tokens: {
			colors: {
				primary: { value: '#082046' },
			},
			fonts: {
				body: 'Roboto, sans-serif',
				heading: 'Roboto, sans-serif',
			},
		},
	},
})

export const system = createSystem(defaultConfig, customConfig)
