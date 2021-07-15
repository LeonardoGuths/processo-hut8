import React from 'react'
import './styles.css'

const InfoBox = props => {
    return (
        <div className="InfoBox">
            <div className ="Texts">
                <h1>{props.content.map(numero => numero.number)}</h1>
                <h2>{props.content.map(texto => texto.text)}</h2>
            </div>
            <div className="ImageIcon">
                <img src={props.content.map(icon => icon.image)}></img>
            </div>
        </div>
    )
}

export default InfoBox