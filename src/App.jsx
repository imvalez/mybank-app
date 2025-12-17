import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Toast } from './components/Toast';
import Home from './pages/Home';
import Movimenti from './pages/Movimenti';
import Bonifico from './pages/Bonifico';
import { api } from './services/api';
import { translations } from './data/translations';
import './styles.css';

function App() {
  const [saldo, setSaldo] = useState(0);
  const [movimenti, setMovimenti] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState(null); // Stato per il toast
  
  // Stato per il tema
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  
  // Stato per la lingua (default italiano)
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'it');

  // Recupera i testi nella lingua corrente
  const text = translations[lang];

  // Effetto per applicare il tema al body
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Effetto per salvare la lingua
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  const toggleLang = () => {
    setLang((curr) => (curr === 'it' ? 'en' : 'it'));
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000); // Nascondi dopo 3 secondi
  };

  // Effetto iniziale per caricare i dati dal server
  useEffect(() => {
    const caricaDati = async () => {
      try {
        const utente = await api.getUtente();
        const listaMovimenti = await api.getMovimenti();
        
        setSaldo(utente.saldo);
        setMovimenti(listaMovimenti);
      } catch (error) {
        console.error("Errore caricamento dati:", error);
      } finally {
        setLoading(false); // Fine caricamento
      }
    };

    caricaDati();
  }, []);

  const eseguiBonifico = async (nuovoMovimento) => {
    // Chiamata asincrona al backend
    await api.effettuaBonifico(nuovoMovimento);

    // Aggiornamento ottimistico dell'interfaccia
    setMovimenti([nuovoMovimento, ...movimenti]);
    setSaldo(saldo + nuovoMovimento.importo);
  };

  if (loading) {
    return <div className="container" style={{textAlign: 'center', marginTop: '50px'}}>Caricamento dati in corso...</div>;
  }

  return (
    <BrowserRouter>
      {toastMessage && (
        <div className="toast-container">
          <Toast message={toastMessage} />
        </div>
      )}

      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        lang={lang} 
        toggleLang={toggleLang}
        text={text.navbar}
      />
      <Routes>
        <Route path="/" element={<Home saldo={saldo} movimenti={movimenti} text={text.home} showToast={showToast} />} />
        <Route path="/movimenti" element={<Movimenti movimenti={movimenti} text={text.movimenti} showToast={showToast} />} />
        <Route path="/bonifico" element={<Bonifico onEseguiBonifico={eseguiBonifico} text={text.bonifico} showToast={showToast} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
