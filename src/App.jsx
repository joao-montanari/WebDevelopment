import './App.css';
import Card from './components/Card';
import Carro from './components/Carro';
import Counter from './components/Counter';

function App() {
  const name = 'João'
  const NameUpper = name.toUpperCase()
  const url = 'https://via.placeholder.com/150'

  function soma(a, b){
    return(
      a + b
    );
  }

  return (
    <div className='App'>
      <h1>Hello World</h1>
      <h3>Ola {name}</h3>
      <p>
        Soma de dois números: {soma(2,8)}
      </p>
      <h3>O nome do usuário é: {NameUpper}</h3>
      <Card
        name="João Vitor Montanari"
        age="19"
        profession="Programador"
        photo="https://via.placeholder.com/200x130"
      />

      <h1>Marcas de carro</h1>
      <Carro
        ano_lancamento={2005}
        marca = "Fiati"
      />
      <Carro />
      <h1>Contador</h1>
      <Counter />
    </div>
  );
}

export default App;
