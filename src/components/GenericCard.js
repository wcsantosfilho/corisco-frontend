import Button from './Button'

function GenericCard (props) {
    function cardClick() {
        console.log('êêê... clicou no card!')
    }

    function buttonClick() {
        console.log('êêê... clicou no button')
    }

    return (
        <div onClick={cardClick} 
            className="generic-card">{props.cardTitle} 
            <br></br> 
            {props.cardContent}
            <br></br> 
            <Button event={buttonClick} text="Primeiro Evento" />
        </div>
    )
}

export default GenericCard;

// 'Button event={nonono}' passa um método para ser 
// executado no componente 'filho'