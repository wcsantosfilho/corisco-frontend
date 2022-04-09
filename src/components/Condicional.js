import {useState} from 'react'

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log("Testando")
    }

    function limparEmail() {
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre o seul e-mail:</h2>
            <form>
                <input
                    type="email"
                    placeholder='Digite o email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>
                    Enviar e-mail
                </button>
                {userEmail && ( //Isto é um "if inline com Operador lógico &&"
                    <div>
                        <p>O e-mail do usuário é {userEmail}</p>
                        <button onClick={limparEmail}>
                            Limpar Email
                        </button>
                    </div>
                )}
            </form>

        </div>
    )
}

export default Condicional