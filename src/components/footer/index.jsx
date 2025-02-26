import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<Box id="footer" textAlign={'center'} py={2} bg={'primary'} color={'white'}>
			<Text as={'span'}>© 2025 - Tutti i diritti riservati - </Text>
			<Link to="/privacy-policy">
				<Text as={'span'} textDecor={'underline'}>
					Policy sulla Privacy
				</Text>
			</Link>
		</Box>
	)
}

export default Footer
