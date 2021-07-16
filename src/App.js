import './App.css';
import Sidebar from './components/Sidebar'
import Resumo from './components/Resumo'
import Activity from './components/Activity'

const App = () => {

  const usuario = [
    {
      "name": "Fausto Silva",
      "course": "Ciência da Computação",
      "avatar": "https://i.imgur.com/aU48TWI.jpg"
    }
  ]

  const overview = [
    {
      "enrolledCourses": 2,
      "nextActivities": 2,
      "onlineStudents": 785
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


  const atividade1 = [
    {
        "course": "Algoritmos e Programação",
        "title": "Enviar arquivo Peter Smokes",
        "image": "https://i.imgur.com/aadwyfC.jpg",
        "deadline": "10/10/20"
    }
]

  const atividade2 = [
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
          <h1>Resumo</h1>
          <div className="Resumo">
            <Resumo/>
          </div>
          
          <h1>Próximas Atividades</h1>
          <div className="ProximasAtividades">
            <Activity content={atividade1}/>
            <Activity content={atividade2}/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App
