import React, { useEffect, useState } from 'react'
import { Button, Image, HStack, Text, Box } from '@chakra-ui/react'
import { SITE_NAME } from '../../utils/global.variables'
import logo from '../../assets/logos/logo.png'
import routes from '../../utils/routes'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
	const location = useLocation()
	const [isOnTop, setIsOnTop] = useState()

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				if (isOnTop !== false) setIsOnTop(false)
			} else {
				if (isOnTop !== true) setIsOnTop(true)
			}
		}

		handleScroll()

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	console.log(isOnTop)
	console.log(isOnTop)

	return (
		<HStack
			justifyContent={'space-between'}
			py={4}
			px={8}
			position={'fixed'}
			w={'100%'}
			bg={'transparent'}
			zIndex={100}
		>
			<HStack gap={4} w={'25%'}>
				<Image src={logo} alt="Prova" w={12} />
				<Text textStyle={'2xl'} color={'primary'} fontWeight={'500'}>
					{SITE_NAME}
				</Text>
			</HStack>
			<HStack w={'50%'} justifyContent={'center'} gap={12}>
				{routes.map((route, index) => {
					let isCurrent = location.pathname === route.path || location.pathname === route.path + '/'
					return (
						<Button
							key={index}
							className={isCurrent ? 'active' : ''}
							as={Link}
							to={route.path}
							textStyle={'lg'}
							variant={'header'}
						>
							{route.title}
						</Button>
					)
				})}
			</HStack>
			<Box w={'25%'} textAlign={'right'}>
				<Button textStyle={'md'} size={'sm'}>
					PRENOTA ORA
				</Button>
			</Box>
		</HStack>
	)
}

export default Header
