import { Box, Image, Link, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import image_src from '../assets/photos/04.jpg'
import styles from '../theme/pages/prodotti'
import {
	capitalizeFirstLetter,
	importBrandsImages,
	importLacImages,
	importLentiImages,
} from '../utils'

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
					{...styles.image}
				/>
			</Box>
		</Box>
	))
}

const Prodotti = () => {
	return (
		<Box>
			<Box position={'relative'} bgImage={`url(${image_src})`} {...styles.main_image}>
				<Box {...styles.overlayText}>
					<Text textStyle={'6xl'} fontWeight={600} color={'white'}>
						I NOSTRI PRODOTTI
					</Text>
				</Box>
			</Box>

			<Box {...styles.section} textAlign={'center'}>
				<Stack gap={4}>
					<Text textStyle={{ base: 'lg', md: 'xl', lg: '4xl' }} fontWeight={500}>
						Lenti Oftalmiche
					</Text>
					<Text textStyle={{ base: 'sm', md: 'md', lg: 'xl' }} color={'gray.400'} fontWeight={500}>
						Clicca sul logo per scoprire di più
					</Text>
				</Stack>
				<Box {...styles.card_container}>
					<LentiImages styles={styles} />
				</Box>
			</Box>
			<Box {...styles.section} textAlign={'center'}>
				<Stack gap={4}>
					<Text textStyle={{ base: 'lg', md: 'xl', lg: '4xl' }} fontWeight={500}>
						Montature
					</Text>
				</Stack>
				<Box {...styles.card_container}>
					<MontatureImages styles={styles} />
				</Box>
			</Box>
			<Box {...styles.section} textAlign={'center'}>
				<Stack gap={4}>
					<Text textStyle={{ base: 'lg', md: 'xl', lg: '4xl' }} fontWeight={500}>
						Lenti a contatto
					</Text>
				</Stack>
				<Box {...styles.card_container}>
					<LacImages styles={styles} />
				</Box>
			</Box>
		</Box>
	)
}

export default Prodotti
