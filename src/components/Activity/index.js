import React from 'react'
import './styles.css'

const Activity = props => {
    return (
        <div className="Activity">
            <div className="ImageIcon">
                <img src={props.content.map(icon => icon.image)} height="140" width="235"></img>
            </div>
            <div className="Texts">
                <h2>{props.content.map(curso => curso.course)}</h2>
                <h1>{props.content.map(titulo => titulo.title)}</h1>
                <h3>{props.content.map(data => data.deadline)}</h3>
            </div>
        </div>
    )
}

export default Activity