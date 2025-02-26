import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import image_src from '../assets/photos/03.jpg'
import andrea_image_src from '../assets/photos/andrea.png'
import thomas_image_src_no_bg from '../assets/photos/thomas_no_bg.png'
import andrea_image_src_no_bg from '../assets/photos/andrea_no_bg.png'
import thomas_image_src from '../assets/photos/thomas.png'
import styles from '../theme/pages/chi-siamo'
import labels from '../labels'

const MemberSection = ({ isRight, labels, image, no_bg, alt }) => {
	return (
		<Box
			{...(isRight ? { flexDirection: 'row-reverse' } : null)}
			{...styles.section}
			h={'max(calc(100dvh - var(--header-height)), 550px)'}
			position={'sticky'}
			top={'var(--header-height)'}
			bg={'white'}
			borderTop={'1px solid #E5E5E5'}
		>
			<Box width={'45vw'} paddingRight={'5vw'}>
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
				<Box {...styles.imageBackgroundPrimary} />
				<Image
					src={image}
					alt={alt}
					{...styles.imageFilter}
					{...styles.imageStyle}
					borderRadius={80}
				/>
				<Image
					src={no_bg}
					alt={alt}
					{...styles.imageStyle}
					position={'absolute'}
					top={0}
					borderRadius={80}
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
					<Text textStyle={'6xl'} fontWeight={600} color={'white'}>
						IL NOSTRO TEAM
					</Text>
				</Box>
			</Box>
			<Box>
				<MemberSection
					labels={labels.chi_siamo.andrea}
					image={andrea_image_src}
					no_bg={andrea_image_src_no_bg}
					alt={'Andrea'}
				/>
				<MemberSection
					isRight
					labels={labels.chi_siamo.thomas}
					image={thomas_image_src}
					no_bg={thomas_image_src_no_bg}
					alt={'Thomas'}
				/>
			</Box>
		</Box>
	)
}

export default ChiSiamo
