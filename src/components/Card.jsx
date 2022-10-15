import Phrase from './Phrase';
import Styles from './css/Card.module.css'

function Card(props){
    return(
        <>
            <div className={Styles.container}>
                <h2>Usuário</h2>
                <h4>Nome: {props.name}</h4>
                <label>Idade: {props.age}</label>
                <label>Profissão: {props.profession}</label>
                <img src={props.photo} alt="Foto do usuario" />
            </div>
            <Phrase />
        </>
    )
}

export default Card;