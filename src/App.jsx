import './App.css'
import './index.css'
import ItemDetailContainer from './components/ItemDetailContainer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Nosotros from './components/Nosotros';
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
   <div>
    <BrowserRouter>
      
      <Header />
      <NavBar />

    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />}/>
      <Route path="/nosotros" element={<Nosotros />}/>
    </Routes>

    
    </BrowserRouter>
   </div>
  );
};

export default App;