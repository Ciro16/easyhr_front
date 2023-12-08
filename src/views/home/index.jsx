import { Col, Row } from 'react-bootstrap'
import './home.css'
import antiguedad from '../../assets/home/antiguedad.png'
import diasVacaciones from '../../assets/home/diasVacaciones.png'
import diasDisfrutados from '../../assets/home/diasDisfrutados.png'
import tardanzas from '../../assets/home/tardanzas.png'
import ausencias from '../../assets/home/ausencias.png'
import devengadoALaFecha from '../../assets/home/devengadoALaFecha.png'

import HomeCard from '../../components/homeCard'
import Notification from '../../components/notifications'
import Task from '../../components/Tasks'
import { useEffect, useState } from 'react'
import { _httpClient } from '../../utils/httpClient'
import useStore from '../../store/userInfoStore'
import { dateYMD } from '../../utils/date'
 
const Home = () => {
  const { userId } = useStore((state) => state.userInfo)
  const [dashboardData, setDashboardData] = useState([])
  const [notifications, setNotifications] = useState([])
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getDashboardData = async () => {
      try {
        const response = await _httpClient.get(
          `masterdata/dashdata?pernr=${userId}&begda=${dateYMD(new Date())}`
        )

        if (response.status === 200) {
          setDashboardData(response.data.dashboardItems)
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }

    getDashboardData()

    const getNotifications = async () => {
      try {
        const response = await _httpClient.get('news/rrhh')

        if (response.status === 200) {
          setNotifications(response.data[0].newsItems)
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }

    getNotifications()

    const getTasks = async () => {
      try {
        const response = await _httpClient.get(
          `masterdata/tasks?pernr=${userId}`
        )

        if (response.status === 200) {
          setTasks(response.data[0].taskItems)
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }

    getTasks()
  }, [])
  
  return (
    <>
      <Row className="homeContainer g-3">
        <HomeCard title='Antiguedad' value={dashboardData.lates} bgColor='#00c0ef' image={antiguedad} />
        <HomeCard title='Días vacaciones' value={dashboardData.vacat} bgColor='#605ca8' image={diasVacaciones} />
        <HomeCard title='Días disfrutados' value={dashboardData.enjoy} bgColor='#0073b6' image={diasDisfrutados} progressBar={true} />
        <HomeCard title='Tardanzas' value={dashboardData.servt} bgColor='#dd4c39' image={tardanzas} />
        <HomeCard title='Ausencias' value={dashboardData.absen} bgColor='#ff841a' image={ausencias} />
        <HomeCard title='Devengado a la fecha' value={dashboardData.gaint} bgColor='#dd4c39' image={devengadoALaFecha} />
      </Row>

      <Row>
        <Col md={6} lg={6}> 
          <div className='notifications-container'>
            <h2 className='notifications-title'>Notificaciones</h2>
            <div className={
              notifications.length > 0 ? 'notifications' : 'notifications d-flex justify-content-center align-items-center'
            }>
              {
                notifications.length > 0 
                  ? notifications.map(({title, messa, aedtm}) => (
                      <Notification key={crypto.randomUUID()} title={title} description={messa} date={aedtm}/>
                    ))
                  : <p>No hay notificaciones</p>
                }
            </div>
          </div>
        </Col>

        <Col md={6} lg={6}>
          <div className='tasks-container'>
            <h2 className='tasks-title'>Tareas pendientes</h2>
            <div className={tasks.length > 0 ? 'tasks' : 'tasks d-flex justify-content-center align-items-center'}>
              {
                tasks.length > 0 
                  ? tasks.map(({tmart_text, begda}) => (
                      <Task key={crypto.randomUUID()} description={tmart_text} todayDate={begda}/>
                    ))
                  : <p>No hay tareas pendientes</p>
              }
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Home
