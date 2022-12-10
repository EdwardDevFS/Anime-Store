import "./Flex.scss";
import Aside from '../Aside/Aside';
function Flex(props){
    return (
        <>
            <div className="presentacion-f">
                <h1 className="titulo-f">{props.titulo}</h1>
                <h5 className="subtitulo-f">{props.descripcion}</h5>
            </div>
            <div className="f-item">
                {/* <div className="left">
                    <Aside/>
                </div> */}
                <div className="right">
                    {props.children}
                </div>
            </div>
        </>
    )
    
}
export default Flex;