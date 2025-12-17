// Qui gestisco tutte le chiamate verso il backend (localhost:3000)
const BASE_URL = "http://localhost:3000/api";

export const api = {
  getUtente: async () => {
    const response = await fetch(`${BASE_URL}/utente`);
    return response.json();
  },

  getMovimenti: async () => {
    const response = await fetch(`${BASE_URL}/movimenti`);
    return response.json();
  },

  effettuaBonifico: async (nuovoMovimento) => {
    const response = await fetch(`${BASE_URL}/bonifico`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuovoMovimento)
    });
    return response.json();
  }
};
