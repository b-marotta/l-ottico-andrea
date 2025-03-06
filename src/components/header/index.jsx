'use client'

import React, { useEffect, useState } from 'react'
import { Button, Image, Text, Box, Link, Icon, useSlotRecipe } from '@chakra-ui/react'
import { CALENDAR_LINK, SITE_NAME } from '../../utils/global.variables'
import logo from '../../assets/logos/logo.png'
import logo_white from '../../assets/logos/logo_white.png'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import header from '../../theme/components/header'
import routes from '../../utils/routes'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'

const Header = () => {
	const { pathname } = useLocation()
	const isHome = pathname === '/' ? true : false

	const menuOverlayRef = React.createRef()
	const headerRef = React.createRef()

	const [isOnTop, setIsOnTop] = useState(null)

	const variant = isHome ? (isOnTop ? 'onTop' : 'home') : 'default'

	const recipe = useSlotRecipe({ recipe: header })
	const styles = recipe({ variant })

	useEffect(() => {
		menuOverlayRef.current.classList.remove('open')
	}, [pathname])

	useEffect(() => {
		var r = document.querySelector(':root')
		r.style.setProperty('--header-height', headerRef.current.clientHeight + 'px')

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

	// Precarica le pagine dopo che la pagina è caricata e il browser è inattivo
	useEffect(() => {
		const preloadPages = () => {
			const requestIdleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 1))

			requestIdleCallback(() => {
				import('../../pages/home')
				import('../../pages/chi-siamo')
				import('../../pages/servizi')
				import('../../pages/prodotti')
			})
		}
		preloadPages()
	}, [])

	return (
		<Box {...styles.wrapper} ref={headerRef}>
			<Box {...styles.logoWrapper} as={RouterLink} to="/">
				<Image src={isHome ? (isOnTop ? logo_white : logo) : logo} alt="Prova" w={12} />
				<Text
					textStyle={{ base: 'xl', lg: '2xl' }}
					fontWeight={'500'}
					color={isHome ? (isOnTop ? 'white' : 'primary') : 'primary'}
				>
					{SITE_NAME}
				</Text>
			</Box>
			<Box {...styles.navLinks}>
				{routes.map((route, index) => {
					route = route[Object.keys(route)[0]]
					if (route.hidden) return
					let isCurrent = pathname === route.path || pathname === route.path + '/'
					return (
						<Button
							key={index}
							as={RouterLink}
							to={route.path}
							className={isCurrent ? 'current' : ''}
							{...(isCurrent ? { 'aria-current': 'page' } : {})}
							variant={'header'}
							css={styles.navButton}
						>
							{route.title}
						</Button>
					)
				})}
			</Box>
			<Box {...styles.ctaWrapper}>
				<Button
					as={Link}
					href={CALENDAR_LINK}
					target="_blank"
					{...styles.ctaButton}
					variant={isHome ? (isOnTop ? 'outline_w' : 'solid') : 'solid'}
					textDecoration={'none'}
				>
					PRENOTA ORA
				</Button>
			</Box>
			<Button
				{...styles.hamburgerWrapper}
				onClick={() => menuOverlayRef.current.classList.toggle('open')}
				variant="icon"
			>
				<Icon color={isHome ? (isOnTop ? 'white' : 'black') : 'black'}>
					<RxHamburgerMenu />
				</Icon>
			</Button>
			<Box {...styles.mobileMenuWrapper} ref={menuOverlayRef}>
				<Icon
					color={'white'}
					fontSize={'2xl'}
					onClick={() => menuOverlayRef.current.classList.toggle('open')}
					position={'absolute'}
					right={8}
					top={8}
				>
					<IoMdClose />
				</Icon>
				{routes.map((route, index) => {
					route = route[Object.keys(route)[0]]
					if (route.hidden) return
					let isCurrent = pathname === route.path || pathname === route.path + '/'
					return (
						<Button
							key={index}
							as={RouterLink}
							to={route.path}
							className={isCurrent ? 'current' : ''}
							{...(isCurrent ? { 'aria-current': 'page' } : {})}
							variant={'header'}
							css={styles.navButton}
						>
							{route.title}
						</Button>
					)
				})}
				<Box {...styles.ctaWrapperMobile}>
					<Button
						as={Link}
						href={CALENDAR_LINK}
						target="_blank"
						{...styles.ctaButton}
						variant={isHome ? (isOnTop ? 'outline_w' : 'solid') : 'solid'}
						textDecoration={'none'}
					>
						PRENOTA ORA
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

export default Header
