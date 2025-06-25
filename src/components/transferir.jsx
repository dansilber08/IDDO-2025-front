import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/styles.css';
  
function Transferir() {
  const navigate = useNavigate();
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
  const [confirmado, setConfirmado] = useState(false);

  const [sliderX, setSliderX] = useState(0);
const maxSlide = 200; // tamaño máximo de desplazamiento

const handleDrag = (e) => {
  if (confirmado) return;

  const newX = e.clientX - e.currentTarget.parentElement.getBoundingClientRect().left;
  if (newX >= 0 && newX <= maxSlide) {
    setSliderX(newX);
  }
};


const handleDragEnd = () => {
  if (sliderX > maxSlide * 0.9) {
    if (monto) {
      handleConfirmar();
      setSliderX(maxSlide); // Lo pone al final

      // Espera 2 segundos y vuelve al inicio
      setTimeout(() => {
        setSliderX(0);
      }, 2000);
    } else {
      setConfirmacion('Por favor ingresa un monto');
      setSliderX(0); // vuelve al inicio
    }
  } else {
    setSliderX(0); // vuelve al inicio si no llegó al final
  }
};




  const montosPredefinidos = [10, 20, 50, 100];

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
      {/* <button onClick={handleConfirmar} className="boton-confirmar">
        Confirmar transferencia
      </button> */}
     <div className="slide-container">
  <div 
    className="slide-fill" 
    style={{ width: `${sliderX + 25}px` }} // 25 es la mitad del botón
  ></div>
  
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
    </div>
  );
}

export default Transferir;
