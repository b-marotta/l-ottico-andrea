export const importBrandsImages = async (r) => {
	const context = await import.meta.glob('../assets/brands_logo/*.{png,jpg,jpeg,svg}')
	const images = {}

	for (const path in context) {
		const module = await context[path]()
		images[path.replace(r, '')] = module.default
	}

	return images
}
