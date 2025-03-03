import { Box, Text, Separator, Image } from '@chakra-ui/react'
import React from 'react'
import image_src from '../assets/photos/02.jpg'
import styles from '../theme/pages/servizi'
import lac_src from '../assets/other/lac.jpg'
import lac_2_src from '../assets/other/lac_2.png'

const Servizi = () => {
	return (
		<Box>
			<Box>
				<Box position={'relative'} bgImage={`url(${image_src})`} {...styles.main_image}>
					<Box {...styles.overlayText}>
						<Text textStyle={'6xl'} fontWeight={600} color={'white'}>
							I NOSTRI SERVIZI
						</Text>
					</Box>
				</Box>
				<Box py={16} px={6}>
					<Box textAlign={'center'}>
						<Text textStyle={'3xl'} fontWeight={600} color={'primary'}>
							Analisi visiva optometrica
						</Text>
						<Text textStyle={'lg'} fontWeight={500} color={'gray.500'} mb={6}>
							Il cuore dei nostri servizi
						</Text>
						<Text textStyle={'xl'} fontWeight={500} color={'gray.600'} w={'60%'} mx={'auto'}>
							Un processo accurato che utilizza tecniche di rifrazione ottica per determinare con
							precisione le tue diottrie. Attraverso l&apos;uso di strumenti all&apos;avanguardia,
							identifichiamo le lenti ideali per migliorare la tua vista, offrendoti soluzioni su
							misura per soddisfare le tue esigenze.
						</Text>
					</Box>
				</Box>
				<Separator />
				<Box py={16} px={6}>
					<Box textAlign={'center'} pb={16}>
						<Text textStyle={'3xl'} fontWeight={600} color={'primary'} mb={6}>
							Applicazione lenti a contatto
						</Text>
						<Text textStyle={'xl'} fontWeight={500} color={'gray.600'} w={'60%'} mx={'auto'}>
							Nel nostro centro ottico, offriamo una vasta gamma di soluzioni per le lenti a
							contatto, adattate alle esigenze specifiche di ogni cliente.
						</Text>
					</Box>
					<Box
						w={'60%'}
						mx={'auto'}
						display={'grid'}
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
							<Text textStyle={'lg'} fontWeight={500} color={'gray.600'}>
								Proponiamo l&apos;applicazione di lenti a contatto morbide, sia su misura che
								standard, per garantire il massimo comfort e una visione nitida. Queste lenti sono
								ideali per chi cerca una soluzione confortevole e facile da utilizzare nella vita
								quotidiana.
							</Text>
						</Box>
						<Box textAlign={'right'}>
							<Text textStyle={'3xl'} fontWeight={600} color={'primary'} mb={6}>
								LAC RGP
							</Text>
							<Text textStyle={'lg'} fontWeight={500} color={'gray.600'}>
								Siamo specializzati nell&apos;applicazione di lenti a contatto rigide gas permeabili
								(RGP), ideali per chi necessita di una correzione visiva più stabile e duratura. Per
								chi presenta irregolarità corneali, offriamo lenti a contatto RGP su misura,
								progettate per adattarsi perfettamente alla superficie oculare e migliorare
								significativamente la qualità visiva.
							</Text>
						</Box>
						<Box bg={'gray.100'} borderRadius={16}>
							<Image src={lac_2_src} mixBlendMode={'multiply'} my={6} />
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default Servizi
