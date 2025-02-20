export default {
	base: {
		wrapper: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			py: 4,
			px: 8,
			w: '100%',
			transition: 'background 0.3s',
			zIndex: 100,
			bg: 'white',
			gap: 4,
			position: 'sticky',
			top: 0,
		},
		logoWrapper: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			gap: 4,
			w: '25%',
		},
		navLinks: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			gap: 12,
			w: '50%',
		},
		navButton: {
			textStyle: 'lg',
			textDecoration: 'none',
			color: 'gray.400',

			_hover: {
				color: 'primary',
			},
			_before: {
				bg: 'primary',
			},
			'&.current': {
				color: 'primary',

				_before: {
					bg: 'primary',
					w: '100%',
				},
			},
		},
		ctaWrapper: {
			w: '25%',
			textAlign: 'right',
		},
		ctaButton: {
			textStyle: 'md',
			size: 'sm',
			fontWeight: '500',
			textDecoration: 'none',
		},
	},
	variants: {
		variant: {
			home: {
				wrapper: {
					bg: 'white',
					position: 'fixed',
				},
				navButton: {
					_hover: {
						color: 'primary',
					},
					_before: {
						bg: 'primary',
					},
					'&.current': {
						color: 'primary',

						_before: {
							bg: 'primary',
							w: '100%',
						},
					},
				},
			},
			onTop: {
				wrapper: {
					position: 'fixed',
					bg: 'transparent',
				},
				navButton: {
					_hover: {
						color: 'white',
					},
					_before: {
						bg: 'white',
					},
					'&.current': {
						color: 'white',

						_before: {
							bg: 'white',
						},
					},
				},
			},
			default: {
				navButton: {
					textStyle: 'lg',
					textDecoration: 'none',
					color: 'gray.400',

					_hover: {
						color: 'primary',
					},
					_before: {
						bg: 'primary',
					},
					'&.current': {
						color: 'primary',

						_before: {
							bg: 'primary',
							w: '100%',
						},
					},
				},
			},
		},
	},
	slots: ['wrapper', 'navButton', 'ctaButton', 'navLinks', 'ctaWrapper', 'logoWrapper'],
}
