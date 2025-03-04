export default {
	base: {
		wrapper: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			px: { base: 4, lg: 8 },
			py: { base: 2, lg: 4 },
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
		},
		navLinks: {
			display: { base: 'none', lg: 'flex' },
			flexDirection: 'row',
			justifyContent: 'center',
			gap: '3vw',
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
			textAlign: 'right',
			display: { base: 'none', lg: 'flex' },
		},
		hamburgerWrapper: {
			display: { base: 'flex', lg: 'none' },
		},
		ctaButton: {
			textStyle: 'md',
			size: 'sm',
			fontWeight: '500',
			textDecoration: 'none',
		},
		mobileMenuWrapper: {
			position: 'fixed',
			top: '0',
			right: '0',
			display: { base: 'flex', lg: 'none' },
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			color: 'black',
			bg: 'primary',
			gap: 8,
			opacity: 0.95,
			transition: 'all 0.4s ease-in',
			transform: 'translateX(100%)',
			h: '100dvh',
			w: '100dvw',

			'&.open': {
				transform: 'translateX(0)',
			},
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
						color: { base: 'white', lg: 'primary' },

						_before: {
							bg: { base: 'white', lg: 'primary' },
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
						color: { base: 'white', lg: 'primary' },

						_before: {
							bg: { base: 'white', lg: 'primary' },
							w: '100%',
						},
					},
				},
			},
		},
	},
	slots: [
		'wrapper',
		'navButton',
		'ctaButton',
		'navLinks',
		'hamburgerWrapper',
		'ctaWrapper',
		'logoWrapper',
		'mobileMenuWrapper',
	],
}
