import { Box, Image, Text, Button, useSlotRecipe } from '@chakra-ui/react'
import React from 'react'
import image_src from '../assets/images/04.jpg'
import BrandsCarousel from '../components/brands-carousel'
import home from '../theme/pages/home'
import labels from '../labels'
import { Link } from 'react-router-dom'
import routes from '../utils/routes'

const Home = () => {
	const recipe = useSlotRecipe({ recipe: home })
	const styles = recipe()
	const chiSiamoPath = routes.find((item) => item.chiSiamo).chiSiamo.path
	const servicesPath = routes.find((item) => item.servizi).servizi.path

	return (
		<Box>
			<Box position={'relative'}>
				<Image src={image_src} alt="Prova" {...styles.image} />
				<Box {...styles.overlayText}>
					<Text textStyle={'6xl'} color={'white'}>
						{labels.home.main.title}
					</Text>
					<Text textStyle={'3xl'} color={'gray.300'}>
						{labels.home.main.subtitle}
					</Text>
				</Box>
			</Box>
			<Box {...styles.sectionShortWho}>
				<Box {...styles.sectionContent}>
					<Text
						{...styles.textCenter}
						dangerouslySetInnerHTML={{ __html: labels.home.story.text }}
					></Text>
					<Box {...styles.buttonContainer}>
						<Button variant={'outline_w'} as={Link} to={chiSiamoPath}>
							{labels.home.buttons.discoverWho}
						</Button>
					</Box>
				</Box>
			</Box>
			<Box {...styles.section}>
				<Box {...styles.sectionContent}>
					<Text {...styles.sectionTitle}>{labels.home.services}</Text>
					<Box {...styles.buttonContainer}>
						<Button variant={'outline'} as={Link} to={servicesPath}>
							{labels.home.buttons.discoverMore}
						</Button>
					</Box>
				</Box>
			</Box>
			<Box {...styles.section}>
				<Text {...styles.sectionTitle}>{labels.home.brands}</Text>
				<BrandsCarousel />
			</Box>
		</Box>
	)
}

export default Home
