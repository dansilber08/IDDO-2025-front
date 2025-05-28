import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    
    return (
      <div>
        <h1>Pantalla Principal</h1>
        <button onClick={() => navigate('/transferir')}>Transferencias</button>
        <button onClick={() => navigate('/recibir')}>Recibir</button>
      </div>
    );
  }