import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import { viteRuntimeErrorOverlayPlugin } from '@hiogawa/vite-runtime-error-overlay'

export default defineConfig({
	plugins: [react({}), viteRuntimeErrorOverlayPlugin(), splitVendorChunkPlugin()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./src/setupTests.js'],
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					// Chunk personalizzati per il tuo codice
					if (id.includes('/components/ui/')) {
						return 'ui-components'
					}
					if (id.includes('/pages/')) {
						return 'pages'
					}
				},
			},
		},
	},
})
