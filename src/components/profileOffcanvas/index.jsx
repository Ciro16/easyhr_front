import Offcanvas from 'react-bootstrap/Offcanvas';
import { Image } from 'react-bootstrap'

import { useNavigate  } from 'react-router-dom'

import './profileOffcanvas.css'

const ProfileOffcanvas = ({ showProfileCanvas, handleClose, logout, profilePicture, basicInfo }) => {
  const navigate = useNavigate();

  const redirectToProfile = () => {
    handleClose()
    navigate('profile')
  }

  return (
    <Offcanvas show={showProfileCanvas} onHide={handleClose} placement='end' className='d-flex flex-column justify-content-between' >
      <Offcanvas.Header closeButton className='border-bottom'>
        <div className="d-flex flex-column mx-auto">
          <Image src={profilePicture} roundedCircle className="status-offcanvas mx-auto"/>
          <p className='mb-0 text-center'>{basicInfo?.mailp?.toLowerCase() || '-'}</p>

          <div className='mt-3'>
            <button onClick={redirectToProfile} type="button" class="btn btn-light me-2">Mi perfil</button>
            <button onClick={logout} type="button" class="btn btn-outline-danger">Cerrar sesión</button>
          </div>
        </div>
      </Offcanvas.Header>
      <Offcanvas.Body className='flex-grow-0'>
      <ul class="list-group list-group-flush">
        <li class="list-group-item border-bottom-0 py-1 ps-1">
          <a href="https://easyhr.com.do/experiencia-easyhr/" target='_blank' className='text-dark-emphasis link-underline link-underline-opacity-0'>
            <i class="bi bi-rocket-takeoff me-2"></i> 
            Recorrido
          </a>
        </li>

        <li class="list-group-item border-bottom-0 py-1 ps-1">
          <a href="https://easyhr.com.do/docs/" target='_blank' className='text-dark-emphasis link-underline link-underline-opacity-0'>
            <i class="bi bi-question-circle me-2"></i>
            Ayuda
          </a>
        </li>

        <li class="list-group-item border-bottom-0 py-1 ps-1">
          <a href="https://colladosolucionesempresariales.freshdesk.com/" target='_blank' className='text-dark-emphasis link-underline link-underline-opacity-0'>
            <i class="bi bi-headset me-2"></i>
            Soporte técnico
          </a>
        </li>

        <li class="list-group-item border-bottom-0 py-1 ps-1">
          <a href="https://easyhr.com.do/blog/" target='_blank' className='text-dark-emphasis link-underline link-underline-opacity-0'>
            <i class="bi bi-arrow-repeat me-2"></i>
            Actualizaciones
          </a>
        </li>
      </ul>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ProfileOffcanvas