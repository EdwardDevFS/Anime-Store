import Button from '../Buttons/Button';
import Carrito from '../Buttons/Carrito_Button';

import './Header.scss';

function Header(){
    return(
        <nav className="navBar navbar-dark bg-dark fixed-top"> {/*fixed-top*/}
            <div className="titulo container-fluid ms-5">
                <a href="#">
                    <h1 className="">EJ <span>ANIME</span> Store</h1>
                </a>
            </div>
            <div className="items-nav me-5">
                <ul className="list-ul">
                    <li className="items">
                        <a href="#">Inicio</a>
                    </li>
                    <li className="items">
                        <a href="https://ejanime.netlify.app/secciones/info.html" target="_blank">Nosotros</a>
                    </li>
                    <li className="items">
                        <a href="https://ejanime.netlify.app/secciones/servicios.html" target="_blank">Servicios</a>
                    </li>
                    <li className="items">
                        <a href="https://ejanime.netlify.app/secciones/nuevo.html" target="_blank">Top Anime</a>
                    </li>
                    <li className="items">
                        <a href="https://ejanime.netlify.app/secciones/registro.html" target="_blank">Registro</a>
                    </li>
                    <div className="d-flex align-center ms-5 me-2 my-3">
                        <a href="https://ejanime.netlify.app/secciones/login-form.html" target="_blank">
                        <Button>INGRESAR</Button>

                        </a>
                    </div>
                </ul>
            </div>
                <div className="carrito me-3 d-flex ">
                    <Carrito/>
                </div>
        </nav>
        
    )
}
export default Header;