import { Row } from 'react-bootstrap'
import './expense.css'
import { NavLink, Outlet } from 'react-router-dom'

const Expenses = () => {
  return (
    <>
      <Row className="requestContainer">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard/expenses" end>Nuevo gasto</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard/expenses/list">Lista gastos</NavLink>
          </li>
        </ul>
        <Outlet />
      </Row>
    </>
  )
}

export default Expenses
