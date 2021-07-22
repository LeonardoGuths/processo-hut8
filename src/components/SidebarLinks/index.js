import React from 'react'
import './styles.css'
import { BrowserRouter as Link } from 'react-router-dom'

const SidebarLinks = props => {
    return (
        <div className="SidebarLinks">
            <ul>
                <li><Link to="/"><h1>Dashboard</h1></Link></li>
                <li><Link to="/courses"><h2>Meus cursos</h2></Link></li>
            </ul>
        </div>
    )
}

export default SidebarLinks