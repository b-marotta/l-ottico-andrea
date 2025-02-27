import {
	Box,
	Image,
	Text,
	Button,
	useSlotRecipe,
	Icon as ChakraIcon,
	Flex,
	Grid,
} from '@chakra-ui/react'
import React from 'react'
import image_src from '../assets/photos/01.jpg'
import image_src_2 from '../assets/photos/3.jpg'
import image_src_snellen from '../assets/other/snellen.jpg'
import image_src_lens from '../assets/other/lens.jpg'
import image_src_analisi from '../assets/other/analisi.jpg'
import image_src_bg_line from '../assets/other/bg_line.png'
import BrandsCarousel from '../components/brands-carousel'
import home from '../theme/pages/home'
import labels from '../labels'
import { Link } from 'react-router-dom'
import routes from '../utils/routes'
import { Icon } from '../theme/components/icons'
import { LiaIdCardSolid } from 'react-icons/lia'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

const Home = () => {
	const recipe = useSlotRecipe({ recipe: home })
	const styles = recipe()
	const chiSiamoPath = routes.find((item) => item.chiSiamo).chiSiamo.path
	const servicesPath = routes.find((item) => item.servizi).servizi.path
	const productsPath = routes.find((item) => item.prodotti).prodotti.path

	return (
		<Box>
			<Box position={'relative'}>
				<Image src={image_src} alt="Prova" {...styles.image} />
				<Box {...styles.overlayText}>
					<Text textStyle={{ base: '2xl', md: '4xl', lg: '6xl' }} color={'white'}>
						{labels.home.main.title}
					</Text>
					<Text
						textStyle={{ base: 'xl', md: '2xl', lg: '3xl' }}
						color={'gray.300'}
						dangerouslySetInnerHTML={{ __html: labels.home.main.subtitle }}
					/>
				</Box>
			</Box>
			<Box {...styles.brandsSection}>
				<Text {...styles.sectionTitle} dangerouslySetInnerHTML={{ __html: labels.home.brands }} />
				<BrandsCarousel />
				<Button
					variant={'outline'}
					as={Link}
					to={productsPath}
					dangerouslySetInnerHTML={{ __html: labels.home.buttons.discoverMore }}
				/>
			</Box>
			<Box {...styles.sectionShortWho} bgImage={`url(${image_src_2})`}>
				<Box {...styles.sectionContent}>
					<Text {...styles.textCenter} textStyle={'4xl'} fontWeight={'500'}>
						Chi siamo
					</Text>
					<Text
						{...styles.textCenter}
						dangerouslySetInnerHTML={{ __html: labels.home.story.text }}
					></Text>
					<Box {...styles.buttonContainer}>
						<Button
							variant={'outline_w'}
							as={Link}
							to={chiSiamoPath}
							dangerouslySetInnerHTML={{ __html: labels.home.buttons.discoverMore }}
						/>
					</Box>
				</Box>
			</Box>
			<Box {...styles.section} bgImage={`url(${image_src_bg_line})`} backgroundSize="contain">
				<Box {...styles.sectionContent}>
					<Text {...styles.sectionTitle}>{labels.home.services}</Text>
					<Grid gap={8} gridTemplateColumns={'1fr 1fr 1fr'} my={4}>
						<Box {...styles.servicesBoxWrapper}>
							<Box {...styles.servicesBox} className="servicesBox">
								<Box {...styles.front}>
									<Image src={image_src_snellen} {...styles.imageServices} />
									<Text {...styles.titleServices}>Analisi visive optometriche</Text>
								</Box>
								<Box {...styles.back}>
									<Text {...styles.innerTextServices}>
										Grazie alle tecniche di refrazione soggettiva, siamo in grado di determinare con
										precisione il valore diottrico necessario per te.
									</Text>
								</Box>
							</Box>
						</Box>
						<Box {...styles.servicesBoxWrapper2}>
							<Box {...styles.servicesBox} className="servicesBox">
								<Box {...styles.front}>
									<Image src={image_src_lens} {...styles.imageServices} />
									<Text {...styles.titleServices}>Lenti a contatto</Text>
								</Box>
								<Box {...styles.back2}>
									<Text {...styles.innerTextServices}>
										Offriamo applicazione di lenti a contatto morbide, rigide gas permeabili e su
										misura per cornee irregolari, con esame optometrico incluso.
									</Text>
								</Box>
							</Box>
						</Box>
						<Box {...styles.servicesBoxWrapper}>
							<Box {...styles.servicesBox} className="servicesBox">
								<Box {...styles.front}>
									<Image src={image_src_analisi} {...styles.imageServices} />
									<Text {...styles.titleServices}>Misurazioni strumentali</Text>
								</Box>
								<Box {...styles.back}>
									<Text {...styles.innerTextServices}>{labels.home.text.services}</Text>
								</Box>
							</Box>
						</Box>
					</Grid>
					<Box {...styles.buttonContainer}>
						<Button
							variant={'outline'}
							as={Link}
							to={servicesPath}
							dangerouslySetInnerHTML={{ __html: labels.home.buttons.discoverMore }}
						/>
					</Box>
				</Box>
			</Box>
			<Box {...styles.mapSection}>
				<Box {...styles.mapInfoWrapper}>
					<Text textStyle={'3xl'} {...styles.infoTitle}>
						{labels.home.mapSection.title}
					</Text>
					<Box {...styles.mapInfoBox}>
						<Text {...styles.infoTitle}>📌 Posizione</Text>
						<Text>Via Federico de Roberto</Text>
						<Text>20157 Milano</Text>
					</Box>
					<Box {...styles.mapInfoBox}>
						<Text {...styles.infoTitle}>⏰ Orari</Text>
						<Text>Martedì — Sabato</Text>
						<Text>9.00-12.30 / 15.30-19.30</Text>
					</Box>
					<Box {...styles.mapInfoBox}>
						<Text {...styles.infoTitle}>📞 Telefono</Text>
						<Link to="tel:0239005279">02 39005279</Link>
					</Box>
				</Box>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5591.391623874532!2d9.140179776710573!3d45.51620172996687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c0432af11393%3A0xb775644bb33a9b8e!2sL&#39;Ottico%20Andrea%20di%20Gianettoni%20Andrea!5e0!3m2!1sit!2sit!4v1739953917990!5m2!1sit!2sit"
					width="100%"
					height="500"
					style={{ border: 0 }}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</Box>
			<Box {...styles.threeStyleSection}>
				<Box {...styles.miniSection}>
					<ChakraIcon marginInline="auto" fontSize="4xl" color="primary">
						<LiaIdCardSolid />
					</ChakraIcon>
					<Text textStyle={'md'}>
						Realizziamo{' '}
						<Text as={'span'} fontWeight="600">
							fototessere
						</Text>{' '}
						direttamente in negozio, veloci e conformi alle normative. Passa a trovarci!
					</Text>
				</Box>
				<Box m={'auto'} h={'120px'} w={'1px'} bg={'gray.200'} />
				<Box {...styles.miniSection}>
					<Icon
						name="Alma"
						size={'auto'}
						color={'#FA5022'}
						height="auto"
						width="80px"
						marginInline="auto"
					/>
					<Text textStyle={'md'}>
						Con Alma offriamo la comodità di pagare fino a 4 rate senza interessi. Chiedici come
						funziona!
					</Text>
				</Box>
				<Box m={'auto'} h={'120px'} w={'1px'} bg={'gray.200'} />
				<Box {...styles.miniSectionLogosWrapper}>
					<Flex flexDirection={'column'} alignItems={'center'} gap={2}>
						<Text width="auto" textStyle={'lg'} fontWeight={'500'}>
							Hai bisogno di un aiuto?
						</Text>
						<Link
							{...styles.miniSectionLogos}
							bg={'transparent'}
							width="100%"
							to={'tel:0239005279'}
							_hover={{ color: '#1877F2' }}
						>
							<Text
								width="auto"
								textStyle={'lg'}
								fontWeight={'500'}
								borderBottom={'1px solid black'}
								lineHeight={1}
								transition={'all 0.2s'}
								_hover={{ color: '#1877F2', borderColor: '#1877F2' }}
							>
								02 39005279
							</Text>
						</Link>
					</Flex>
					<Flex flexDirection={'column'} alignItems={'center'} gap={2}>
						<Text width="auto" textStyle={'lg'} fontWeight={'500'}>
							Seguici anche sui social!
						</Text>
						<Flex gap={4}>
							<Link
								to="https://www.facebook.com/profile.php?id=100009528034422"
								target={'_blank'}
								{...styles.miniSectionLogos}
							>
								<ChakraIcon
									marginInline="auto"
									fontSize="xl"
									transition={'color 0.2s'}
									_hover={{ color: '#1877F2' }}
								>
									<FaFacebookF />
								</ChakraIcon>
							</Link>
							<Link
								to="https://www.instagram.com/lotticoandrea/"
								target={'_blank'}
								{...styles.miniSectionLogos}
							>
								<ChakraIcon
									marginInline="auto"
									fontSize="xl"
									transition={'color 0.2s'}
									_hover={{ color: '#1877F2' }}
								>
									<FaInstagram />
								</ChakraIcon>
							</Link>
						</Flex>
					</Flex>
				</Box>
			</Box>
		</Box>
	)
}

export default Home
