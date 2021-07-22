import React from 'react'
import './styles.css'
import InfoBox from '../InfoBox'

const Resumo = props => {

    return (
        <div className="Itens">
          {props.content.map(infos => <InfoBox content={infos}/>)}
        </div>
    )
}

export default Resumo