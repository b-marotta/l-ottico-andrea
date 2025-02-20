import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import image_src from '../assets/images/prodotti.webp'

const Prodotti = () => {
	return (
		<Box>
			<Box position={'relative'}>
				<Image src={image_src} alt="Prova" w={'100%'} h={'400px'} filter={'brightness(0.5)'} />
			</Box>
		</Box>
	)
}

export default Prodotti
