import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import bg_src from '../../assets/shapes/glasses.jpg'
import styles from './style'

const Occhiali = () => {
	return (
		<Box
			{...styles.main}
			style={{
				animation: 'translate-eyewear 30s linear infinite',
			}}
		>
			<style>
				{`
				@keyframes translate-eyewear {
					from { transform: rotate(15deg) translate(0%, 0); }
					from { transform: rotate(15deg) translate(-100%, 0); }
				}
				`}
			</style>
			{Array.from({ length: 10 }, (_, i) => (
				<Image key={i} src={bg_src} {...styles.images} />
			))}
		</Box>
	)
}

export default Occhiali
