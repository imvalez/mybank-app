# Documentazione Progetto - Home Banking

## 1. Tecnologie Utilizzate

Per la realizzazione di questa webapp ho scelto uno stack moderno basato su **JavaScript** sia per il front-end che per il back-end (Node.js).

### Front-end

- **React (con Vite)**: Ho scelto React perché permette di creare interfacce utente modulari e reattive. L'uso dei componenti (Navbar, Card dei movimenti, Form bonifico) rende il codice pulito e riutilizzabile. Vite è stato utilizzato per la sua velocità di avvio e build.
- **React Router**: Fondamentale per gestire la navigazione tra le tre pagine (Home, Movimenti, Bonifico) senza ricaricare la pagina (SPA - Single Page Application).
- **CSS Avanzato**: Ho implementato un design system basato su variabili CSS per gestire facilmente il **Dark Mode** e la stampa. Ho incluso animazioni CSS (Toast, Flip Card) per migliorare l'esperienza utente.

### Back-end

- **Node.js + Express**: Ho creato un semplice server per gestire le API. Questo simula un vero ambiente di produzione.
- **File System (JSON)**: Al posto di un database complesso (come SQL), ho utilizzato un file `db.json`. È una soluzione semplice ma efficace per questo tipo di progetto scolastico, permettendo la persistenza dei dati.

### Vantaggi e Svantaggi

- **Vantaggi**: Architettura coerente (tutto JS), separazione chiara tra dati e interfaccia, facile da estendere, ottima UX grazie alle notifiche e alla reattività.
- **Svantaggi**: L'uso di un file JSON come database non supporta accessi concorrenti ad alto volume, ma è perfetto per un utente singolo.

---

## 2. Funzionalità Avanzate Implementate ("Chicche")

Oltre alle funzionalità base richieste, ho arricchito il progetto con diverse feature per migliorare l'usabilità:

1.  **Multi-lingua (IT/EN)**: Tutto il testo è gestito tramite un file di dizionario. La scelta viene salvata nel `localStorage`.
2.  **Privacy & Sicurezza**:
    - **Privacy Mode**: Possibilità di nascondere il saldo.
    - **Download Sicuro**: Export dei movimenti in CSV con gestione corretta dei caratteri speciali (UTF-8 BOM).
3.  **Feedback Utente**:
    - **Toast Notifications**: Messaggi non intrusivi al posto dei vecchi `alert`.
    - **Feedback Visivo**: Grafici a barre per le spese e badge "NUOVO" sui movimenti recenti.
4.  **Accessibilità & Design**:
    - **Stampa CSS**: Stili dedicati per stampare pulito (senza navbar).
    - **Dark Mode**: Tema scuro completo per ridurre l'affaticamento visivo.

---

## 3. Gestione dei Dati

La gestione dei dati avviene tramite una comunicazione client-server via API REST.

### Caricamento Dati

All'avvio dell'applicazione (`App.jsx`), viene eseguito un `useEffect` che chiama le API del backend:

- `GET /api/utente`: Recupera saldo e IBAN.
- `GET /api/movimenti`: Recupera la lista completa delle transazioni.
  I dati ricevuti vengono salvati nello stato di React (`useState`) e passati come _props_ alle pagine (Home, Movimenti).

### Aggiornamento (Bonifici)

Quando l'utente effettua un bonifico:

1. I dati del form vengono inviati al server con una richiesta `POST /api/bonifico`.
2. Il server valida i dati, aggiorna il file `db.json` (aggiunge il movimento e scala il saldo) e restituisce il nuovo saldo.
3. Il front-end riceve la conferma e aggiorna immediatamente l'interfaccia (Aggiornamento Ottimistico) per dare un feedback istantaneo all'utente.

### API vs Dati Simulati

Inizialmente il progetto poteva usare dati fissi (mock), ma l'implementazione del backend in `server.js` permette di avere dati dinamici. Se riavvio la pagina, i bonifici fatti rimangono salvati, rendendo l'esperienza realistica.
