import React from 'react'
import './styles.css'
import InfoBox from '../InfoBox'

const Resumo = props => {

    const cursosmat = [
        {
          "text": "Cursos matriculados",
          "number": "02",
          "image": "https://imgur.com/nL6NPkU.png"
        }
      ]

      const atividadesprox = [
        {
          "text": "Atividades próximas",
          "number": "02",
          "image": "https://imgur.com/Zf21doB.png"
        }
      ]

      const alunosonline = [
        {
          "text": "Alunos online",
          "number": "785",
          "image": "https://imgur.com/xpip104.png"
        }
      ]

    return (
        <div className="Itens">
            <div className="CursosMatriculados">
                <InfoBox content={cursosmat}/>
            </div>
            <div className="AtividadesProximas">
                <InfoBox content={atividadesprox}/>
            </div>
            <div className="AlunosOnline">
                <InfoBox content={alunosonline}/>
            </div>
        </div>
    )
}

export default Resumo