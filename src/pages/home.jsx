import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import image_src from '../assets/images/04.jpg'

const Home = () => {
	return (
		<Box>
			<Image src={image_src} alt="Prova" w={'100%'} />
		</Box>
	)
}

export default Home
