export default {
	base: {
		borderRadius: 'none',
		lineHeight: 'normal',
		height: 'auto',
		px: '7',
		py: '3',
		fontWeight: '500',

		_focus: {
			outlineColor: 'transparent',
		},
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
				bg: 'primary',
				color: 'white',
				fontWeight: '700',
				textStyle: 'sm',
				px: '7',
				py: '3',

				_hover: {
					bg: 'primary',
					opacity: 0.8,
					color: 'white',
				},
			},
			outline: {
				px: '7',
				py: '3',
				borderColor: 'primary',
				color: 'primary',

				_hover: {
					bg: 'primary',
					color: 'white',
				},
			},
			outline_w: {
				px: '7',
				py: '3',
				borderColor: 'white',
				color: 'white',

				_hover: {
					bg: 'white',
					color: 'primary',
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
