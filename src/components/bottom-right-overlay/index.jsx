import { Box } from '@chakra-ui/react'
import React from 'react'
import WhatsAppButton from '../whatsapp'
import ScrollToTop from '../scroll-to-top'

const BottomRightOverlay = () => {
	return (
		<Box
			position={'fixed'}
			bottom={0}
			right={0}
			zIndex={1000}
			pointerEvents={'none'}
			display={'flex'}
			flexDir={'column'}
			gap={4}
			alignItems="flex-end"
			padding={'20px'}
		>
			<WhatsAppButton />
			<ScrollToTop />
		</Box>
	)
}

export default BottomRightOverlay
