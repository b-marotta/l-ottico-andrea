export default {
	base: {
		borderRadius: 'none',
	},
	variants: {
		size: {
			md: {
				px: '6',
				py: '4',
			},
		},
		variant: {
			solid: {
				bg: 'primary',
				color: 'white',
				_hover: {
					bg: 'blue.600',
				},
			},
		},
	},
}
