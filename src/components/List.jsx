function List(props){
    return(
        <>
            {
                props.lista.map((cidade) => (
                    <div key={cidade.id} >
                        <h2>{cidade.nome}</h2>
                        <ul>
                            <li>{cidade.estado} - {cidade.populacao}</li>
                            <li>{cidade.prefeito}</li>
                        </ul>
                    </div>
                ))
            }
        </>
    )
}

export default List;