import { useState } from 'react';
import './styles.css';  

function Transferir() {
  const [monto, setMonto] = useState('');
  const [confirmacion, setConfirmacion] = useState('');

  const handleChange = (e) => {
    setMonto(e.target.value);
  };

  const handleConfirmar = () => {
    if (monto) {
      setConfirmacion(`Transferencia realizada de $${monto}`);
      setMonto('');
    } else {
      setConfirmacion('Por favor ingresa un monto');
    }
  };

  const montosPredefinidos = [10, 20, 50, 100];

  return (
    <div className="container">
      <h1>Transferir</h1>
      <div>
        <p>Elige un monto:</p>
        {montosPredefinidos.map((valor) => (
          <button
            key={valor}
            onClick={() => setMonto(valor)}
            className="boton-monto"
          >
            ${valor}
          </button>
        ))}
      </div>
      <input
        type="number"
        placeholder="Ingresa monto"
        value={monto}
        onChange={handleChange}
        className="input-monto"
      />
      <button onClick={handleConfirmar} className="boton-confirmar">
        Confirmar transferencia
      </button>
      <p>{confirmacion}</p>
    </div>
  );
}

export default Transferir;
