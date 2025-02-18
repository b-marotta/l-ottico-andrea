export default {
	base: {
		image: {
			width: '100%',
			filter: 'brightness(0.5)',
		},
		overlayText: {
			fontWeight: '500',
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			textTransform: 'uppercase',
		},
		section: {
			paddingY: 12,
		},
		sectionShortWho: {
			paddingY: 12,
			paddingX: { sm: 6, lg: 24 },
			background: 'primary',
		},
		sectionContent: {
			width: { sm: '100%', lg: '65%' },
			margin: 'auto',
		},
		textCenter: {
			color: 'white',
			textAlign: 'center',
			paddingX: { sm: 0, lg: 12 },
			textStyle: 'lg',
		},
		buttonContainer: {
			width: 'fit-content',
			margin: 'auto',
			marginTop: 12,
		},
		sectionTitle: {
			textStyle: '3xl',
			textTransform: 'uppercase',
			fontWeight: '500',
			color: 'primary',
			textAlign: 'center',
			marginBottom: 12,
		},
	},
	slots: [
		'image',
		'overlayText',
		'section',
		'sectionShortWho',
		'sectionContent',
		'textCenter',
		'buttonContainer',
		'buttonOutline',
		'buttonOutlinePrimary',
		'sectionTitle',
	],
}
