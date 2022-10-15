import { useState } from "react"
import Styles from "./css/Counter.module.css"

function Counter(){
    const [contador, setCont] = useState(1);

    function addCont(){
        setCont(contador + 1)
    }

    return(
        <div className={Styles.container}>
            <label>{contador}</label>
            <button onClick={addCont}>Adicionar</button>
        </div>
    )
}

export default Counter;