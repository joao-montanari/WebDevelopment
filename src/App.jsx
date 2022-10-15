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
      <Card />
    </div>
  );
}

export default App;
