export default {
	main_image: {
		width: '100%',
		height: '250px',
		backgroundColor: 'rgb(107, 107, 107)',
		backgroundBlendMode: 'multiply',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		filter: 'sepia(0.3)',
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
		flexDirection: 'column',
		gap: 24,
		justifyContent: 'center',
		alignItems: 'center',
	},
}
