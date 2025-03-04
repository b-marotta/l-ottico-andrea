import { Box, Image } from '@chakra-ui/react'
import image_src from '../../assets/other/lente_trasparente.png'
import React from 'react'

const Lenti = () => {
	const rotatingStyle = {
		animation: 'rotate-lenses 8s linear infinite',
	}

	return (
		<Box
			display={'flex'}
			justifyContent={'space-around'}
			position={'absolute'}
			zIndex={{ base: 0, lg: -1 }}
			transform={{ base: 'rotateZ(-25deg) translateX(-60%)', lg: 'rotateZ(-25deg)' }}
		>
			<style>
				{`
				@keyframes rotate-lenses {
					from { transform: rotateY(0deg); }
					to { transform: rotateY(360deg); }
				}
				`}
			</style>
			{Array.from({ length: 5 }, (_, i) => (
				<Image
					key={i}
					src={image_src}
					margin={{ base: '-50px', lg: '-70px' }}
					style={rotatingStyle}
				/>
			))}
		</Box>
	)
}

export default Lenti
