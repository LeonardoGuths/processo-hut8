import React, { useEffect, useState } from 'react'
import './App.css';
import Sidebar from './components/Sidebar'
import Resumo from './components/Resumo'
import Activity from './components/Activity'
import { getUser , getCourses } from './services/requests'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



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

  const resumoDashboard = [
    {
      "text": "Cursos matriculados",
      "number": `${user?.overview?.enrolledCourses}`,
      "image": "https://imgur.com/nL6NPkU.png"
    },
    {
      "text": "Atividades próximas",
      "number": `${user?.overview?.nextActivities}`,
      "image": "https://imgur.com/Zf21doB.png"
    },
    {
      "text": "Alunos online",
      "number": `${user?.overview?.onlineStudents}`,
      "image": "https://imgur.com/xpip104.png"
    }
  ]

  const routes = [
    {
      path: '/',
      exact: true,
      main: () =>  
      <div className="Content">
        <h1>Resumo</h1>
        <div className="Resumo">
          <Resumo content={resumoDashboard}/>
        </div>
        
        <h1>Próximas Atividades</h1>
        <div className="ProximasAtividades">
          {user?.nextActivities?.map(info => <Activity content={info}/>)}
        </div>
      </div>
    },
    {
      path: '/courses',
      main: () =>
      <div className="Content">
        <h1>Meus cursos</h1>
        <div className="MeusCursos">
          {courses?.map(info => <Activity content={info}/>)}
        </div>
      </div>
    }
  ]

  return (
    <div className="App">
    <Router>
      <div className="Container">
        
        <div className="Sidebar">
        <Sidebar usuario={user}/>
        </div>

        <div className="Content">
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
        </div>

      </div>
    </Router>
    </div>
  );
}

export default App
