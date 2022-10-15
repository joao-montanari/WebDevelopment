import Styles from './css/Marcas.module.css';
import PropTypes from 'prop-types'

function Carro(props){
    return(
        <div className={Styles.container}>
            <label>Marca: {props.marca}</label>
            <label>Ano de lançamento: {props.ano_lancamento}</label>
        </div>
    )
}

Carro.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number
}

Carro.defaultProps = {
    marca: "Não informada",
    ano_lancamento: 0
}

export default Carro;