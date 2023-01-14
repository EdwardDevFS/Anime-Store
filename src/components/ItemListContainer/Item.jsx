import "./Item.scss"
import { Link } from "react-router-dom"


function Item(props){
    let urlDetail = `/item/${props.id}`  
    return(
        <div className="card mb-3 card-max text-dark">
            <div className="row g-0">
                <div className="col-md-4 image-hover">
                    <img src={props.url} className="img-fluid rounded-start" alt={props.alt}/>
                    <Link to={urlDetail} className="noto">Ir a detalle</Link>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="head-card">
                            <h5 className="card-title-style text-center">{props.title}</h5>
                            <div className="info">
                                <small>Anime: {props.anime}</small>
                                <small>{props.autor === undefined ? "": "Escrito por: "+props.autor}</small>
                            </div>
                        </div>
                        <div className="body-card text-center">
                            <br/>
                            <p className="card-text desc">{props.description}</p>
                            <br />
                        </div>
                        <div className="info">
                            <p className="card-text "><span>Precio: S/{props.price}</span></p>
                            <p className="card-text "><small className="text-muted">Stock: {props.stock}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Item;