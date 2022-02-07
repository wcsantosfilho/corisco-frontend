import Item from './Item'
import ListHead from './ListHead'

function List () {

    return (
        <table>
            <ListHead header1="Concurso(s)" header2="Data da aposta" />
            <tbody>
                <Item drawInit={2241} drawEnd={2245} betDate="06/01/2022"/>
                <Item drawInit={2236} drawEnd={2240} betDate="12/12/2021"/>
                <Item drawInit={2230} drawEnd={2235} betDate="25/11/2021"/>
                <Item drawInit={2229} betDate="06/11/2021"/>
            </tbody>
        </table>
    )
}

export default List