import { useState } from "react";

function Email(){
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(e){
        e.preventDefault()
        setUserEmail('')
    }

    return(
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Digite o seu E-mail aqui"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>Cadastrar</button>
            </form>
            {userEmail && (
                <div>
                    <h4>{userEmail}</h4>
                    <button onClick={limparEmail}>Limpar</button>
                </div>
            )}
        </div>
    )
}

export default Email;