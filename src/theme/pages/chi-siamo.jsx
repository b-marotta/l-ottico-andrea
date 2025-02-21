const chiSiamoStyles = {
	main_image: {
		width: '100%',
		height: '250px',
		backgroundAttachment: 'fixed',
		backgroundColor: 'rgb(107, 107, 107)',
		backgroundBlendMode: 'multiply',
		backgroundPosition: '30% 65%',
		backgroundSize: 'cover',
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
		flexDirection: 'row-reverse',
	},
	imageContainer: {
		position: 'relative',
	},
	imageBackgroundPrimary: {
		position: 'absolute',
		zIndex: -1,
		width: '300px',
		height: '300px',
		background: '#e6ecfd',
		borderRadius: '300px',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
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
	imageStyle: {
		width: '320px',
		height: '320px',
		borderRadius: '80px',
	},
	imageFilter1: {
		filter: 'brightness(1.2)',
	},
	imageFilter2: {
		filter: 'sepia(0.3)',
	},
}

export default chiSiamoStyles
