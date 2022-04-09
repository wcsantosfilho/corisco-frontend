import { useState } from 'react'

function Form () {
    function cadastraAposta(e) {
        e.preventDefault();
        console.log(`${concInicial} a ${concFinal} em ${dataAposta}`)
        console.log('Cadastrou a aposta!')
    }

    const [concInicial, setConcInicial] = useState()
    const [concFinal, setConcFinal] = useState()
    const [dataAposta, setDataAposta] = useState()

    return (
        <div className="simple-form">
            <h3>Cadastro</h3>
            <form onSubmit={cadastraAposta}>
                <div>
                    <label htmlFor="concInicial">Concurso Inicial:</label>
                    <input type="number" id="concInicial" name="concInicial" 
                        placeholder="Concurso Inicial" 
                        onChange={(e) => setConcInicial(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="concFinal">Concurso Final:</label>
                    <input type="number" id="concFinal" name="concFinal"
                        placeholder="Concurso Final"
                        onChange={(e) => setConcFinal(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="DataAposta">Data Aposta:</label>
                    <input type="text" id="dataAposta" name="dataAposta"
                        placeholder="Data da Aposta"
                        onChange={(e) => setDataAposta(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form