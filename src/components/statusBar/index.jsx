import { Image } from 'react-bootstrap'

import easyHRLogo from '../../assets/statusBar/logo-easyhr.png'
import logoutImage from '../../assets/statusBar/logout.png'
import notifications from '../../assets/statusBar/notifications.png'
import withoutPicture from '../../assets/without_profile.png'

import './statusBar.css'
import { useEffect, useState } from 'react'
import { _httpClient } from '../../utils/httpClient'
import useStore from '../../store/userInfoStore'
import { deleteCookie } from '../../utils/cookiesActions'
import { useNavigate  } from 'react-router-dom'
import ProfileOffcanvas from '../profileOffcanvas';
import { dateYMD } from '../../utils/date'

const StatusBar = () => {
  const { userId } = useStore((state) => state.userInfo)
  const [notificationsCount, setNotificationsCount] = useState(0)
  const [profilePicture, setProfilePicture] = useState('')
  const [basicInfo, setBasicInfo] = useState({})

  const [showProfileCanvas, setShowProfileCanvas] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getPicture = async () => {
      const today = new Date()
      const dateFormatted = dateYMD(today)

      const [notifications, picture, masterData] = await Promise.allSettled([
        _httpClient.get('news/rrhh'),
        _httpClient.get(`masterdata/photo?pernr=${userId}`),
        _httpClient.get(`masterdata/employee?begda=${dateFormatted}&pernr=${userId}`),
      ])

      if (notifications.status === 'fulfilled') {
        setNotificationsCount(notifications.value.data[0].newsItems.length)
      }

      if (picture.status === 'fulfilled') {
        setProfilePicture(
          `data:image/jpeg;base64,${picture.value.data.profilePicture}`
        )
      } else {
        setProfilePicture(withoutPicture)
      }

      if (masterData.status === 'fulfilled') {
        setBasicInfo(masterData.value.data[0].employee.personaldata)
      }
    }

    getPicture()
  }, [])

  const logout = () => {
    const doLogout = confirm('¿Seguro desea salir del sistema?')

    if (doLogout) {
      deleteCookie('_auth_token')
      navigate('/')
    }
  }

  const handleClose = () => setShowProfileCanvas(false);
  const handleShow = () => setShowProfileCanvas(true);

  return (
    <>
      <header className='status-bar bg-white container-fluid px-4 d-flex justify-content-between'>
        <img src={easyHRLogo} alt="easyhr-logo" className='easyhr-logo' />

        <div className="d-flex justify-content-center align-items-center">
          <a onClick={logout} style={{cursor: 'pointer'}} title='Cerrar sesión'>
            <img src={logoutImage} alt="logout" className='logout-icon' />
          </a>

          <div className='position-relative'>
            <img src={notifications} alt="notifications" className='notifications-icon ms-2' />
            
            <span className='notification-count position-absolute top-0 badge rounded-pill bg-danger'>
              {notificationsCount}
            </span>
          </div>
          
          <a className='ms-2' onClick={handleShow} style={{cursor: 'pointer'}} >
            <Image
              src={profilePicture}
              roundedCircle
              className="status-image"
            />
          </a>

          <ProfileOffcanvas showProfileCanvas={showProfileCanvas} handleClose={handleClose} logout={logout} profilePicture={profilePicture} basicInfo={basicInfo} />
        </div>
      </header>
    </>
  )
}

export default StatusBar
