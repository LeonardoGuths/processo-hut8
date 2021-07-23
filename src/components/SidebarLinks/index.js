import React from 'react'
import './styles.css'
import {NavLink} from 'react-router-dom'

const SidebarLinks = () => {
    return (
        <div className="SidebarLinks">
            <ul>
                <li><NavLink exact to="/" className="sidebar-navlink" activeClassName="sidebar-navlink-active">Dashboard</NavLink></li>
                <li><NavLink to="/courses"className="sidebar-navlink" activeClassName="sidebar-navlink-active">Meus cursos</NavLink></li>
            </ul>
        </div>
    )
}

export default SidebarLinks