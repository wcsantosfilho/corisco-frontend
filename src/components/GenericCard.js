function GenericCard (props) {
    function cardClick() {
        console.log('êêê... clicou!')
    }

    return (
        <div onClick={cardClick} className="generic-card">{props.cardTitle} <br></br> {props.cardContent}</div>
    )
}

export default GenericCard;