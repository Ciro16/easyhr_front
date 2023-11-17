import { Row } from 'react-bootstrap'
import './request.css'
import { NavLink, Outlet } from 'react-router-dom'

const Dependents = () => {
  return (
    <>
      <Row className="requestContainer">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard/dependents" end>Nuevo dependiente</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard/dependents/list">Lista dependientes</NavLink>
          </li>
        </ul>
        <Outlet />
      </Row>
    </>
  )
}

export default Dependents
