import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<Box id="footer" textAlign={'center'} py={2} bg={'primary'} color={'white'}>
			<Text as={'span'}>
				© 2025 - Tutti i diritti riservati
				<Text as="span" display={{ base: 'none', lg: 'unset' }}>
					{' '}
					-{' '}
				</Text>
			</Text>
			<Link to="/privacy-policy">
				<Text as={'span'} textDecor={'underline'}>
					<Box as="span" display={{ base: 'block', lg: 'none' }}></Box>
					Privacy Policy
				</Text>
			</Link>
		</Box>
	)
}

export default Footer
