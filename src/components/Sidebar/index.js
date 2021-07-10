import React from 'react'
import './styles.css'

const Sidebar = props => {
    return (
        <div className="Container">
            <div className="SidebarHead">
                    <img src={props.usuario.map(img => img.avatar)} width="100"></img>
                    <h1>{props.usuario.map(nome => nome.name)}</h1>
                    <h2>{props.usuario.map(curso => curso.course)}</h2>
            </div>
        </div>
    )
}

export default Sidebar