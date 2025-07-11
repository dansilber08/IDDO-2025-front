import { useNavigate } from 'react-router-dom';
import './styles/stylesHome.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const navigate = useNavigate();
  const [monto, setMonto] = useState(1000); 

  useEffect(() => {
    const guardado = localStorage.getItem('monto');
    if (guardado) setMonto(parseFloat(guardado));
  }, []);

  return (
    <div className="home-container">
      <div className="monto-dinero">
        <span className="plata">${monto.toLocaleString()}</span>
      </div>
      <button className="btn-transferir" onClick={() => navigate('/transferir')}>
        Transferencias
      </button>
      <button className="btn-recibir" onClick={() => navigate('/recibir')}>
        Recibir
      </button>
    </div>
  );
}
