import React from 'react'
import Course from '../Course'
import CoursePage from '../CoursePage'
import './styles.css'
import { BrowserRouter as Switch, Route, useRouteMatch} from 'react-router-dom'


const Courses = props => {

    let rota = useRouteMatch();

    return (
        <div className="Courses">
        <Switch>
            <Route path={`${rota.path}/:courseId`}>
                <CoursePage/>
            </Route>
            <Route path={rota.path} exact>
                <h1>Meus cursos</h1>
                <div className="MeusCursos">
                    {props.content.map(info => <Course content={info}/>)}
                </div>
            </Route>
        </Switch>
        </div>
    )
}

export default Courses