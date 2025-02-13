import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteRuntimeErrorOverlayPlugin } from '@hiogawa/vite-runtime-error-overlay'

export default defineConfig({
	plugins: [react({}), viteRuntimeErrorOverlayPlugin()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./src/setupTests.js'],
	},
})
