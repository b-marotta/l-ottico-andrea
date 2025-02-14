import React, { useEffect, useState } from 'react'
import { Button, Image, HStack, Text, Box, Link } from '@chakra-ui/react'
import { SITE_NAME } from '../../utils/global.variables'
import logo from '../../assets/logos/logo.png'
import logo_white from '../../assets/logos/logo_white.png'
import routes from '../../utils/routes'
import { useLocation } from 'react-router-dom'

const Header = () => {
	const location = useLocation()
	const [isOnTop, setIsOnTop] = useState()

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsOnTop(false)
			} else {
				setIsOnTop(true)
			}
		}

		handleScroll()

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<HStack
			justifyContent={'space-between'}
			py={4}
			px={8}
			position={'fixed'}
			w={'100%'}
			bg={'transparent'}
			zIndex={100}
			background={isOnTop ? 'transparent' : 'white'}
			transition={'background 0.3s'}
		>
			<HStack gap={4} w={'25%'}>
				<Image src={isOnTop ? logo_white : logo} alt="Prova" w={12} />
				<Text textStyle={'2xl'} fontWeight={'500'} color={isOnTop ? 'white' : 'primary'}>
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
							color={
								isOnTop ? (isCurrent ? 'white' : 'gray.400') : isCurrent ? 'primary' : 'gray.400'
							}
							_before={isOnTop ? { bg: 'white' } : {}}
							_hover={{ color: isOnTop ? 'white' : 'primary' }}
							as={Link}
							to={route.path}
							textStyle={'lg'}
							variant={'header'}
							{...(isCurrent ? { 'aria-current': 'page' } : {})}
						>
							{route.title}
						</Button>
					)
				})}
			</HStack>
			<Box w={'25%'} textAlign={'right'}>
				<Link href={'http://calendar.app.google/WGGZBBdqh3QfQBZv5'} target="_blank" asChild>
					<Button
						as={Link}
						to={'http://calendar.app.google/WGGZBBdqh3QfQBZv5'}
						textStyle={'md'}
						size={'sm'}
						variant={isOnTop ? 'outline' : 'solid'}
						color={'white'}
						_hover={isOnTop ? { color: 'primary' } : { color: 'white' }}
					>
						PRENOTA ORA
					</Button>
				</Link>
			</Box>
		</HStack>
	)
}

export default Header
