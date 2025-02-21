'use client'

import React from 'react'
import { createIcon } from '@chakra-ui/react'

const HeartIcon = createIcon({
	displayName: 'HeartIcon',
	path: (
		<>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path
				fill="currentColor"
				d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
			/>
		</>
	),
})

const HamburgerIcon = createIcon({
	displayName: 'HamburgerIcon',
	path: (
		<>
			<path
				fill="currentColor"
				d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"
			/>
		</>
	),
})

const ArrowUp = createIcon({
	displayName: 'ArrowUp',
	path: (
		<>
			<path
				fill="currentColor"
				d="M12 20L12 4M12 4L18 10M12 4L6 10"
				stroke="black"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</>
	),
})

const iconMap = {
	heart: HeartIcon,
	hamburger: HamburgerIcon,
	ArrowUp: ArrowUp,
}

export const Icon = ({ name, size, color }) => {
	const IconComponent = iconMap[name]

	if (!IconComponent) {
		return null
	}

	return (
		<IconComponent
			viewBox="0 0 50 50"
			width={`${size ? size : 24}px`}
			color={`${color ? color : 'black'}`}
		/>
	)
}
