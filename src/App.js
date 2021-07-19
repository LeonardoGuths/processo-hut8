import React, { useEffect, useState } from 'react'
import './App.css';
import Sidebar from './components/Sidebar'
import Resumo from './components/Resumo'
import Activity from './components/Activity'
import { getUser , getCourses } from './services/requests'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'



const App = () => {

  const [user, setUser] = useState([])
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await getUser()
        // console.log(data)
        setUser(data)
      } catch(err) {
        console.log(err)
      }
    }

    const getCoursesData = async () => {
      try {
        const { data } = await getCourses()
        // console.log(data)
        setCourses(data)
      } catch(err) {
        console.log(err)
      }
    }

    getUserData()
    getCoursesData()
  }, [])

  const routes = [
    {
      path: '/',
      exact: true,
      main: () =>  
      <div className="Content">
        <h1>Resumo</h1>
        <div className="Resumo">
          <Resumo conteudo={user.overview}/>
        </div>
        
        <h1>Próximas Atividades</h1>
        <div className="ProximasAtividades">
          {user.nextActivities.map(info => <Activity content={info}/>)}
        </div>
      </div>
    },
    {
      path: '/courses',
      main: () => <h1>Courses</h1>
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
        <Sidebar usuario={user}/>
        </div>

        <div className="Testes">
          <Router>
            <ul>
              <li>
                <Link to="/">dashboard test</Link>
              </li>
              <li>
                <Link to="/courses">courses test</Link>
              </li>
            </ul>
            <Switch>
              {routes.map((route, i) => (
                <Route 
                key={i} 
                path={route.path} 
                exact={route.exact} 
                children={<route.main/>}
                />
              ))}
            </Switch>
          </Router>
        </div>

      </div>
    </div>
  );
}

export default App
