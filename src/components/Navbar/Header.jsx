import Button from '../Buttons/Button';
import Carrito from '../Buttons/Carrito_Button';
import { Link } from "react-router-dom"
import './Header.scss';

function Header(){


    return(
        
        <nav className="navBar navbar-dark bg-dark fixed-top"> {/*fixed-top*/}
            <div className="titulo container-fluid ms-5">
                <Link to="/"><h1 className="">EJ <span>ANIME</span> Store</h1></Link>
            </div>
            <nav className="items-nav me-5">
                <ul className="list-ul">
                    
                    <li className="EJANIME">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                EJ <span>ANIME</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark">
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
                        </ul>
                    </li>
                    <li>
                        <Link to="/">Anime Manga</Link>
                    </li>
                    <li>
                        <Link to="/">Funkos</Link>
                    </li>
                    <li>
                        <a href="#">Figuras Anime</a>
                    </li>
                    
                    <div className="d-flex align-center ms-5 me-2 my-3">
                        <a href="https://ejanime.netlify.app/secciones/login-form.html" target="_blank">
                        <Button>INGRESAR</Button>

                        </a>
                    </div>
                </ul>
            </nav>
                <div className="carrito me-3 d-flex ">
                    <Carrito/>
                </div>
        </nav>
        
    )
}
export default Header