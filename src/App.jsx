import React from 'react'
import './App.css'
import Header from './components/header'
import { Helmet } from 'react-helmet'
import { SITE_DESCRIPTION, SITE_NAME } from './utils/global.variables'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from './utils/routes'
import BottomRightOverlay from './components/bottom-right-overlay'
import Footer from './components/footer'

const App = () => {
	return (
		<Router>
			<div className="App">
				<Helmet>
					<title>{SITE_NAME}</title>
					<meta name="description" content={SITE_DESCRIPTION} />
					<link rel="preconnect" href="https://fonts.googleapis.com" />{' '}
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
						rel="stylesheet"
					/>
					{/* Iubenda */}
					<script type="text/javascript">{`(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);`}</script>
					<script type="text/javascript">{`var _iub = _iub || [];_iub.csConfiguration = {"siteId":3941407,"cookiePolicyId":50721496,"lang":"it","storage":{"useSiteId":true}};`}</script>
					<script
						type="text/javascript"
						src="https://cs.iubenda.com/autoblocking/3941407.js"
					></script>
					<script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" async></script>
				</Helmet>
				<BottomRightOverlay />
				<Header />
				<Routes>
					{routes.map((route, index) => {
						const key = Object.keys(route)[0]
						return <Route key={index} path={route[key].path} element={route[key].component} />
					})}
				</Routes>
				<Footer />
			</div>
		</Router>
	)
}

export default App
