import React from 'react'
import Prodotti from '../pages/prodotti'
import Servizi from '../pages/servizi'
import ChiSiamo from '../pages/chi-siamo'
import Home from '../pages/home'
import { Navigate } from 'react-router-dom'

export default [
	{
		home: {
			path: '',
			component: <Home />,
			title: 'Home',
		},
	},
	{
		chiSiamo: {
			path: '/chi-siamo',
			component: <ChiSiamo />,
			title: 'Chi Siamo',
		},
	},
	{
		servizi: {
			path: '/servizi',
			component: <Servizi />,
			title: 'Servizi',
		},
	},
	{
		prodotti: {
			path: '/prodotti',
			component: <Prodotti />,
			title: 'Prodotti',
		},
	},
	{
		404: {
			path: '*', // 404
			component: <Navigate to={'/'} />,
			hidden: true,
		},
	},
]
