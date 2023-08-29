import { Row } from 'react-bootstrap'
import './request.css'
import { NavLink, Outlet } from 'react-router-dom'

const Request = () => {
  return (
    <>
      <Row className="requestContainer">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard/request" end>Nueva solicitud</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard/request/list">Lista de solicitudes</NavLink>
          </li>
        </ul>
        <Outlet />
      </Row>
    </>
  )
}

export default Request
