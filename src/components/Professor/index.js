import React from 'react'
import './styles.css'

const Professor = props => {
    return (
        <div className="Professor">
            <div className="ImageIcon">
                <img src={props.avatar} alt={props.name}></img>
            </div>
            <div className ="Texts">
                <h1>{props.name}</h1>
                <h2>Professor responsável</h2>
            </div>
        </div>
    )
}

export default Professor