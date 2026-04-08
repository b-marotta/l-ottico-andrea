export const GA_MEASUREMENT_ID = 'G-4C603W5VGR'
export const COOKIE_CONSENT_KEY = 'cookieConsent'
export const COOKIE_CONSENT_EVENT = 'cookie-consent-updated'

let analyticsInitialized = false

export const getCookieConsent = () => {
	if (typeof window === 'undefined') {
		return null
	}

	return window.localStorage.getItem(COOKIE_CONSENT_KEY)
}

export const setCookieConsent = (value) => {
	if (typeof window === 'undefined') {
		return
	}

	window.localStorage.setItem(COOKIE_CONSENT_KEY, value)
	window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT))
}

const injectAnalyticsScript = () => {
	if (document.querySelector(`script[src*="${GA_MEASUREMENT_ID}"]`)) {
		return
	}

	const script = document.createElement('script')
	script.async = true
	script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
	document.head.appendChild(script)
}

export const initAnalytics = () => {
	if (typeof window === 'undefined' || analyticsInitialized) {
		return
	}

	injectAnalyticsScript()

	window.dataLayer = window.dataLayer || []
	window.gtag = function gtag() {
		window.dataLayer.push(arguments)
	}

	window.gtag('js', new Date())
	window.gtag('config', GA_MEASUREMENT_ID, {
		send_page_view: false,
	})

	analyticsInitialized = true
}

export const trackPageView = ({ page_path, page_title, page_location }) => {
	if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
		return
	}

	window.gtag('config', GA_MEASUREMENT_ID, {
		page_path,
		page_title,
		page_location,
	})
}
