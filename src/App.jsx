import './App.css';
import Card from './components/Card';
import Carro from './components/Carro';
import Counter from './components/Counter';
import Form from './components/Form';
import Button from './components/Button';
import Email from './components/Email';
import List from './components/List';


function App() {
  const name = 'João'
  const NameUpper = name.toUpperCase()
  const url = 'https://via.placeholder.com/150'

  const pessoa = {
    nome : 'Jorge',
    idade : 17,
    cidade : 'Rio Preto',
    profissao : 'Carpinteiro',
    foto : 'https://via.placeholder.com/200x130'
  }

  const cidades = [
    {
      id : 0,
      nome : "Campinas",
      estado : "SP",
      populacao : 1.223,
      prefeito : "Dário Jorge Giolo Saadi"
    },
    {
      id : 1,
      nome : "São Paulo",
      estado : "SP",
      populacao : 12.33,
      prefeito : "Ricardo Nunes"
    },
    {
      id : 2,
      nome : "Rio de Janeiro",
      estado : "RJ",
      populacao : 6.748,
      prefeito : "Eduardo Paes"
    },
    {
      id : 3,
      nome : "Praia Grande",
      estado : "SP",
      populacao : 330.84,
      prefeito : "Raquel Chini"
    }
  ]

  function Soma(a, b){
    return(
      a + b
    );
  }

  function EventoUm(){
    console.log('Passando Evento 01')
  }

  function EventoDois(){
    console.log('Passando Evento 02')
  }

  return (
    <div className='App'>
      <h1>Hello World</h1>
      <h3>Ola {name}</h3>
      <p>
        Soma de dois números: {Soma(2,8)}
      </p>
      <h3>O nome do usuário é: {NameUpper}</h3>
      <Card
        name = {pessoa.nome}
        age = {pessoa.idade}
        profession = {pessoa.profissao}
        photo = {pessoa.foto}
      />

      <h1>Marcas de carro</h1>
      <Carro
        ano_lancamento={2005}
        marca = "Fiati"
      />
      <Carro />

      <h1>Contador</h1>
      <Counter />

      <Form />
      <Button
        event={EventoUm}
      />
      <Button
        event={EventoDois}
      />
      <h1>Formulário de Email</h1>
      <Email />

      <h1>Renderização de Lista</h1>
      <List lista = {cidades} />
    </div>
  );
}

export default App;
