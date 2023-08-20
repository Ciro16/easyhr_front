import { Link } from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar border-end">
      <ul className="ps-0">
        <li className="text-center  border-bottom">
          <Link to="/dashboard">Home</Link>
        </li>

        <li className="text-center  border-bottom">
          <Link to="/dashboard/profile">Perfil</Link>
        </li>

        <li className="text-center  border-bottom">
          <Link to="/dashboard/organizational-chart">Organigrama</Link>
        </li>

        {/* <li className="text-center  border-bottom">
            <Link to="/dashboard/request">Solicitudes</Link>
          </li> */}
      </ul>
    </div>
  )
}

export default Sidebar
