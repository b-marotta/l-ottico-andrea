import { Box, Heading, Image, Separator, Text } from '@chakra-ui/react'
import React from 'react'
import image_src from '../assets/images/chi-siamo.jpg'
import andrea_image_src from '../assets/images/andrea_no_bg.png'
import thomas_image_src from '../assets/images/thomas_no_bg.png'
import styles from '../theme/pages/chi-siamo'
import labels from '../labels'

const ChiSiamo = () => {
	return (
		<Box>
			<Box position={'relative'}>
				<Image src={image_src} alt="Prova" {...styles.image} />
				<Box {...styles.overlayText}>
					<Text textStyle={'6xl'} fontWeight={600} color={'white'}>
						IL NOSTRO TEAM
					</Text>
				</Box>
			</Box>
			<Box {...styles.section}>
				<Box {...styles.imageContainer}>
					<Box {...styles.imageBackgroundPrimary}></Box>
					<Image src={andrea_image_src} alt="Andrea Gianettoni" {...styles.imageStyle} />
				</Box>
				<Box width={'45vw'} paddingRight={'5vw'}>
					<Box {...styles.heading}>
						<Heading as="h2" {...styles.headingText}>
							Andrea Gianettoni
						</Heading>
						<Text {...styles.subtitleText}>Il vostro amichevole ottico di quartiere</Text>
					</Box>
					<Text
						{...styles.descriptionText}
						dangerouslySetInnerHTML={{ __html: labels.chi_siamo.andrea.description }}
					/>
				</Box>
			</Box>
			<Separator />
			<Box {...styles.sectionTextRight}>
				<Box width={'45vw'} paddingRight={'5vw'}>
					<Box {...styles.heading}>
						<Heading as="h2" {...styles.headingText}>
							Thomas
						</Heading>
						<Text {...styles.subtitleText}>Il braccio destro di fiducia</Text>
					</Box>
					<Text
						{...styles.descriptionText}
						dangerouslySetInnerHTML={{ __html: labels.chi_siamo.thomas.description }}
					/>
				</Box>
				<Box {...styles.imageContainer}>
					<Box {...styles.imageBackgroundPrimary}></Box>
					<Image
						src={thomas_image_src}
						alt="Thomas"
						{...styles.imageFilter}
						{...styles.imageStyle}
					/>
				</Box>
			</Box>
		</Box>
	)
}

export default ChiSiamo
