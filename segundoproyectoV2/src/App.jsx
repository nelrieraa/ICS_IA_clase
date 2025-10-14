import { productos } from './datos/Productos';
import GaleriaProductos from './components/GaleriaProductos';
import './index.css';

function App() {
  return <GaleriaProductos productos={productos} />;
}

export default App;
