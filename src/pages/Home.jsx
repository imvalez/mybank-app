
import { useState } from 'react';

function Home({ saldo, movimenti, text, showToast }) {
  const [showSaldo, setShowSaldo] = useState(true);
  const [flippedCard, setFlippedCard] = useState(null); // 'debit' or 'prepaid' or null
  
  const ultimiMovimenti = movimenti.slice(0, 5);
  const iban = "IT45K03069032001000000123456";

  // Calcolo per il grafico a barre
  const entrate = movimenti.filter(m => m.importo > 0).reduce((acc, curr) => acc + curr.importo, 0);
  const uscite = Math.abs(movimenti.filter(m => m.importo < 0).reduce((acc, curr) => acc + curr.importo, 0));
  const totale = entrate + uscite;
  const percEntrate = totale > 0 ? (entrate / totale) * 100 : 50;
  const percUscite = totale > 0 ? (uscite / totale) * 100 : 50;

  const getSaluto = () => {
    const ora = new Date().getHours();
    if (ora < 13) return text.buongiorno;
    if (ora < 18) return text.buonpomeriggio;
    return text.buonasera;
  };

  const formatEuro = (amount) => {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(amount);
  };

  const formatDate = (isoString) => {
    if (!isoString) return "";
    const [year, month, day] = isoString.split('-');
    return `${day}-${month}-${year}`;
  };

  const copiaIban = () => {
    navigator.clipboard.writeText(iban);
    showToast(`${text.copiato || 'Copiato!'}`);
  };

  const handleCardClick = (cardName) => {
    setFlippedCard(flippedCard === cardName ? null : cardName);
  };

  return (
    <div className="container">
      <h1>{getSaluto()}, Valerio</h1>
      
      <div className="card saldo-box" style={{position: 'relative'}}>
        <h3>
          {text.saldo}
          <button 
            onClick={() => setShowSaldo(!showSaldo)} 
            style={{
              background: 'none', 
              border: 'none', 
              color: 'white', 
              marginLeft: '10px', 
              cursor: 'pointer', 
              fontSize: '1.2rem'
            }}
            title={showSaldo ? text.nascondi || "Nascondi" : text.mostra || "Mostra"}
          >
            {showSaldo ? '👁️' : '🔒'}
          </button>
        </h3>
        
        <div className="saldo-valore">
          {showSaldo ? formatEuro(saldo) : '€ ****,**'}
        </div>
        
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
          <p style={{margin: 0}}>IBAN: {iban}</p>
          <button 
            onClick={copiaIban}
            style={{
              background: 'rgba(255,255,255,0.2)', 
              border: 'none', 
              color: 'white', 
              padding: '5px 10px', 
              borderRadius: '5px', 
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}
          >
            {text.copia || 'Copia'}
          </button>
        </div>

        {/* Bar Chart Semplice */}
        <div style={{marginTop: '25px', color: 'white', fontSize: '0.9rem'}}>
           <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '5px'}}>
             <span>Entrate: {Math.round(percEntrate)}%</span>
             <span>Uscite: {Math.round(percUscite)}%</span>
           </div>
           <div className="bar-chart-container">
             <div className="bar-income" style={{width: `${percEntrate}%`}}></div>
             <div className="bar-expense" style={{width: `${percUscite}%`}}></div>
           </div>
        </div>
      </div>

      <div className="card">
        <h2>{text.ultimiMovimenti}</h2>
        {ultimiMovimenti.length > 0 ? (
          <ul className="lista-movimenti">
            {ultimiMovimenti.map((mov) => (
              <li key={mov.id} className="movimento">
                <div className="movimento-info">
                  <span className="movimento-data">{formatDate(mov.data)}</span>
                  <span className="movimento-desc">{mov.descrizione}</span>
                </div>
                <div className={`importo ${mov.importo > 0 ? 'positivo' : 'negativo'}`}>
                  {mov.importo > 0 ? '+' : ''} {formatEuro(Math.abs(mov.importo))}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>{text.nessunMovimento}</p>
        )}
      </div>

      <div className="card">
        <h2>{text.carte}</h2>
        <div className="cards-wrapper">
          {/* Carta 1 */}
          <div 
            className={`credit-card card-dark ${flippedCard === 'debit' ? 'flipped' : ''}`} 
            onClick={() => handleCardClick('debit')}
          >
            <div className="card-front">
              <div className="card-type">{text.debit}</div>
              <div className="card-number">**** 4545</div>
            </div>
            <div className="card-back">
              <div className="cvc-strip">CVC: 123</div>
            </div>
          </div>
          
          {/* Carta 2 */}
          <div 
            className={`credit-card card-blue ${flippedCard === 'prepaid' ? 'flipped' : ''}`} 
            onClick={() => handleCardClick('prepaid')}
          >
            <div className="card-front">
              <div className="card-type">{text.prepaid}</div>
              <div className="card-number">**** 9012</div>
            </div>
            <div className="card-back">
              <div className="cvc-strip">CVC: 987</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
