const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

const parseResponse = async (response) => {
  if (!response.ok) {
    let message = `Request failed with status ${response.status}`;

    try {
      const errorPayload = await response.json();
      if (errorPayload?.error) {
        message = errorPayload.error;
      }
    } catch {
      // no-op: fallback to generic message
    }

    throw new Error(message);
  }

  return response.json();
};

export const api = {
  getUtente: async () => {
    const response = await fetch(`${BASE_URL}/utente`);
    return parseResponse(response);
  },

  getMovimenti: async () => {
    const response = await fetch(`${BASE_URL}/movimenti`);
    return parseResponse(response);
  },

  effettuaBonifico: async (nuovoMovimento) => {
    const response = await fetch(`${BASE_URL}/bonifico`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuovoMovimento)
    });
    return parseResponse(response);
  }
};
