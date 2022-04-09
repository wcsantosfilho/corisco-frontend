import PropTypes from 'prop-types'

function Item( {drawInit, drawEnd, betDate }) {
    return (
        <tr>
            <td>{drawInit} {drawEnd == null && (<>a</>)} {drawEnd}</td>
            <td>{betDate}</td>
        </tr>
    )
}

Item.propTypes = {
    drawInit: PropTypes.number.isRequired
}

Item.defaultProps = {
    drawEnd: ''
}

export default Item