import { useState } from 'react';
import Styles from './css/Form.module.css';

function Form(){

    const [name, setName] = useState();
    const [password, setPassword] = useState();

    function cadasUser(e){
        e.preventDefault()
        console.log(`Usuário: ${name} se cadastrou com a senha ${password}`)
    }

    return(
        <div className={Styles.container}>
            <h1>Formulário de cadastro</h1>
            <form onSubmit={cadasUser}>
                <div className={Styles.campos}>
                    <input
                        type="text"
                        placeholder="Digite o seu nome"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Digite a sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form