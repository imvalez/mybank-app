
import { useState } from 'react';


function Movimenti({ movimenti, text, showToast }) {
  const [filtroTipo, setFiltroTipo] = useState('tutti');
  const [ricerca, setRicerca] = useState('');

  const formatEuro = (amount) => {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(amount);
  };

  const formatDate = (isoString) => {
    if (!isoString) return "";
    const [year, month, day] = isoString.split('-');
    return `${day}-${month}-${year}`;
  };

  const isNuovo = (data) => {
    const oggi = new Date().toISOString().split('T')[0];
    return data === oggi;
  };

  const movimentiFiltrati = movimenti.filter((mov) => {
    // Filtro per tipo
    if (filtroTipo === 'entrate' && mov.importo < 0) return false;
    if (filtroTipo === 'uscite' && mov.importo > 0) return false;

    // Filtro per ricerca
    if (ricerca && !mov.descrizione.toLowerCase().includes(ricerca.toLowerCase())) return false;

    return true;
  });

  const scaricaCSV = () => {
    if (!movimentiFiltrati || movimentiFiltrati.length === 0) {
      if (showToast) showToast(text.nessunRisultato || "Nessun movimento da scaricare");
      else alert("Nessun movimento da scaricare");
      return;
    }

    try {
      const header = ["Data", "Descrizione", "Importo", "Tipo"];
      
      const rows = movimentiFiltrati.map(m => [
        formatDate(m.data), 
        // Controllo di sicurezza: se descrizione è null/undefined usa stringa vuota
        `"${(m.descrizione || "").toString().replace(/"/g, '""')}"`, 
        m.importo, 
        m.tipo
      ]);
      
      const csvContent = header.join(",") + "\n" 
        + rows.map(e => e.join(",")).join("\n");

      // Metodo più compatibile
      const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = url;
      link.download = `movimenti_${new Date().getTime()}.csv`; // Nome univoco per evitare cache
      document.body.appendChild(link);
      
      link.click();
      
      // Pulizia ritardata per alcuni browser
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 100);

      if (showToast) showToast("Download avviato!");
      
    } catch (error) {
      console.error("Errore download CSV:", error);
      alert("Errore durante il download. Controlla la console.");
    }
  };

  return (
    <div className="container">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1>{text.titolo}</h1>
        <button className="btn-primary" style={{width: 'auto', fontSize: '0.9rem'}} onClick={scaricaCSV}>
          {text.scarica} 📥
        </button>
      </div>

      <div className="card">
        <div className="filtri" style={{flexWrap: 'wrap', alignItems: 'flex-end'}}>
          <div className="form-group" style={{marginBottom: 0, marginRight: '15px'}}>
            <label htmlFor="filtro">{text.filtra}</label>
            <select 
              id="filtro" 
              value={filtroTipo} 
              onChange={(e) => setFiltroTipo(e.target.value)}
            >
              <option value="tutti">{text.tutti}</option>
              <option value="entrate">{text.entrate}</option>
              <option value="uscite">{text.uscite}</option>
            </select>
          </div>
          
          <div className="form-group" style={{flex: 1, marginBottom: 0}}>
             <label htmlFor="cerca">{text.cerca}</label>
             <input 
               id="cerca"
               type="text" 
               placeholder={text.cercaPlaceholder} 
               value={ricerca}
               onChange={(e) => setRicerca(e.target.value)}
             />
          </div>
        </div>

        {movimentiFiltrati.length > 0 ? (
          <ul className="lista-movimenti">
            {movimentiFiltrati.map((mov) => (
              <li key={mov.id} className="movimento">
                <div className="movimento-info">
                  <span className="movimento-data">
                    {formatDate(mov.data)} 
                    {isNuovo(mov.data) && <span style={{
                      backgroundColor: '#007bff', 
                      color: 'white', 
                      padding: '2px 6px', 
                      borderRadius: '4px', 
                      fontSize: '0.7rem', 
                      marginLeft: '10px',
                      fontWeight: 'bold'
                    }}>{text.nuovo}</span>}
                  </span>
                  <span className="movimento-desc">{mov.descrizione}</span>
                  
                </div>
                <div className={`importo ${mov.importo > 0 ? 'positivo' : 'negativo'}`}>
                  {mov.importo > 0 ? '+' : ''} {formatEuro(Math.abs(mov.importo))}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>{text.nessunRisultato}</p>
        )}
      </div>
    </div>
  );
}

export default Movimenti;
