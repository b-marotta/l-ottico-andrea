import { Box, Image, Link, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import image_src from '../assets/photos/04.jpg'
import styles from '../theme/pages/prodotti'
import {
	capitalizeFirstLetter,
	importBrandsImages,
	importLacImages,
	importLentiImages,
} from '../utils'
import Lenti from '../components/lente-trasparente'
import Occhiali from '../components/occhiali'
import bg_lenses from '../assets/shapes/curve-glass-video.mp4'

const LacImages = ({ styles }) => {
	const [images, setImages] = useState({})

	useEffect(() => {
		const loadImages = async () => {
			const importedImages = await importLacImages()
			setImages(importedImages)
		}

		loadImages()
	}, [])

	return Object.keys(images).map((key, index) => (
		<Box {...styles.card} key={index}>
			<Box {...styles.card_image}>
				<Image src={images[key]} alt={`Brand ${index}`} fit={'contain'} {...styles.image} />
			</Box>
		</Box>
	))
}
const LentiImages = ({ styles }) => {
	const [images, setImages] = useState({})

	useEffect(() => {
		const loadImages = async () => {
			const importedImages = await importLentiImages()
			setImages(importedImages)
		}

		loadImages()
	}, [])

	const getUrl = (name) => {
		switch (name) {
			case 'zeiss':
				return 'https://www.zeiss.it/vision-care/cerchi-nuove-lenti.html'
			case 'synchrony':
				return 'https://www.synchronylenses.ca/'
			case 'optodinamica':
				return 'https://www.optodinamica.com/'

			default:
				break
		}
	}

	return Object.keys(images)
		.reverse()
		.map((key, index) => (
			<Box {...styles.card} key={index}>
				<Link target="_blank" href={getUrl(images[key].name)} {...styles.card_image}>
					<Image
						src={images[key].item}
						alt={`Brand ${capitalizeFirstLetter(images[key].name)}`}
						fit={'contain'}
						{...styles.image}
					/>
				</Link>
			</Box>
		))
}

export const MontatureImages = ({ styles }) => {
	const [images, setImages] = useState({})

	useEffect(() => {
		const loadImages = async () => {
			const importedImages = await importBrandsImages()
			setImages(importedImages)
		}

		loadImages()
	}, [])

	return Object.keys(images).map((key, index) => (
		<Box {...styles.card} key={index}>
			<Box {...styles.card_image}>
				<Image
					key={index}
					src={images[key]}
					alt={`Brand ${index}`}
					fit={'contain'}
					filter={'grayscale(1) brightness(0.5)'}
					{...styles.image}
				/>
			</Box>
		</Box>
	))
}

const Prodotti = () => {
	const isDesktop = useBreakpointValue({ base: false, lg: true })

	return (
		<Box>
			<Box position={'relative'} bgImage={`url(${image_src})`} {...styles.main_image}>
				<Box {...styles.overlayText}>
					<Text textStyle={{ base: '4xl', lg: '6xl' }} fontWeight={600} color={'white'}>
						I NOSTRI PRODOTTI
					</Text>
				</Box>
			</Box>

			<Box {...styles.section} textAlign={'left'} overflow={'hidden'}>
				<Lenti />
				<Box {...styles.sectionInternal}>
					<Stack gap={4} flex={{ base: 0, lg: '1 0 auto' }}>
						<Text textStyle={{ base: '2xl', lg: '4xl' }} fontWeight={500}>
							Lenti Oftalmiche
						</Text>
						<Text textStyle={{ base: 'md', lg: 'xl' }} color={'gray.400'} fontWeight={500}>
							Clicca sul logo per scoprire di più
						</Text>
					</Stack>
					<Box {...styles.card_container}>
						<LentiImages styles={styles} />
					</Box>
				</Box>
			</Box>
			<Box {...styles.section} textAlign={'center'} bgColor={'#fff7f7'}>
				<Occhiali />
				<Box {...styles.sectionInternal}>
					<Stack gap={4}>
						<Text textStyle={{ base: '2xl', lg: '4xl' }} fontWeight={500}>
							Montature
						</Text>
					</Stack>
					<Box {...styles.card_container}>
						<MontatureImages styles={styles} />
					</Box>
				</Box>
			</Box>
			<Box {...styles.section} textAlign={'center'}>
				<Box
					w={{ base: 'auto', lg: '100%' }}
					h={'100%'}
					left={0}
					position={'absolute'}
					opacity={0.2}
					height={'100%'}
				>
					<video
						autoPlay
						muted
						loop
						width={isDesktop ? '100%' : 'auto'}
						style={{ objectFit: 'cover', height: '100%' }}
					>
						<source src={bg_lenses} type="video/mp4" />
					</video>
				</Box>
				<Box {...styles.sectionInternal}>
					<Stack gap={4}>
						<Text textStyle={{ base: '2xl', lg: '4xl' }} fontWeight={500}>
							Lenti a contatto
						</Text>
					</Stack>
					<Box {...styles.card_container}>
						<LacImages styles={styles} />
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default Prodotti
