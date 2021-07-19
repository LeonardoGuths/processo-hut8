import React from 'react'
import './styles.css'

const Activity = props => {
    return (
        <div className="Activity">
            <div className="ImageIcon">
                <img src={props.content.image} height="140" width="235" alt={props.content.course}></img>
            </div>
            <div className="Texts">
                <h2>{props.content.course}</h2>
                <h1>{props.content.title}</h1>
                <h3>{props.content.deadline}</h3>
            </div>
        </div>
    )
}

export default Activity