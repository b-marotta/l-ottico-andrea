# L'Ottico Andrea

> **Dal 2005 il tuo ottico di fiducia**

Sito web ufficiale per L'Ottico Andrea di Gianettoni Andrea, specializzato in servizi ottici di alta qualità e esami strumentali avanzati per il benessere visivo.

## 📋 Caratteristiche

- **Design responsive** ottimizzato per tutti i dispositivi
- **Interfaccia moderna** con tema scuro/chiaro
- **Carousel interattivo** dei brand partner
- **Sistema di prenotazione** integrato
- **Sezioni dedicate** per servizi e prodotti
- **Cookie banner** conforme GDPR
- **WhatsApp integration** per contatti rapidi
- **SEO ottimizzato** con meta tags e sitemap

## 🏗️ Tecnologie Utilizzate

### Frontend

- **React 18** - Libreria UI moderna
- **Vite** - Build tool veloce e moderno
- **Chakra UI 3.8** - Sistema di design component
- **React Router DOM 7** - Navigazione SPA
- **Swiper** - Carousel touch-friendly
- **React Icons** - Libreria icone
- **React Helmet** - Gestione meta tags

### Sviluppo & Deploy

- **ESLint** - Linting del codice
- **Prettier** - Formattazione automatica
- **Husky** - Git hooks
- **Vercel** - Piattaforma di deploy

## 📁 Struttura del Progetto

```
src/
├── components/          # Componenti riutilizzabili
│   ├── header/         # Intestazione del sito
│   ├── footer/         # Piè di pagina
│   ├── brands-carousel/ # Carousel dei brand
│   ├── whatsapp/       # Widget WhatsApp
│   ├── cookie-banner/  # Banner cookies
│   └── ui/             # Componenti UI base
├── pages/              # Pagine principali
│   ├── home.jsx        # Homepage
│   ├── chi-siamo.jsx   # Chi siamo
│   ├── servizi.jsx     # Servizi offerti
│   ├── prodotti.jsx    # Prodotti disponibili
│   └── privacy-policy.jsx # Privacy policy
├── theme/              # Tema e stili
├── assets/             # Immagini e media
│   ├── logos/          # Loghi aziendali
│   ├── brands_logo/    # Loghi brand partner
│   ├── photos/         # Foto del negozio
│   └── other/          # Altri asset
└── utils/              # Utilità e configurazioni
```

## 🚀 Installazione e Sviluppo

### Prerequisiti

- Node.js (versione 16 o superiore)
- npm o yarn

### Setup locale

```bash
# Clona il repository
git clone https://github.com/b-marotta/l-ottico-andrea.git

# Entra nella directory
cd l-ottico-andrea

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

Il sito sarà disponibile su `http://localhost:3000`

### Script disponibili

```bash
# Sviluppo
npm run dev          # Avvia server di sviluppo
npm run start        # Alias per dev

# Build e deploy
npm run build        # Crea build di produzione
npm run serve        # Anteprima build locale

# Code quality
npm run lint         # Esegue ESLint
npm run format       # Formatta codice con Prettier
npm run test         # Esegue test con Vitest
```

## 🎨 Sezioni del Sito

### Homepage

- Hero section con immagine principale
- Presentazione servizi principali
- Carousel brand partner (Armani, Ray-Ban, Dolce & Gabbana, etc.)
- Call-to-action per prenotazioni

### Chi Siamo

- Storia dell'attività (dal 2005)
- Presentazione del team
- Valori e mission aziendale

### Servizi

- **Esami della vista**: Controlli completi e specialistici
- **Esami strumentali**: Tecnologie avanzate per diagnosi
- **Lenti a contatto**: Applicazione e controllo
- **Consulenza personalizzata**: Selezione montature e lenti

### Prodotti

- **Occhiali da vista**: Collezioni delle migliori marche
- **Occhiali da sole**: Protezione e stile
- **Lenti**: Tecnologie progressive e specialistiche
- **Accessori**: Custodie, detergenti, ricambi

## 📱 Brand Partner

Il sito presenta i principali brand partner:

- **Montature**: Armani, Ray-Ban, Dolce & Gabbana, Vogue, Michael Kors, Giorgio Nannini
- **Lenti**: Synchrony, Optodinamica
- **Lenti a contatto**: Alcon, Bausch + Lomb, Cooper Vision, Johnson & Johnson

## 🔧 Configurazione

### Variabili d'ambiente

Le configurazioni principali si trovano in `src/utils/global.variables.js`:

```javascript
export const SITE_NAME = "L'Ottico Andrea"
export const SITE_TITLE = "L'Ottico Andrea di Gianettoni Andrea - Dal 2005 il tuo ottico di fiducia"
export const SITE_DESCRIPTION = 'Offriamo esami strumentali avanzati e servizi ottici...'
export const CALENDAR_LINK = 'http://calendar.app.google/WGGZBBdqh3QfQBZv5'
```

### Vercel Deploy

Il progetto è configurato per il deploy automatico su Vercel con `vercel.json` per la gestione delle route SPA.

## 📄 License

Questo progetto è proprietario de L'Ottico Andrea di Gianettoni Andrea.

---

**Sviluppato con ❤️ per L'Ottico Andrea - Dal 2005 il tuo ottico di fiducia**
