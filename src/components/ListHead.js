function ListHead(props) {
    return (
        <>
            <thead>
                <tr>
                    <th>{props.header1}</th>
                    <th>{props.header2}</th>
                </tr>
            </thead>
        </>
    )
}

export default ListHead