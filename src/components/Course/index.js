import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

const Course = props => {
    return (
        <Link to={`/courses/${props.content.id}`}>
        <div className="Course">
            <div className="ImageIcon">
                <img src={props.content.image} height="140" width="235" alt={props.content.course}></img>
            </div>
            <div className="Texts">
                <h2>{props.content.type}</h2>
                <h1>{props.content.course}</h1>
                <h3>{props.content.class}</h3>
            </div>
        </div>
        </Link>
    )
}

export default Course