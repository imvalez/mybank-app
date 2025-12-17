
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Bonifico({ onEseguiBonifico, text, showToast }) {
  const navigate = useNavigate();

  const [iban, setIban] = useState('');
  const [beneficiario, setBeneficiario] = useState('');
  const [importo, setImporto] = useState('');
  const [causale, setCausale] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!iban || !beneficiario || !importo) {
      if (showToast) {
        showToast(text.alertCampi);
      } else {
        alert(text.alertCampi);
      }
      return;
    }

    const nuovoMovimento = {
      id: Date.now(),
      data: new Date().toISOString().split('T')[0],
      descrizione: `Bonifico a ${beneficiario} - ${causale}`,
      importo: -parseFloat(importo),
      tipo: 'uscita'
    };

    onEseguiBonifico(nuovoMovimento);

    if (showToast) {
       showToast(text.alertSuccesso);
    } else {
       alert(text.alertSuccesso);
    }
    
    navigate('/'); 
  };

  return (
    <div className="container">
      <h1>{text.titolo}</h1>
      
      <div className="card">
        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label>{text.beneficiario}</label>
            <input 
              type="text" 
              value={beneficiario}
              onChange={(e) => setBeneficiario(e.target.value)}
              placeholder={text.beneficiarioPlaceholder}
              required
            />
          </div>

          <div className="form-group">
            <label>{text.iban}</label>
            <input 
              type="text" 
              value={iban}
              onChange={(e) => setIban(e.target.value)}
              placeholder="IT..."
              required
            />
          </div>

          <div className="form-group">
            <label>{text.importo}</label>
            <input 
              type="number" 
              step="0.01"
              value={importo}
              onChange={(e) => setImporto(e.target.value)}
              placeholder="0.00"
              required
            />
          </div>

          <div className="form-group">
            <label>{text.causale}</label>
            <textarea 
              value={causale}
              onChange={(e) => setCausale(e.target.value)}
              placeholder={text.causalePlaceholder}
              rows="3"
            />
          </div>

          <button type="submit" className="btn-primary">{text.bottone}</button>
        </form>
      </div>
    </div>
  );
}

export default Bonifico;
