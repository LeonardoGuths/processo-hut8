import React from 'react'
import './styles.css'

const Contador = props => {
    return (
        <div className="Contador">
            <h1>{props.contador}</h1>
        </div>
    )
}

export default Contador