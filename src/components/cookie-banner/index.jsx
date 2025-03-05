import { Button, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const consentCookie = () => localStorage.getItem('cookieConsent') || false

const CookieBanner = () => {
	const consent = consentCookie()

	const [isVisible, setIsVisible] = useState(!consent)

	const acceptCookies = () => {
		localStorage.setItem('cookieConsent', 'true')
		setIsVisible(false)
	}

	return (
		<Flex
			id="cookies-banner"
			flexDirection={{ base: 'column', lg: 'row' }}
			justifyContent={'space-between'}
			gap={4}
			position="fixed"
			bottom="0"
			left="0"
			right="0"
			padding="1rem"
			backgroundColor="white"
			textAlign="center"
			boxShadow="0px 0px 10px rgba(0,0,0,0.1)"
			zIndex="10000"
			alignItems="center"
			opacity={isVisible ? 0.9 : 0}
			pointerEvents={isVisible ? 'all' : 'none'}
			transition="opacity 0.5s"
		>
			<Text textStyle={{ base: 'sm', lg: 'md' }}>
				Questo sito utilizza cookie tecnici necessari per il funzionamento base. Per maggiori
				informazioni, consulta la nostra{' '}
				<Link href="/privacy-policy">
					<Text as={'span'} textDecor={'underline'}>
						Policy sulla Privacy
					</Text>
				</Link>
				.
			</Text>
			<Button variant={{ base: 'unset', lg: 'outline' }} onClick={acceptCookies}>
				Chiudi
			</Button>
		</Flex>
	)
}

export default CookieBanner
