import React from 'react'
import './App.css'
import Header from './components/header'
import { Helmet } from 'react-helmet'
import { SITE_DESCRIPTION, SITE_TITLE } from './utils/global.variables'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from './utils/routes'
import BottomRightOverlay from './components/bottom-right-overlay'
import Footer from './components/footer'
import CookieBanner from './components/cookie-banner'
import { Box } from '@chakra-ui/react'
import main_image_src from './assets/photos/10.jpg'

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
				<Header />
				<Box id="body" minH={'100vh'}>
					<Routes>
						{routes.map((route, index) => {
							const key = Object.keys(route)[0]
							return <Route key={index} path={route[key].path} element={route[key].component} />
						})}
					</Routes>
				</Box>
				<Footer />
			</div>
		</Router>
	)
}

export default App
