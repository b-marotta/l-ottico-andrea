const chiSiamoStyles = {
	main_image: {
		width: '100%',
		height: '250px',
		backgroundAttachment: 'fixed',
		backgroundColor: 'rgb(107, 107, 107)',
		backgroundBlendMode: 'multiply',
		backgroundPosition: '30% 100%',
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
	imageContainer: {
		position: 'relative',
	},
	imageBackgroundPrimary: {
		position: 'absolute',
		zIndex: -1,
		width: '300px',
		height: '300px',
		background: 'primary',
		left: '60%',
		top: '40%',
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
		width: '300px',
		height: '300px',
	},
	imageCut: {
		maskRepeat: 'no-repeat',
		maskSize: '100% 100%',
		maskPosition: 'right',
	},
}

export default chiSiamoStyles
