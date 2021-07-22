import React from 'react'
import './styles.css'

const InfoBox = props => {
    
    let numberFormatado = props.content.number
        if (props.content.number < 10) {
            numberFormatado = `0${props.content.number}`
        }

    return (
        <div className="InfoBox">
            <div className ="Texts">
                <h1>{numberFormatado}</h1>
                <h2>{props.content.text}</h2>
            </div>
            <div className="ImageIcon">
                <img src={props.content.image} alt={props.content.text}></img>
            </div>
        </div>
    )
}

export default InfoBox