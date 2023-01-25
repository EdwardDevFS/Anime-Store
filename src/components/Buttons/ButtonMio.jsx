import "./Button.scss"

function ButtonMio(props){
    return <button className={props.Tipo} data-bs-dismiss="offcanvas" 
    aria-label="Close">{props.children}</button>;
}
export default ButtonMio;