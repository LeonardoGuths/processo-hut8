import api from './api'

export const getUser = () => api.get('/user')
export const getCourses = () => api.get('/courses')
export const getCourse = props => api.get(`/courses/${props.courseId}`)
