import React, { lazy, Suspense } from 'react'
import './App.css'
import Header from './components/header'
import { Helmet } from 'react-helmet'
import { SITE_DESCRIPTION, SITE_TITLE } from './utils/global.variables'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import BottomRightOverlay from './components/bottom-right-overlay'
import Footer from './components/footer'
import CookieBanner from './components/cookie-banner'
import { Box } from '@chakra-ui/react'
import main_image_src from './assets/photos/10.jpg'
// Replaced Next.js specific imports with framework-agnostic versions for Vite
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'

const Home = lazy(() => import('./pages/home'))
const ChiSiamo = lazy(() => import('./pages/chi-siamo'))
const Servizi = lazy(() => import('./pages/servizi'))
const Prodotti = lazy(() => import('./pages/prodotti'))
const PrivacyPolicy = lazy(() => import('./pages/privacy-policy'))
const App = () => {
	return (
		<Router>
			<div className="App">
				<Helmet>
					{/* Metadata Start */}
					<title>{SITE_TITLE}</title>
					<meta name="description" content={SITE_DESCRIPTION} />

					{/* Keywords */}
					<meta
						name="keywords"
						content="ottico, occhiali, lenti, lenti a contatto, lac, controllo vista, optometria, occhiali da vista, occhiali da sole"
					/>

					{/* Metadati Open Graph per social media */}
					<meta property="og:title" content={SITE_TITLE} />
					<meta property="og:description" content={SITE_DESCRIPTION} />
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://www.lotticoandrea.it" />
					<meta property="og:image" content={main_image_src} />

					{/* Canonical URL per evitare contenuto duplicato */}
					<link rel="canonical" href="https://www.lotticoandrea.it" />

					{/* Metadati per responsive design */}
					<meta name="viewport" content="width=device-width, initial-scale=1" />

					{/* Metadati locali con indirizzo specifico */}
					<meta name="geo.position" content="45.51633326126576, 9.142786892794556" />
					<meta name="ICBM" content="45.51633326126576, 9.142786892794556" />

					{/* Informazioni per i motori di ricerca locali */}
					<meta name="geo.region" content="IT" />
					<meta name="geo.placename" content="Milano" />
					{/* Metadata End */}

					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
						rel="stylesheet"
					/>
				</Helmet>
				<CookieBanner />
				<BottomRightOverlay />
				<SpeedInsights />
				<Analytics />
				<Header />
				<Box id="body" minH={'100vh'}>
					<Suspense>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/chi-siamo" element={<ChiSiamo />} />
							<Route path="/servizi" element={<Servizi />} />
							<Route path="/prodotti" element={<Prodotti />} />
							<Route path="/privacy-policy" element={<PrivacyPolicy />} />

							{/* 404 */}
							<Route path="*" element={<Navigate to={'/'} />} />
						</Routes>
					</Suspense>
				</Box>
				<Footer />
			</div>
		</Router>
	)
}

export default App
