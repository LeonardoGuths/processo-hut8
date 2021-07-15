import React from 'react'
import './styles.css'

const Sidebar = props => {
    return (
        <div className="Container">
            <div className="ProfileInfo">
                    <img src={props.usuario.map(img => img.avatar)} width="100"></img>
                    <h1>{props.usuario.map(nome => nome.name)}</h1>
                    <h2>{props.usuario.map(curso => curso.course)}</h2>
            </div>
            <div className="Links">
                <h1>Dashboard</h1>
                <br></br>
                <a href="www.google.com.br">Meus cursos</a>
            </div>
        </div>
    )
}

export default Sidebar