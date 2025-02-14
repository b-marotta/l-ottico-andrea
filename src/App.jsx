import React from 'react'
import './App.css'
import Header from './components/header'
import { Helmet } from 'react-helmet'
import { SITE_DESCRIPTION, SITE_NAME } from './utils/global.variables'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home'
import Servizi from './pages/servizi'
import Prodotti from './pages/prodotti'

const App = () => {
	return (
		<Router>
			<div className="App">
				<Helmet>
					<title>{SITE_NAME}</title>
					<meta name="description" content={SITE_DESCRIPTION} />

					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
						rel="stylesheet"
					/>
				</Helmet>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/servizi" element={<Servizi />} />
					<Route path="/prodotti" element={<Prodotti />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
