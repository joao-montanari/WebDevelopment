import Notes from './Phrase';

function Card(props){
    return(
        <>
            <div>
                <h2>Cartão</h2>
                <h4>Nome: {props.name}</h4>
                <label>Idade: {props.age}</label>
                <label>Profissão: {props.profession}</label>
                <img src={props.photo} alt="Foto do usuario" />
            </div>
            <Notes />
        </>
    )
}

export default Card;