import "./Figuras.scss"



function Figuras(props){

    return(
        <>
        <div className="card mb-3 card-max text-bg-dark">
            <div className="row g-0">
                <div className="col-md-3">
                    <img src={props.url} className="img-fluid rounded-start" alt={props.alt}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title-style">{props.title}</h5>
                        <br/>
                        <p className="card-text desc"><strong>Todos nuestros productos son completamente nuevos</strong> {props.description}</p>
                        <br />
                        <p className="card-text "><span>Precio: S/{props.price}</span></p>
                        <p className="card-text "><small className="text-muted">Stock: {props.stock}</small></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Figuras;