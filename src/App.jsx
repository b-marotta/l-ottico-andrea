import React from 'react'
import './App.css'
import Header from './components/header'
import { Helmet } from 'react-helmet'
import { SITE_DESCRIPTION, SITE_NAME } from './utils/global.variables'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from './utils/routes'
import BottomRightOverlay from './components/bottom-right-overlay'
import Footer from './components/footer'
import CookieBanner from './components/cookie-banner'
import { Box } from '@chakra-ui/react'

const App = () => {
	return (
		<Router>
			<div className="App">
				<Helmet>
					<title>{SITE_NAME}</title>
					<meta name="description" content={SITE_DESCRIPTION} />
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
