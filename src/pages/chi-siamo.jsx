import { Box, Heading, Image, Separator, Text } from '@chakra-ui/react'
import React from 'react'
import image_src from '../assets/photos/03.jpg'
import andrea_image_src from '../assets/photos/andrea_no_bg.png'
import thomas_image_src from '../assets/photos/thomas_no_bg.png'
import styles from '../theme/pages/chi-siamo'
import labels from '../labels'

const MemberSection = ({ isRight, labels, image }) => {
	return (
		<Box {...(isRight ? styles.sectionTextRight : styles.section)}>
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
				<Box {...styles.imageBackgroundPrimary}></Box>
				<Image
					src={image}
					alt="Thomas"
					{...(!isRight ? styles.imageFilter1 : styles.imageFilter2)}
					{...styles.imageStyle}
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
			<MemberSection labels={labels.chi_siamo.andrea} image={andrea_image_src} />
			<Separator />
			<MemberSection isRight labels={labels.chi_siamo.thomas} image={thomas_image_src} />
		</Box>
	)
}

export default ChiSiamo
