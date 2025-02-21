import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { GoArrowUp } from 'react-icons/go'
import { Button, Text } from '@chakra-ui/react'

const ScrollToTop = () => {
	const { pathname } = useLocation()
	const [showButton, setShowButton] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setShowButton(true)
			} else {
				setShowButton(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		window.scrollTo({ top: 0 })
	}, [pathname])

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<Button
			onClick={scrollToTop}
			variant={'solid'}
			opacity={showButton ? 0.6 : 0}
			_hover={{ opacity: 1 }}
			pointerEvents={showButton ? 'auto' : 'none'}
			style={{
				padding: '10px 15px',
				fontSize: '24px',
				backgroundColor: 'primary.light',
				color: '#fff',
				border: 'none',
				borderRadius: '25px',
				cursor: 'pointer',
				transition: 'opacity 0.3s',
				zIndex: 100,
			}}
			width={{ base: 0, lg: 'auto' }}
		>
			<GoArrowUp />
			<Text textStyle={'md'} fontWeight={'500'} display={{ base: 'none', lg: 'block' }}>
				Torna su
			</Text>
		</Button>
	)
}

export default ScrollToTop
