import React from 'react'
import whatsapp_w_src from '../../assets/other/whatsapp_w.svg'
import { Link } from '@chakra-ui/react'

const WhatsAppButton = () => {
	return (
		<Link
			aria-label="Chat on WhatsApp"
			href="https://wa.me/393454652124"
			target="_blank"
			opacity={0.6}
			_hover={{ opacity: 1 }}
			pointerEvents={'auto'}
			style={{
				width: '44px',
				padding: '11px',
				borderRadius: '30px',
				zIndex: 100,
				transition: 'opacity 0.3s',
				background: '#23D366',
			}}
		>
			<img alt="Chat on WhatsApp" src={whatsapp_w_src} />
		</Link>
	)
}

export default WhatsAppButton
