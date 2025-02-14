import { defineSlotRecipe } from '@chakra-ui/react'

export const checkboxSlotRecipe = defineSlotRecipe({
	base: {
		headerWrapper: {
			justifyContent: 'space-between',
			py: 2,
			px: 8,
		},
	},
	slots: ['siteName', 'headerWrapper'],
})
