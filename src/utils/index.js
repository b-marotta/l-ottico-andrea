export const importBrandsImages = async (r) => {
	const context = await import.meta.glob('../assets/brands_logo/*.{png,jpg,jpeg,webp,svg}')
	const images = {}

	for (const path in context) {
		const module = await context[path]()
		images[path.replace(r, '')] = module.default
	}

	return images
}

export const importLacImages = async (r) => {
	const context = await import.meta.glob('../assets/brands_logo/lac/*.{png,jpg,jpeg,webp,svg}')
	const images = {}

	for (const path in context) {
		const module = await context[path]()
		images[path.replace(r, '')] = module.default
	}

	return images
}

export const importLentiImages = async (r) => {
	const context = await import.meta.glob('../assets/brands_logo/lenti/*.{png,jpg,jpeg,webp,svg}')
	const images = {}

	for (const path in context) {
		const module = await context[path]()
		const name = path.replace(r, '').split('/').at(-1).split('.')[0]
		images[path.replace(r, '')] = { name: name, item: module.default }
	}

	return images
}

export const capitalizeFirstLetter = (val) => {
	return String(val).charAt(0).toUpperCase() + String(val).slice(1)
}
