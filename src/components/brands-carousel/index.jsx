import React, { useEffect, useState } from 'react'
import { Box, Image, useSlotRecipe } from '@chakra-ui/react'
import { importBrandsImages } from '../../utils'
import brandsCarousel from '../../theme/components/brands-carousel'

export const BrandImages = ({ styles }) => {
	const [images, setImages] = useState({})

	useEffect(() => {
		const loadImages = async () => {
			const importedImages = await importBrandsImages()
			setImages(importedImages)
		}

		loadImages()
	}, [])

	return Object.keys(images).map((key, index) => (
		<Image key={index} src={images[key]} alt={`Brand ${index}`} fit={'contain'} {...styles.image} />
	))
}

const BrandsCarousel = () => {
	const recipe = useSlotRecipe({ recipe: brandsCarousel })
	const styles = recipe()

	return (
		<Box {...styles.logos}>
			<Box {...styles.logoItems}>
				<BrandImages styles={styles} />
				<BrandImages styles={styles} />
			</Box>
		</Box>
	)
}

export default BrandsCarousel
