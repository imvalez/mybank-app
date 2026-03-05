const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const DB_FILE = path.join(__dirname, 'db.json');

app.use(cors());
app.use(bodyParser.json());

const leggiDb = () => {
  const data = fs.readFileSync(DB_FILE, 'utf8');
  return JSON.parse(data);
};

const scriviDb = (data) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/utente', (req, res) => {
  const db = leggiDb();
  res.json(db.utente);
});

app.get('/api/movimenti', (req, res) => {
  const db = leggiDb();
  res.json(db.movimenti);
});

app.post('/api/bonifico', (req, res) => {
  const nuovoMovimento = req.body || {};
  const importo = Number(nuovoMovimento.importo);
  const descrizione = (nuovoMovimento.descrizione || '').trim();

  if (!descrizione || Number.isNaN(importo) || importo === 0) {
    return res.status(400).json({ error: 'Dati bonifico non validi' });
  }

  const db = leggiDb();
  const movimentoSalvato = {
    id: Number(nuovoMovimento.id) || Date.now(),
    data: nuovoMovimento.data || new Date().toISOString().split('T')[0],
    descrizione,
    importo,
    tipo: importo > 0 ? 'entrata' : 'uscita',
  };

  db.movimenti.unshift(movimentoSalvato);
  db.utente.saldo += importo;

  scriviDb(db);

  res.json({
    success: true,
    nuovoSaldo: db.utente.saldo,
    movimento: movimentoSalvato,
  });
});

app.listen(PORT, () => {
  console.log(`MyBank API in ascolto su http://localhost:${PORT}`);
});
