/*
 * props.event é um 'método' que veio passado pelo componente 'pai'
 */
function Button(props) {
    return <button onClick={props.event}>{props.text}</button>
}

export default Button