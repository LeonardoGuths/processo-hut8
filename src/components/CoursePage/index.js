import React, { useState, useEffect }from 'react'
import './styles.css'
import { useParams } from 'react-router-dom'
import { getCourse } from '../../services/requests'
import Professor from '../Professor'
import Resumo from '../Resumo'
import Activity from '../Activity'

const CoursePage = () => {

    let { courseId } = useParams();
    const [course, setCourse] = useState([])

    useEffect(() => {
  
      const getCourseData = async () => {
        try {
          const { data } = await getCourse({courseId})
          setCourse(data)
        } catch(err) {
          console.log(err)
        }
      }

      getCourseData()
    }, [])


    const resumoCurso = [
        {
          "text": "Atividades próximas",
          "number": `${course?.overview?.nextActivities}`,
          "image": "https://imgur.com/Zf21doB.png"
        },
        {
          "text": "Créditos",
          "number": `${course?.overview?.credits}`,
          "image": "https://imgur.com/nL6NPkU.png"
        },
        {
          "text": "Alunos matriculados",
          "number": `${course?.overview?.enrolledStudents}`,
          "image": "https://imgur.com/xpip104.png"
        }
      ]

    return (
        <div className="CoursePage">
            <div className="Cabecalho">
                <div className="NomeTurma">
                    <h1>{course.course}</h1>
                    <h2>Turma {course.class}</h2>
                </div>
                <div className="Professor">
                <Professor name={course?.teacher?.name} avatar={course?.teacher?.avatar}/>
                </div>
            </div>
            <div className="Resumo">
                <Resumo content={resumoCurso}/>
            </div>
            <h1>Próximas atividades</h1>
            <div className="ProximasAtividade">
                {course?.nextActivities?.map(info => <Activity content={info}/>)}
            </div>
        </div>
    )
}

export default CoursePage