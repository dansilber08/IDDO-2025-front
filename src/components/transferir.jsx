import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/styles.css';
import comprobanteImg from '../Assets/comprobanteDemo.jfif';

function Transferir() {
  const navigate = useNavigate();
  const [monto, setMonto] = useState('');
  const [confirmacion, setConfirmacion] = useState('');
  const [mostrarComprobante, setMostrarComprobante] = useState(false);
  const [sliderX, setSliderX] = useState(0);
  const [saldo, setSaldo] = useState(1000); 

  const maxSlide = 200;

  useEffect(() => {
    const guardado = localStorage.getItem('monto');
    if (guardado) {
      setSaldo(parseFloat(guardado));
    }
  }, []);

  const handleChange = (e) => {
    setMonto(e.target.value);
  };

  const handleConfirmar = () => {
    const montoNum = parseFloat(monto);

    if (isNaN(montoNum) || montoNum <= 0) {
      setConfirmacion('Por favor ingresa un monto válido');
      return;
    }

    if (montoNum > saldo) {
      setConfirmacion('Saldo insuficiente');
      return;
    }

    const nuevoSaldo = saldo - montoNum;
    localStorage.setItem('monto', nuevoSaldo);
    setSaldo(nuevoSaldo);

    setConfirmacion(`Transferencia realizada de $${montoNum}`);
    setMostrarComprobante(true);
    setMonto('');

    setTimeout(() => {
      setMostrarComprobante(false);
      navigate('/');
    }, 3000);
  };

  const handleDrag = (e) => {
    const newX = e.clientX - e.currentTarget.parentElement.getBoundingClientRect().left;
    if (newX >= 0 && newX <= maxSlide) {
      setSliderX(newX);
    }
  };

  const handleDragEnd = () => {
    if (sliderX > maxSlide * 0.9) {
      handleConfirmar();
      setSliderX(maxSlide);

      setTimeout(() => {
        setSliderX(0);
      }, 2000);
    } else {
      setSliderX(0);
    }
  };

  return (
    <div className="container">
      <button className="btn-volver" onClick={() => navigate('/')}>Volver</button>
      <h1>Transferir</h1>
      <input
        type="number"
        placeholder="Ingresa monto"
        value={monto}
        onChange={handleChange}
        className="input-monto"
      />

      <div className="slide-container">
        <div className="slide-fill" style={{ width: `${sliderX + 25}px` }}></div>
        <div
          className="slide-button"
          draggable
          onDragStart={(e) => e.dataTransfer.setDragImage(new Image(), 0, 0)}
          onDrag={(e) => handleDrag(e)}
          onDragEnd={handleDragEnd}
          style={{ left: `${sliderX}px` }}
        />
      </div>

      <p>{confirmacion}</p>

      {mostrarComprobante && (
        <img
          src={comprobanteImg}
          alt="Comprobante de transferencia"
          className="comprobante-img"
        />
      )}
    </div>
  );
}

export default Transferir;
