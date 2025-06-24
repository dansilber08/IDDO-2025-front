import { useNavigate } from 'react-router-dom';
import './styles/stylesHome.css';

export default function Home() {
    const navigate = useNavigate();

    return (
      <div className="home-container">
        <div className= "monto-dinero">
        <span className="plata">$13,800</span>
        </div>
        <button className = "btn-transferir" onClick={() => navigate('/transferir')}>Transferencias</button>
        <button className = "btn-recibir" onClick={() => navigate('/recibir')}>Recibir</button>
      </div>
    );
    
    
   
  }