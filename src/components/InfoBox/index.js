import React from 'react'
import './styles.css'

const InfoBox = props => {
    return (
        <div className="InfoBox">
            <div className ="Texts">
                <h1>{props.content.number}</h1>
                <h2>{props.content.text}</h2>
            </div>
            <div className="ImageIcon">
                <img src={props.content.image} alt={props.content.text}></img>
            </div>
        </div>
    )
}

export default InfoBox