import { Box, Text, Separator, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import image_src from '../assets/photos/02.jpg'
import styles from '../theme/pages/servizi'
import lac_src from '../assets/other/lac.jpg'
import orto_src from '../assets/other/orto.png'
import lac_2_src from '../assets/other/lac_2.png'
import pachimetria from '../assets/other/pachimetria.jpg'
import opacity from '../assets/other/opacity.webp'
import vx120 from '../assets/other/VX120.webp'
import lacrimale from '../assets/other/lacrimale.webp'

const Servizi = () => {
	return (
		<Box>
			<Box position={'relative'} bgImage={`url(${image_src})`} {...styles.main_image}>
				<Box {...styles.overlayText}>
					<Text textStyle={{ base: '4xl', lg: '6xl' }} fontWeight={600} color={'white'}>
						I NOSTRI SERVIZI
					</Text>
				</Box>
			</Box>
			<Box py={16} px={6}>
				<Box textAlign={'center'}>
					<Text textStyle={{ base: '2xl', lg: '3xl' }} fontWeight={600} color={'primary'}>
						Analisi visiva optometrica
					</Text>
					<Text textStyle={'lg'} fontWeight={400} color={'gray.400'} mb={6}>
						Il cuore dei nostri servizi
					</Text>
					<Text
						textStyle={{ base: 'lg', lg: 'xl' }}
						fontWeight={400}
						color={'gray.600'}
						w={{ base: '100%', lg: '60%' }}
						mx={'auto'}
					>
						Un processo accurato che utilizza tecniche di refrazione ottica per determinare con
						precisione le tue diottrie. Attraverso l&apos;uso di strumenti all&apos;avanguardia,
						identifichiamo le lenti ideali per migliorare la tua vista, offrendoti soluzioni su
						misura per soddisfare le tue esigenze.
					</Text>
				</Box>
			</Box>
			<Separator />
			<Box py={16} px={6}>
				<Box textAlign={'center'} pb={16}>
					<Text textStyle={{ base: '2xl', lg: '3xl' }} fontWeight={600} color={'primary'} mb={6}>
						Applicazione lenti a contatto
					</Text>
					<Text
						textStyle={{ base: 'lg', lg: 'xl' }}
						fontWeight={400}
						color={'gray.600'}
						w={{ base: '100%', lg: '60%' }}
						mx={'auto'}
					>
						Nel nostro centro ottico, offriamo una vasta gamma di soluzioni per le lenti a contatto,
						adattate alle esigenze specifiche di ogni cliente.
					</Text>
				</Box>
				<Box gap={12} display={'flex'} flexDirection={'column'}>
					<Box
						w={{ base: '100%', lg: '60%' }}
						mx={'auto'}
						display={{ base: 'flex', lg: 'grid' }}
						flexDirection={{ base: 'column', lg: 'unset' }}
						gridTemplateColumns={'1fr 1fr'}
						alignItems={'center'}
						gap={12}
					>
						<Box>
							<Image src={lac_src} borderRadius={16} />
						</Box>
						<Box>
							<Text textStyle={'3xl'} fontWeight={600} color={'primary'} mb={6}>
								LAC morbide
							</Text>
							<Text textStyle={'lg'} fontWeight={400} color={'gray.600'}>
								Proponiamo l&apos;applicazione di lenti a contatto morbide, sia su misura che
								standard, per garantire il massimo comfort e una visione nitida. Queste lenti sono
								ideali per chi cerca una soluzione confortevole e facile da utilizzare nella vita
								quotidiana.
							</Text>
						</Box>
					</Box>
					<Box
						w={{ base: '100%', lg: '60%' }}
						mx={'auto'}
						display={{ base: 'flex', lg: 'grid' }}
						flexDirection={{ base: 'column-reverse', lg: 'unset' }}
						gridTemplateColumns={'1fr 1fr'}
						alignItems={'center'}
						gap={12}
					>
						<Box textAlign={{ base: 'left', lg: 'right' }}>
							<Text textStyle={'3xl'} fontWeight={600} color={'primary'} mb={6}>
								LAC RGP
							</Text>
							<Text textStyle={'lg'} fontWeight={400} color={'gray.600'}>
								Siamo specializzati nell&apos;applicazione di lenti a contatto rigide gas permeabili
								(RGP) su misura progettate per adattarsi perfettamente alla superficie oculare e
								migliorare significativamente la qualità visiva, ideali per chi necessita di una
								correzione più stabile e duratura e Per chi presenta irregolarità corneali
							</Text>
						</Box>
						<Box bg={'gray.100'} borderRadius={16}>
							<Image src={lac_2_src} mixBlendMode={'multiply'} my={6} />
						</Box>
					</Box>
					<Box
						w={{ base: '100%', lg: '60%' }}
						mx={'auto'}
						display={{ base: 'flex', lg: 'grid' }}
						flexDirection={{ base: 'column', lg: 'unset' }}
						gridTemplateColumns={'1fr 1fr'}
						alignItems={'center'}
						gap={12}
					>
						<Box bg={'gray.100'} borderRadius={16}>
							<Image src={orto_src} borderRadius={16} />
						</Box>
						<Box>
							<Text textStyle={'3xl'} fontWeight={600} color={'primary'} mb={6}>
								ORTOCHERATOLOGIA
							</Text>
							<Text textStyle={'lg'} fontWeight={400} color={'gray.600'}>
								Pratica contattologia, attraverso la quale si può correggere in maniera reversibile
								difetti visivi di bassa-media entità. Utilizzando una L.A.C. rigida durante la
								notte, è possibile modificare il profilo corneale al fine di poter stare senza
								occhiali durante il giorno avendo la massima acutezza visiva possibile.
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
			<Separator />
			<Box py={16} px={6}>
				<Box textAlign={'center'} pb={16}>
					<Text textStyle={{ base: '2xl', lg: '3xl' }} fontWeight={600} color={'primary'} mb={6}>
						Misurazioni strumentali
					</Text>
					<Text
						textStyle={{ base: 'lg', lg: 'xl' }}
						fontWeight={400}
						color={'gray.600'}
						w={{ base: '100%', lg: '60%' }}
						mx={'auto'}
					>
						Utilizziamo tecnologie avanzate per effettuare misurazioni strumentali precise e
						affidabili, con possibilità di telerefertazione oculistica.
					</Text>
				</Box>

				<Box
					w={{ base: '100%', lg: '70%' }}
					mx={'auto'}
					gapX={24}
					gapY={12}
					textAlign={'center'}
					display={{ base: 'flex', lg: 'grid' }}
					gridTemplateColumns={'1fr 1fr'}
					flexWrap={'wrap'}
				>
					<Box>
						<Stack gap={4}>
							<Text textStyle={'xl'} fontWeight={600} color={'primary'}>
								Topografia Pachimetrica
							</Text>
							<Image src={pachimetria} w="100%" h="300px" borderRadius={6} />
							<Text textStyle={'lg'} fontWeight={400} color={'gray.600'}>
								Esame non invasivo, attraverso il quale è possibile ottenere una mappa della
								curvatura dello spessore corneale, assicurandosi della corretta morfologia.
							</Text>
						</Stack>
					</Box>
					<Box>
						<Stack gap={4}>
							<Text textStyle={'xl'} fontWeight={600} color={'primary'}>
								Analisi dell&apos;opacità
							</Text>
							<Image src={opacity} w="100%" h="300px" borderRadius={6} />
							<Text textStyle={'lg'} fontWeight={400} color={'gray.600'}>
								Rilevazione ripetibile e confrontabile tramite retro illuminazione della trasparenza
								del cristallino.
							</Text>
						</Stack>
					</Box>
					<Box>
						<Stack gap={4}>
							<Text textStyle={'xl'} fontWeight={600} color={'primary'}>
								Tonometria a soffio
							</Text>
							<Image
								src={vx120}
								bg={'#e5e5e5'}
								objectFit="contain"
								w="100%"
								h="300px"
								borderRadius={6}
							/>
							<Text textStyle={'lg'} fontWeight={400} color={'gray.600'}>
								Metodo non invasivo per stimare la pressione intraoculare (IOP) anche in relazione
								con i dati della pachimetria.
							</Text>
						</Stack>
					</Box>
					<Box>
						<Stack gap={4}>
							<Text textStyle={'xl'} fontWeight={600} color={'primary'}>
								Indagine lacrimale
							</Text>
							<Image src={lacrimale} w="100%" h="300px" borderRadius={6} />
							<Text textStyle={'lg'} fontWeight={400} color={'gray.600'}>
								L&apos;indagine lacrimale valuta quantità e qualità del film lacrimale, aiuta a
								evidenziare problemi di secchezza oculare e a garantire il comfort visivo.
							</Text>
						</Stack>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default Servizi
