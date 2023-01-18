import "./Item.scss"
import { Link } from "react-router-dom"
import { cartContext } from '../../Storage/CarContext';
import { useState, useContext } from "react"
import { useToast } from '@chakra-ui/react'

function Item(props){
    let urlDetail = `/item/${props.id}`  
    const context = useContext(cartContext)
    const [favorite, setFavorite] = useState(context.favorito)
    console.log(context)
    const toast = useToast()
    let name = props.name
    let bgblackbasic = "#0c0f12"
    let nofav = { backgroundColor: "rgba(0, 0, 0, 0.475)", color: "aqua" }
    let isfav = { backgroundColor:  bgblackbasic , color: "rgb(255, 0, 0)" } 
    //  background-color: rgba(0, 0, 0, 0.475), color: aqua
    // background-color: #0c0f12, color: rgb(255, 0, 0)

    
    function isFavorite(){
        if(favorite !== true){
            toast({
                title: `El articulo ${name} ha sido añadido a tus favoritos`,
                status: "success",
                isClosable: true,
            })
            setFavorite(true)

        }
        else{
            console.log("no like")
            
            toast({
                title: `El articulo ${name} ha sido removido de tus favoritos`,
                status: "warning",
                isClosable: true,
            })
            setFavorite(false)

        }

    }

    return(
        <div className="card mb-3 card-max text-dark z-">
            <div className="row g-0">
                <div className="col-md-4 image-hover">
                    <img src={props.url} className="img-fluid rounded-start" alt={props.alt}/>
                    <div className="fav-icon">
                        <span style={favorite ? isfav:nofav} onClick={isFavorite}>♥</span>
                    </div>
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