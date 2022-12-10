
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Navbar/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemDetail from './components/ItemDetailContainer/ItemDetail';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      {/*Soy un comentario */}
      <header className="">
        <Header/>
      </header>
      <section className="Items">
      <Routes>
        <Route path="/" element={ <ItemListContainer/>} />
        <Route path="/item/" element={ <ItemDetailContainer/>} />
        <Route path="/" element={ <ItemListContainer/>} />
        <Route path="/" element={ <ItemListContainer/>} />
        <Route path="/" element={ <ItemListContainer/>} />
      </Routes>
      </section>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
