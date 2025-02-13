import React from 'react'
import './App.css'
import Header from './components/header'
import { Helmet } from 'react-helmet'
import { SITE_DESCRIPTION, SITE_NAME } from './utils/global.variables'

const App = () => {
	return (
		<div className="App">
			<Helmet>
				<title>{SITE_NAME + ' - ' + SITE_DESCRIPTION}</title>
			</Helmet>
			<Header />
		</div>
	)
}

export default App
