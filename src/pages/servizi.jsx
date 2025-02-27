import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import image_src from '../assets/photos/04.jpg'
import styles from '../theme/pages/servizi'

const Servizi = () => {
	return (
		<Box>
			<Box position={'relative'} bgImage={`url(${image_src})`} {...styles.main_image}>
				<Box {...styles.overlayText}>
					<Text textStyle={'6xl'} fontWeight={600} color={'white'}>
						I NOSTRI SERVIZI
					</Text>
				</Box>
			</Box>
			<Box></Box>
		</Box>
	)
}

export default Servizi
