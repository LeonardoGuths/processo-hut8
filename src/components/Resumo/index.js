import React from 'react'
import './styles.css'
import InfoBox from '../InfoBox'

const Resumo = props => {


      const cursosmat = [
          {
            "text": "Cursos matriculados",
            "number": "02",
            "image": "https://imgur.com/nL6NPkU.png"
          },
          {
            "text": "Atividades próximas",
            "number": "02",
            "image": "https://imgur.com/Zf21doB.png"
          },
          {
            "text": "Alunos online",
            "number": `{props.onlineStudents}`,
            "image": "https://imgur.com/xpip104.png"
          }
        ]

    return (
        <div className="Itens">
          {cursosmat.map(infos => <InfoBox content={infos}/>)}
        </div>
    )
}

export default Resumo