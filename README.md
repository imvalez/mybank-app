# 🏦 MyBank - Web Application

**Candidato:** Valerio  
**Progetto:** Home Banking App (Esame Pratico)

Questa è una web application di Home Banking moderna, sviluppata con **React** (Frontend) e **Node.js/Express** (Backend), progettata per simulare le operazioni bancarie essenziali in un ambiente realistico.

---

## 🚀 Funzionalità Principali

### 🏠 Homepage (Dashboard)

- **Saldo in Tempo Reale**: Visualizzazione del saldo attuale con formattazione valuta italiana (€ 1.200,50).
- **Privacy Mode**: Pulsante "Occhio" (👁️/🔒) per oscurare il saldo quando sei in pubblico.
- **IBAN Rapido**: Pulsante per copiare l'IBAN negli appunti con un click.
- **Carte Interattive**: Animazione "Flip" 3D cliccando sulle carte di credito (mostra il CVC).
- **Grafico Spese**: Barra visuale che mostra il rapporto entrate/uscite del mese.
- **Saluto Intelligente**: "Buongiorno/Buonasera" in base all'orario dell'utente.

### 💸 Movimenti

- **Lista Completa**: Elenco di tutte le transazioni con date e descrizioni.
- **Filtri Avanzati**: Possibilità di filtrare per Entrate/Uscite.
- **Ricerca Rapida**: Barra di ricerca per trovare movimenti specifici (es. "Amazon").
- **Export Dati**: Pulsante per scaricare la lista movimenti in formato **CSV** compatibile con Excel.
- **Badge "Nuovo"**: Evidenzia automaticamente i movimenti odierni.

### 💸 Bonifico

- **Form Completo**: Validazione dei campi (IBAN, Importo, Beneficiario).
- **Feedback Immediato**: Notifiche "Toast" eleganti alla conferma.
- **Aggiornamento Real-time**: Il saldo e la lista movimenti si aggiornano subito dopo l'operazione.

### ⚙️ Altre "Chicche" Tecniche

- **Dark Mode**: Supporto completo al tema scuro/chiaro persistente.
- **Multilingua (IT/EN)**: Traduzione completa dell'interfaccia, salvata nelle preferenze utente.
- **Backend Reale**: API REST funzionanti che leggono/scrivono su un file JSON simulando un database.

---

## 🛠️ Stack Tecnologico

- **Frontend**: React 18, Vite, CSS moderno (CSS Variables, Flexbox, Animations).
- **Backend**: Node.js, Express.
- **Database**: JSON File System (persistenza dati su file).

---

## 📦 Installazione e Avvio

Il progetto è diviso in due parti che devono girare contemporaneamente.

### 1. Avviare il Backend (Server)

Apri un terminale nella cartella del progetto:

```bash
cd backend
npm install  # (se è la prima volta)
node server.js
```

Il server partirà su `http://localhost:3000`.

### 2. Avviare il Frontend (Client)

Apri un **secondo terminale** nella cartella principale del progetto:

```bash
npm install  # (se è la prima volta)
npm run dev
```

Il sito sarà accessibile su `http://localhost:5173`.

---

## 📝 Note per la Correzione

- I dati sono salvati nel file `backend/db.json`. Se vuoi resettare tutto, basta rimettere il saldo iniziale e cancellare i movimenti in quel file.
- L'app è ottimizzata anche per la **stampa** (CSS print-media): provando a stampare la pagina movimenti, otterrai un report pulito senza menu di navigazione.

---

_Progetto realizzato con ❤️ e tanto codice._
