/* eslint-disable react/no-unescaped-entities */
import { Text, Stack } from '@chakra-ui/react'
import React from 'react'

const PrivacyPolicy = () => {
	return (
		<Stack textAlign={'left'} p={8} gap={4}>
			<Text>Informativa sulla Privacy di L'Ottico Andrea SRL</Text>
			<Text>
				1. Informazioni di Contatto Nome Legale: L'Ottico Andrea SRL Indirizzo: Via Federico de
				Roberto, 20157 Milano Email: otticoandrea@hotmail.it Telefono: 333333333
			</Text>
			<Text>
				2. Dati Raccolti Attualmente, non raccogliamo dati personali attraverso il nostro sito web.
			</Text>
			<Text>
				3. Utilizzo dei Cookie Il nostro sito utilizza cookie tecnici necessari per il funzionamento
				base. In particolare, utilizziamo: Google Maps: Per mostrare la posizione del nostro
				negozio. Google Fonts: Per migliorare la leggibilità del sito. Questi cookie sono essenziali
				per garantire il corretto funzionamento del sito e non richiedono il consenso esplicito
				degli utenti.
			</Text>
			<Text>
				4. Finalità del Trattamento I cookie tecnici vengono utilizzati esclusivamente per
				migliorare l'esperienza utente sul nostro sito.
			</Text>
			<Text>
				5. Condivisione dei Dati Non condividiamo dati personali con terze parti, fatta eccezione
				per i servizi di Google Maps e Google Fonts, che potrebbero raccogliere dati per il loro
				funzionamento.
			</Text>
			<Text>6. Conservazione dei Dati Non conserviamo dati personali degli utenti. </Text>
			<Text>
				7. Diritti degli Utenti Gli utenti possono gestire i cookie tecnici attraverso le
				impostazioni del loro browser, ma ciò potrebbe compromettere il funzionamento del sito. 8.
				Sicurezza Adottiamo misure tecniche e organizzative per garantire la sicurezza dei dati
				trattati.
			</Text>
		</Stack>
	)
}

export default PrivacyPolicy
