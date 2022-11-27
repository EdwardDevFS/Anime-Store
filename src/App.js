
import './App.scss';
import Flex from './components/Flex-box/Flex';
import Footer from './components/Footer/Footer';
import Figuras from './components/Item/Figuras_anime';
import Header from './components/Navbar/Header';


function App() {
  return (
    <>
    {/*Soy un comentario */}
    <header className="">
      <Header/>
    </header>
    <section className="Items">
      <Flex
        titulo="CATALOGO DE ITEMS"
        descripcion="EJ Anime Store es tu tienda online de Anime y Manga más especializada de la red.">
        <Figuras
          url="https://animecristal.com/wp-content/uploads/2021/05/Figuras-86-Eighty-Six-500x750.jpg"
          alt="Figuras 86 Eighty Six"
          title="Eighty Six - Vladilena"
          description=" y los revisamos antes de proceder al envío definitivo, si hay algún producto deteriorado lo devolvemos automáticamente a nuestro distribuidor."
          price="120.00"
          stock="10"
        />
        <Figuras
          url="https://zenstatic.blob.core.windows.net/blog/flq3vof4.ui1"
          alt="Figuras One Punch Man"
          title="One Punch Man - Saitama"
          description=" y los revisamos antes de proceder al envío definitivo, si hay algún producto deteriorado lo devolvemos automáticamente a nuestro distribuidor."
          price="120.00"
          stock="10"
        />
        <Figuras
          url="https://ae01.alicdn.com/kf/H63b4c68f3a09464f91c7a81ca4964a892/22CM-nuevo-Kagamine-Rin-Sexy-chicas-figura-Anime-PVC-ahora-SSs-figuras-de-acci-n-juguetes.jpg_Q90.jpg_.webp"
          alt="Figuras 86 Eighty Six"
          title="Kagamine Rin"
          description=" y los revisamos antes de proceder al envío definitivo, si hay algún producto deteriorado lo devolvemos automáticamente a nuestro distribuidor."
          price="120.00"
          stock="10"
        />
        <Figuras
          url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSosCYOBlWZSHFdbSlcSPjYfWE3HHkEiIZkfw&usqp=CAU"
          alt="Figuras 86 Eighty Six"
          title="Re Zero - Rem"
          description=" y los revisamos antes de proceder al envío definitivo, si hay algún producto deteriorado lo devolvemos automáticamente a nuestro distribuidor."
          price="120.00"
          stock="10"
        />
        <Figuras
          url="https://www.tadaima.com.mx/wp-content/uploads/2022/07/transformersbishoujo-3.png"
          alt="Figuras 86 Eighty Six"
          title="Transformers Bishoujo"
          description=" y los revisamos antes de proceder al envío definitivo, si hay algún producto deteriorado lo devolvemos automáticamente a nuestro distribuidor."
          price="120.00"
          stock="10"
        />
        <Figuras
          url="https://www.tadaima.com.mx/wp-content/uploads/2022/07/transformersbishoujo-3.png"
          alt="Figuras 86 Eighty Six"
          title="Transformers Bishoujo"
          description=" y los revisamos antes de proceder al envío definitivo, si hay algún producto deteriorado lo devolvemos automáticamente a nuestro distribuidor."
          price="120.00"
          stock="10"
        />
      </Flex>
    </section>
    <Footer/>
    </>
  );
}

export default App;
