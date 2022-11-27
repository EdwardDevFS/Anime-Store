import "./Flex.scss";

function Flex(props){
    return (
        <>
            <div className="presentacion-f">
                <h1 className="titulo-f">{props.titulo}</h1>
                <h5 className="subtitulo-f">{props.descripcion}</h5>
            </div>
            <div className="f-item">
                {props.children}
            </div>
        </>
    )
    
}
export default Flex;