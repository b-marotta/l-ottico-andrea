import { Box, Image } from '@chakra-ui/react'
import image_src from '../../assets/shapes/lenses.png'
import React from 'react'

const LentiAContatto = () => {
	return (
		<Box display={'flex'} w={'100%'} h={'100%'} position={'absolute'}>
			<Box
				display={'flex'}
				justifyContent={'space-around'}
				position={'absolute'}
				zIndex={-1}
				transform={'rotateZ(25deg)'}
				alignItems="center"
				w={'120%'}
				h={'200%'}
				flexWrap={'wrap'}
			>
				{Array.from({ length: 20 }, (_, i) => (
					<Image key={i} src={image_src} margin={20} opacity={0.3} w={80} />
				))}
			</Box>
		</Box>
	)
}

export default LentiAContatto
