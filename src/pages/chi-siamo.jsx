import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import image_src from '../assets/photos/03.jpg'
import andrea_image_src from '../assets/photos/andrea_no_bg.png'
import thomas_image_src from '../assets/photos/thomas_no_bg.png'
import blob from '../assets/shapes/blob.jpg'
import blobMap from '../assets/shapes/blob_map.png'
import styles from '../theme/pages/chi-siamo'
import labels from '../labels'

const MemberSection = ({ isRight, labels, image, alt }) => {
	return (
		<Box
			{...styles.section}
			{...(isRight ? { flexDirection: { base: 'column-reverse', lg: 'row-reverse' } } : null)}
		>
			<Box width={{ base: 'unset', lg: '45vw' }} paddingRight={{ base: 'unset', lg: '5vw' }}>
				<Box {...styles.heading}>
					<Heading
						as="h2"
						{...styles.headingText}
						dangerouslySetInnerHTML={{ __html: labels.title }}
					/>
					<Text {...styles.subtitleText} dangerouslySetInnerHTML={{ __html: labels.subtitle }} />
				</Box>
				<Text
					{...styles.descriptionText}
					dangerouslySetInnerHTML={{ __html: labels.description }}
				/>
			</Box>
			<Box {...styles.imageContainer}>
				<Image
					src={blob}
					alt={alt}
					{...styles.imageStyle}
					position={'absolute'}
					zIndex={-1}
					objectFit={'fill'}
					{...(isRight
						? { transform: 'rotateY(180deg)', filter: 'hue-rotate(107deg)' }
						: { filter: 'hue-rotate(107deg)' })}
				/>
				<Image
					src={image}
					alt={'blob'}
					{...styles.imageStyle}
					{...styles.imageCut}
					maskImage={`url(${blobMap})`}
					{...(isRight ? { transform: 'rotateY(180deg)' } : null)}
				/>
			</Box>
		</Box>
	)
}

const ChiSiamo = () => {
	return (
		<Box>
			<Box position={'relative'} bgImage={`url(${image_src})`} {...styles.main_image}>
				<Box {...styles.overlayText}>
					<Text textStyle={{ base: '4xl', lg: '6xl' }} fontWeight={600} color={'white'}>
						IL NOSTRO TEAM
					</Text>
				</Box>
			</Box>
			<Box>
				<MemberSection labels={labels.chi_siamo.andrea} image={andrea_image_src} alt={'Andrea'} />
				<MemberSection
					isRight
					labels={labels.chi_siamo.thomas}
					image={thomas_image_src}
					alt={'Thomas'}
				/>
			</Box>
		</Box>
	)
}

export default ChiSiamo
