import './App.css';
import Card from './components/Card';

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
      <h2>Imagem de parfil:</h2>
      <img src={url} alt="Imagem teste" />
      <Card
        name="João Vitor Montanari"
        age="19"
        profession="Médico"
        photo="https://via.placeholder.com/130"
      />
    </div>
  );
}

export default App;
