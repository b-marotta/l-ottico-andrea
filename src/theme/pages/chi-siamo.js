const chiSiamoStyles = {
	image: {
		width: '100%',
		height: '250px',
		filter: 'brightness(0.5)',
		objectPosition: '50% 30%',
	},
	overlayText: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	},
	section: {
		paddingX: 24,
		paddingY: 24,
		display: 'flex',
		gap: 24,
		justifyContent: 'center',
		alignItems: 'center',
	},
	sectionTextRight: {
		paddingX: 24,
		paddingY: 24,
		display: 'flex',
		gap: 24,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'right',
	},
	imageContainer: {
		position: 'relative',
	},
	imageBackgroundPrimary: {
		position: 'absolute',
		zIndex: -1,
		width: '250px',
		height: '250px',
		background: 'primary.light',
		borderRadius: '300px',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		opacity: 0.2,
	},
	imageStyle: {
		width: '280px',
		height: '280px',
		borderRadius: '120px',
	},
	heading: {
		marginBottom: 6,
	},
	headingText: {
		marginBottom: 1,
		textStyle: '2xl',
		color: 'primary',
	},
	subtitleText: {
		color: 'gray.500',
		textStyle: 'lg',
	},
	descriptionText: {
		color: 'primary',
	},
	imageFilter: {
		filter: 'brightness(1.2) sepia(0.2)',
		css: {
			'object-view-box': 'inset(0% 32% 50% 32%)',
		},
	},
}

export default chiSiamoStyles
