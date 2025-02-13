import React from 'react'
import { Button, Image, HStack, Text } from '@chakra-ui/react'
import { SITE_NAME } from '../../utils/global.variables'

const Header = () => {
	return (
		<HStack>
			<HStack gap={4}>
				<Image src="" alt="" />
				<Text>{SITE_NAME}</Text>
			</HStack>
			<HStack>
				<Button>Home</Button>
				<Button>Servizi</Button>
				<Button>Prodotti</Button>
			</HStack>
			<Button>PRENOTA ORA</Button>
		</HStack>
	)
}

export default Header
