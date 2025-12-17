<div align="center">

# 🏦 MyBank - Home Banking Experience

**L'esperienza bancaria moderna, ripensata per il web.**

[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![Language](https://img.shields.io/badge/Lang-IT%20%7C%20EN-blue?style=for-the-badge)](/)

</div>

---

## 📋 Highlights del Progetto

Benvenuto in **MyBank**, una web application di Home Banking di nuova generazione. Questo progetto non è solo una simulazione, ma un'esplorazione approfondita di pattern UI/UX moderni, gestione dello stato complessa e interazioni realistiche tra Client e Server.

> **Obiettivo**: Creare un'interfaccia utente che sia funzionale quanto bella da vedere, con un backend robusto che gestisce transazioni reali simulando un database bancario.

---

## ✨ Funzionalità "Wow"

### 🛡️ Dashboard & Sicurezza

- **Privacy Mode 2.0**: Un sistema intelligente che oscura i dati sensibili (saldo, importi) con un click sull'icona 👁️/🔒, ideale per l'uso in luoghi pubblici.
- **Dynamic Greetings**: Il sistema ti accoglie con "Buongiorno" o "Buonasera" basandosi sull'ora locale del tuo dispositivo.
- **Smart Cards**: Le carte di credito non sono immagini statiche! Cliccale per vedere un'animazione **3D Flip** che rivela il codice CVC sicuro sul retro.

### 💰 Gestione Finanziaria

- **Bonifici Real-time**: Invia denaro e vedi il tuo saldo aggiornarsi istantaneamente senza ricaricare la pagina. Feedback aptico visivo tramite notifiche Toast eleganti.
- **Analisi Spese**: Un grafico intuitivo che confronta visivamente Entrate vs Uscite del mese corrente.
- **Storico Movimenti**:
  - 🔍 **Ricerca Istantanea**: Filtra transazioni per nome o causale mentre digiti.
  - 📂 **Export CSV**: Scarica un report professionale delle tue spese compatibile con Excel/Numbers.
  - 🆕 **New Badge**: Indicatori visivi per le transazioni avvenute nelle ultime 24 ore.

### ⚙️ Eccellenza Tecnica

- **Dark/Light Mode**: Un tema scuro profondo e riposante per la sera, e un tema chiaro nitido per il giorno. La preferenza viene salvata automaticamente.
- **Internationalization (i18n)**: Supporto nativo completo per Italiano 🇮🇹 e Inglese 🇬🇧.
- **Backend File-System**: Un'implementazione intelligente di un database JSON che garantisce la persistenza dei dati tra i riavvii del server.

---

## 🛠️ Stack Tecnologico

### Frontend (Client)

Il cuore pulsante dell'applicazione, costruito per essere veloce e reattivo.

- **Core**: React 18
- **Build Tool**: Vite (per un'esperienza di sviluppo fulminea)
- **Styling**: Modern CSS3 (Variables, Flexbox/Grid, Keyframe Animations)
- **Icons**: Phosphor Icons / FontAwesome

### Backend (Server)

Il cervello che gestisce la logica di business.

- **Runtime**: Node.js
- **Framework**: Express
- **Data Layer**: File-system JSON Database (CRUD operations complete)

---

## 🚀 Guida Rapida all'Avvio

Il progetto è strutturato come un monorepo logico. Segui questi passi per avviare l'intera suite.

### Prerequisiti

Assicurati di avere [Node.js](https://nodejs.org/) installato sul tuo sistema.

### 1️⃣ Avvio del Backend (Server API)

Apri il tuo terminale e naviga nella cartella `backend`:

```bash
cd backend
npm install
node server.js
```

> Il server sarà attivo su: `http://localhost:3000`

### 2️⃣ Avvio del Frontend (Web App)

Apri un **nuovo** terminale nella cartella principale (root) del progetto:

```bash
npm install
npm run dev
```

> L'app sarà accessibile su: `http://localhost:5173`

---

<div align="center">

## 📸 Anteprime

_(Qui potresti inserire degli screenshot della tua applicazione funzionante)_

---

### 👨‍💻 Autore

**Valerio**  
_Sviluppatore Full Stack Creativo_

Progetto realizzato per l'esame pratico di Home Banking.  
_Made with ❤️, ☕ and a lot of `console.log`_

</div>
