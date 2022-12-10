
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Navbar/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
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
        <Route path="/categoria/:category" element={ <ItemListContainer/>} />
        <Route path="/item/:id" element={ <ItemDetailContainer/>} />
        <Route path="*" element={ <img src="https://c4.wallpaperflare.com/wallpaper/976/117/318/anime-girls-404-not-found-glowing-eyes-girls-frontline-wallpaper-preview.jpg" className="w-100 h-100 p-absolute" /> } />
      </Routes>
      </section>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
