export default {
	base: {
		logos: {
			overflow: 'hidden',
			whiteSpace: 'nowrap',
			position: 'relative',
			display: 'inline-flex',
			width: '100vw',
			_before: {
				position: 'absolute',
				top: 0,
				content: '""',
				width: '250px',
				height: '100%',
				zIndex: 2,
				pointerEvents: 'none',
				left: 0,
				background: 'linear-gradient(to left, rgba(255, 255, 255, 0), rgb(255, 255, 255))',
			},
			_after: {
				position: 'absolute',
				top: 0,
				content: '""',
				width: '250px',
				height: '100%',
				zIndex: 2,
				pointerEvents: 'none',
				right: 0,
				background: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255))',
			},
		},
		logoItems: {
			display: 'flex',
			gap: 24,
			width: 'auto',
			flex: '1 0 auto',
			paddingRight: 24,
			animation: 'slides 35s infinite linear',
			_hover: { animationPlayState: 'paused' },
		},
		image: {
			w: '150px',
			_hover: { filter: 'none' },
			filter: 'invert(40%) grayscale(1) brightness(90%) contrast(60%)',
			height: '70px',
			flex: '1 0 auto',
			transition: 'all 0.1s',
		},
	},
	slots: ['logos', 'logoItems', 'image'],
}
