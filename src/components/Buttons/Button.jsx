import "./Button.scss"

function Button(props){
    return <button className="btn btn-outline-success boton" >{props.children}</button>;
}
export default Button;