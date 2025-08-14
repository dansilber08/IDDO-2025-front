import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../components/landing.jsx';
import Home from '../components/home.jsx'; 
import Transferir from '../components/transferir.jsx';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/transferencias" element={<Home />} />
        <Route path="/transferir" element={<Transferir />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;