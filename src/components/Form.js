function Form () {
    function cadastraAposta(e) {
        e.preventDefault();
        console.log('Cadastrou a aposta!')
    }

    return (
        <div className="simple-form">
            <h3>Cadastro</h3>
            <form onSubmit={cadastraAposta}>
                <div>
                    <input type="number" placeholder="Concurso Inicial" />
                </div>
                <div>
                    <input type="number" placeholder="Concurso Final" />
                </div>
                <div>
                    <input type="text" placeholder="Data da Aposta" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form