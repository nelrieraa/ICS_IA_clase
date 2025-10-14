import { productos } from './datos/Productos';
import FichaProducto from './components/FichaProducto';
import './index.css';

function App() {
  return (
    <div className="galeria">
      {productos.map(producto => (
        <FichaProducto key={producto.id} producto={producto}>
          <button className="btn-carrito">Añadir al carrito</button>
        </FichaProducto>
      ))}
    </div>
  );
}

export default App;
