import { useEffect, useState } from 'react'
import './App.css';
import Contador from './components/Contador'

const App = () => {
  const [contador, setContador] = useState(0)

  useEffect(() => {
    document.title = `Você clicou ${contador} vezes`
  })

  const atividades = [
    {
        "course": "Algoritmos e Programação",
        "title": "Enviar arquivo Peter Smokes",
        "image": "https://i.imgur.com/aadwyfC.jpg",
        "deadline": "10/10/20"
    },
    {
        "course": "Projeto de Banco de Dados",
        "title": "Enviar o esquema MySQL",
        "image": "https://i.imgur.com/RgQrlAS.jpg",
        "deadline": "10/10/20"
    }
]

  return (
    <div className="App">
        <Contador contador={contador} />
        <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        {atividades.map(atividade => {
          return <div>{atividade.course} <img src={atividade.image} width="300"></img></div>
        })}
    </div>
  );
}

export default App
