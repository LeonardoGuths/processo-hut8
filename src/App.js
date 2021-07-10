import './App.css';
import Sidebar from './components/Sidebar'

const App = () => {

  const usuario = [
    {
      "name": "Fausto Silva",
      "course": "Ciência da Computação",
      "avatar": "https://i.imgur.com/aU48TWI.jpg"
    }
  ]

  const atividades = [
    {
        "course": "Algoritmos e Programação",
        "title": "Enviar arquivo Peter Smokes",
        "image": "https://i.imgur.com/aadwyfC.jpg",
        "deadline": "10/10/20"
    },
    {
        "course": "Projeto de Banco de Dados",
        "title": "Enviar o esquema MySQL",
        "image": "https://i.imgur.com/RgQrlAS.jpg",
        "deadline": "10/10/20"
    }
]

  return (
    <div className="App">
      <div className="Container">
        
        <div className="Sidebar">
        <Sidebar usuario={usuario}/>
        </div>

        <div className="Content">
          {atividades.map(atividade => {
            return <div>{atividade.course} <img src={atividade.image} width="300"></img></div>
          })}
        </div>

      </div>
    </div>
  );
}

export default App
