
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Navbar/Header';
import Aside from './components/Aside/Aside';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CarContextProvider } from './Storage/CarContext';
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import { Box } from "@chakra-ui/react"
import Carga from './components/Cargando/Carga';

// m={2} refers to the value of `theme.space[2]`
// Inicializamos el context
// Extraemos el componente provider


//TODO NECESITAMOS SOLUCIONAR EL PROBLEMA DEL Z-INDEX ASÍ COMO UN CARRITO DE COMPRAS

function App() {
  return (
    <CarContextProvider>
      <Box>
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
            <Route path="/prueba" element={ <Carga/>} />
            {/* <Route path="*" element={ <img src="https://c4.wallpaperflare.com/wallpaper/976/117/318/anime-girls-404-not-found-glowing-eyes-girls-frontline-wallpaper-preview.jpg" target="_blaj" className="w-100 h-100 p-absolute" /> } /> */}
          </Routes>
          </section>
          <Footer/>
        </BrowserRouter>
      </Box>
    </CarContextProvider>
  );
}
export default App;
