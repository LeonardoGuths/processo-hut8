import React from 'react'
import './styles.css'
import SidebarLinks from '../SidebarLinks'

const Sidebar = props => {
    return (
        <div className="Container">
            <div className="ProfileInfo">
                <img src={props.usuario.avatar} width="100" alt="avatar"></img>
                <h1>{props.usuario.name}</h1>
                <h2>{props.usuario.course}</h2>                    
            </div>
            <div className="Links">
                <SidebarLinks/>
            </div>
        </div>
    )
}

export default Sidebar
