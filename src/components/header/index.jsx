'use client'

import React, { useEffect, useState } from 'react'
import { Button, Image, Text, Box, Link, useSlotRecipe } from '@chakra-ui/react'
import { CALENDAR_LINK, SITE_NAME } from '../../utils/global.variables'
import logo from '../../assets/logos/logo.png'
import logo_white from '../../assets/logos/logo_white.png'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import header from '../../theme/components/header'
import routes from '../../utils/routes'

const Header = () => {
	const location = useLocation()
	const isHome = location.pathname === '/' ? true : false

	const [isOnTop, setIsOnTop] = useState(null)

	const variant = isHome ? (isOnTop ? 'onTop' : 'home') : 'default'

	const recipe = useSlotRecipe({ recipe: header })
	const styles = recipe({ variant })

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
		<Box {...styles.wrapper}>
			<Box {...styles.logoWrapper}>
				<Image src={isHome ? (isOnTop ? logo_white : logo) : logo} alt="Prova" w={12} />
				<Text
					textStyle={'2xl'}
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
					let isCurrent = location.pathname === route.path || location.pathname === route.path + '/'
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
		</Box>
	)
}

export default Header
