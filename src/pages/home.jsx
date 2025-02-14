import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import image_src from '../assets/images/04.jpg'

const Home = () => {
	return (
		<Box>
			<Image src={image_src} alt="Prova" w={'100%'} filter={'brightness(0.5)'} />
			<Box
				fontWeight={'500'}
				position={'absolute'}
				top={'50%'}
				left={'50%'}
				transform={'translate(-50%, -50%)'}
				textTransform={'uppercase'}
			>
				<Text textStyle={'6xl'} color={'white'}>
					Il tuo ottico di fiducia
				</Text>
				<Text textStyle={'3xl'} color={'gray.300'}>
					Dal 2005 vicino a te
				</Text>
			</Box>
		</Box>
	)
}

export default Home
