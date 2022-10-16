import { useState } from "react"
import Styles from "./css/Counter.module.css"

function Counter(){
    const [contador, setCont] = useState(1);

    function addCont(){
        setCont(contador + 1)
    }

    function zerarCont(){
        setCont(1)
    }

    return(
        <div className={Styles.container}>
            <label>{contador}</label>
            <div claasName={Styles.child}>
                <button onClick={addCont}>Adicionar</button>
                <button onClick={zerarCont}>Zerar</button>
            </div>
        </div>
    )
}

export default Counter;