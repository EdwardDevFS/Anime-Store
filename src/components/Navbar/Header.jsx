import Button from '../Buttons/Button';
import { Link } from "react-router-dom"
import './Header.scss';
import Carrito from '../Carrito/Carrito';

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
                        <Link to="/categoria/manga">Anime Manga</Link>
                    </li>
                    <li>
                        <Link to="/categoria/Funko">Funkos</Link>
                    </li>
                    <li>
                        <Link to="/categoria/Figuras">Figuras Anime</Link>
                    </li>
                    
                    <div className="d-flex align-center ms-5 me-2 my-3">
                        <a href="https://ejanime.netlify.app/secciones/login-form.html" target="_blank">
                        <Button className="noto">INGRESAR</Button>

                        </a>
                    </div>
                </ul>
            </nav>
                <div className="carrito me-3 d-flex ">
                    <Carrito clase="btn btn-dark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-basket" viewBox="0 0 16 16">
                            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                    </Carrito>

                </div>
        </nav>
        
    )
}
export default Header