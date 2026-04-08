/* eslint-disable react/no-unescaped-entities */
import { Text, Stack } from '@chakra-ui/react'
import React from 'react'

const PrivacyPolicy = () => {
	return (
		<Stack textAlign={'left'} p={8} gap={4}>
			<Text>Informativa sulla Privacy di L'Ottico Andrea SRL</Text>
			<Text>
				1. Informazioni di Contatto Nome Legale: L'Ottico Andrea di GIANETTONI ANDREA Indirizzo: Via
				Maria Melato, 8/10, 20157 Milano Email: otticoandre@gmail.com Telefono: 0239005279
			</Text>
			<Text>
				2. Dati Raccolti Il sito non raccoglie direttamente dati personali identificativi tramite
				form, ma puo raccogliere dati statistici di navigazione attraverso Google Analytics,
				esclusivamente previo consenso dell'utente.
			</Text>
			<Text>
				3. Utilizzo dei Cookie Il nostro sito utilizza cookie tecnici necessari per il funzionamento
				base e, previo consenso, cookie/statistiche di terze parti. In particolare, utilizziamo:
				Google Maps per mostrare la posizione del nostro negozio, Google Fonts per migliorare la
				leggibilita del sito e Google Analytics 4 per raccogliere statistiche aggregate sulle visite
				alle pagine. I cookie tecnici sono essenziali per il corretto funzionamento del sito, mentre
				Google Analytics viene attivato solo dopo accettazione del banner.
			</Text>
			<Text>
				4. Finalita del Trattamento I cookie tecnici vengono utilizzati per il funzionamento del
				sito, mentre Google Analytics viene utilizzato per misurare traffico, pagine visitate e
				interazioni aggregate al fine di migliorare i contenuti e l'esperienza utente.
			</Text>
			<Text>
				5. Condivisione dei Dati Non condividiamo dati personali con terze parti, fatta eccezione
				per i servizi di Google Maps, Google Fonts e Google Analytics, che potrebbero trattare dati
				tecnici necessari al loro funzionamento secondo le rispettive informative.
			</Text>
			<Text>6. Conservazione dei Dati Non conserviamo dati personali degli utenti. </Text>
			<Text>
				7. Diritti degli Utenti Gli utenti possono modificare le preferenze sui cookie attraverso il
				proprio browser e negare i cookie statistici dal banner. 8. Sicurezza Adottiamo misure
				tecniche e organizzative per garantire la sicurezza dei dati trattati.
			</Text>
		</Stack>
	)
}

export default PrivacyPolicy
