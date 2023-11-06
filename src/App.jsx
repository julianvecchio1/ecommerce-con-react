import './App.css'
import './index.css'
import ItemDetailContainer from './components/ItemDetailContainer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito';
import CheckOut from "./components/CheckOut";



const App = () => {
  
  return (
   <div>
    <CartProvider>
    <BrowserRouter>
      
      <Header />
      <NavBar />

    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      <Route path="/productos" element={<ItemListContainer />} />
      <Route path="/productos/:categoria" element={<ItemListContainer />} />
      <Route path="/nosotros" element={<Nosotros />}/>
      <Route path="/contacto" element={<Contacto />}/>
      <Route path="/carrito" element={<Carrito />}/>
      <Route path="/checkout" element={<CheckOut/>}/>
    </Routes>

    
    </BrowserRouter>
    </CartProvider>
   </div>
  );
};

export default App;