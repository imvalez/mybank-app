// Backend semplice con Express
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DB_FILE = path.join(__dirname, 'db.json');

// Middleware
// Middleware (CORS per far parlare React con Node)
app.use(cors()); 
app.use(bodyParser.json());

// Funzione helper per leggere il database
// Leggo il file JSON come s fosse un DB
const leggiDb = () => {
  const data = fs.readFileSync(DB_FILE, 'utf8');
  return JSON.parse(data);
};

// Salvo le modifiche su file
const scriviDb = (data) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

// API: Prendi dati utente
// Restituisco i dati dell'utente (saldo, iban)
app.get('/api/utente', (req, res) => {
  const db = leggiDb();
  res.json(db.utente);
});

// API: Prendi lista movimenti
// Restituisco tutti i movimenti
app.get('/api/movimenti', (req, res) => {
  const db = leggiDb();
  res.json(db.movimenti);
});

// Gestisco un nuovo bonifico
app.post('/api/bonifico', (req, res) => {
  const nuovoMovimento = req.body;
  
  if (!nuovoMovimento.importo || !nuovoMovimento.descrizione) {
    return res.status(400).json({ error: "Dati mancanti" });
  }

  const db = leggiDb();

  // Aggiungo movimento in cima
  db.movimenti.unshift(nuovoMovimento);

  // Aggiorno saldo
  db.utente.saldo += nuovoMovimento.importo;

  scriviDb(db);

  console.log(`Bonifico fatto: ${nuovoMovimento.descrizione} (${nuovoMovimento.importo}€)`);
  res.json({ success: true, nuovoSaldo: db.utente.saldo });
});

app.listen(PORT, () => {
  console.log(`Server Backend attivo su http://localhost:${PORT}`);
});
