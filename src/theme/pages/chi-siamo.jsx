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
		maxW: '70%',
		w: 'max-content',
	},
	section: {
		paddingX: { base: 12, lg: 24 },
		paddingY: 24,
		display: 'flex',
		flexDirection: { base: 'column-reverse', lg: 'row' },
		gap: { base: 12, lg: 24 },
		justifyContent: 'center',
		alignItems: 'center',
		h: { base: 'auto', lg: 'max(calc(100dvh - var(--header-height)), 550px)' },
		position: { base: 'relative', lg: 'sticky' },
		top: { base: 'unset', lg: 'var(--header-height)' },
		bg: 'white',
		borderTop: '1px solid #E5E5E5',
		zIndex: 1,
	},
	imageContainer: {
		position: 'relative',
		display: 'flex',
		alignItems: 'flex-end',
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
		width: { base: 'auto', lg: '300px' },
		height: { base: 'auto', lg: '300px' },
	},
	imageCut: {
		maskRepeat: 'no-repeat',
		maskSize: '100% 100%',
		maskPosition: 'right',
	},
}

export default chiSiamoStyles
