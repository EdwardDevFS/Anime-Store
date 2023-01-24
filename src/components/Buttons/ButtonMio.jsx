import "./Button.scss"

function ButtonMio(props){
    return <button className={props.Tipo} >{props.children}</button>;
}
export default ButtonMio;