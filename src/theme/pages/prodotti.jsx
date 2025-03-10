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
		paddingX: { base: 12, lg: 24 },
		paddingY: { base: 12, lg: 24 },
		display: 'flex',
		flexDirection: { base: 'column', lg: 'row' },
		gap: { base: 8, lg: 24 },
		justifyContent: 'space-evenly',
		alignItems: { base: 'left', lg: 'center' },
		h: { base: 'auto', lg: 'max(calc(100dvh - var(--header-height)), 550px)' },
		minH: { sm: '100vh' },
		position: { base: 'relative', lg: 'sticky' },
		top: { base: 'unset', lg: 'var(--header-height)' },
		bg: 'white',
		borderTop: '1px solid #E5E5E5',
		overflow: 'hidden',
	},
	sectionInternal: {
		display: 'flex',
		flexDirection: { base: 'column', lg: 'row' },
		gap: { base: 8, lg: 24 },
		justifyContent: 'space-evenly',
		alignItems: { base: 'left', lg: 'center' },
		zIndex: 1,
	},
	card_container: {
		display: 'flex',
		columnGap: { base: 6, lg: 12 },
		rowGap: { base: 6, lg: 12 },
		justifyContent: 'space-evenly',
		alignItems: 'center',
		flexWrap: 'wrap',
		width: { base: '100%', lg: '90%' },
		height: { base: 'auto', lg: '60%' },
	},
	card: {
		display: 'flex',
		flexDirection: 'column',
		gap: 8,
		justifyContent: 'center',
		alignItems: 'center',
	},
	card_image: {
		width: { base: '30vw', lg: '15vw' },
		height: 'auto',
		objectFit: 'cover',
		maxH: '100px',
		transition: 'all 0.2s',
		transform: 'scale(0.8)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		_active: {
			border: 0,
		},
		_hover: {
			transform: 'scale(1)',
		},
	},
	image: {
		w: '250px',
		height: { base: '100px', lg: '150px' },
		transition: 'all 0.1s',
	},
}
