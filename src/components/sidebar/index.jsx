import { NavLink } from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar border-end">
      <ul className="ps-0">
        <li className="text-center border-bottom">
          <NavLink to="/dashboard/home">Home</NavLink>
        </li>

        <li className="text-center border-bottom">
          <NavLink to="/dashboard/profile">Perfil</NavLink>
        </li>

        <li className="text-center border-bottom">
          <NavLink to="/dashboard/organizational-chart">Organigrama</NavLink>
        </li>

        <li className="text-center border-bottom">
          <NavLink to="/dashboard/request">Solicitudes</NavLink>
        </li>

        <li className="text-center border-bottom">
          <NavLink to="/dashboard/payroll-flyers">Volantes de Nómina</NavLink>
        </li>

        <li className="text-center border-bottom">
          <NavLink to="/dashboard/directory">Directorio</NavLink>
        </li>

        <li className="text-center border-bottom">
          <NavLink to="/dashboard/birthday">Cumpleaños</NavLink>
        </li>

        <li className="text-center border-bottom">
          <NavLink to="/dashboard/dependents">Dependientes</NavLink>
        </li>

        <li className="text-center border-bottom">
          <NavLink to="/dashboard/expenses">Gastos</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
