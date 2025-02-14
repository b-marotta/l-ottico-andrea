export default {
	base: {
		borderRadius: 'none',
		lineHeight: 'normal',
		height: 'auto',
	},
	variants: {
		size: {
			sm: {
				h: 'auto',
				textStyle: 'button.sm',
			},
			md: {
				h: 'auto',
				textStyle: 'button.md',
			},
		},
		variant: {
			solid: {
				px: '6',
				py: '3',
				bg: 'primary',
				color: 'white',
				fontWeight: '700',
				textStyle: 'sm',
				_hover: {
					bg: 'primary.light',
				},
			},
			header: {
				bg: 'transparent',
				fontWeight: '500',
				px: '0',
				py: '0',
				color: 'gray.400',
				_before: {
					content: '""',
					display: 'block',
					position: 'absolute',
					bottom: '0',
					left: '0',
					w: '0%',
					h: '2px',
					bg: 'primary',
					transition: 'width 0.3s',
				},
				_hover: {
					color: 'primary',
					_before: {
						w: '100%',
					},
				},
				'&.active': {
					color: 'primary',
					opacity: 1,

					_before: {
						content: '""',
						display: 'block',
						position: 'absolute',
						bottom: '0',
						left: '0',
						w: '100%',
						h: '2px',
						bg: 'primary',
						transition: 'width 0.3s',
					},
				},
			},
		},
	},
}
