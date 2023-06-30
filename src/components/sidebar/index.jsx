import { Link, Outlet } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="ps-0 border-end">
        <li className="text-center  border-bottom">
          <Link to="/dashboard">Home</Link>
        </li>

        <li className="text-center  border-bottom">
          <Link to="/dashboard/profile">Perfil</Link>
        </li>

        <li className="text-center  border-bottom">
          <Link to="/dashboard/organization-chart">Organigrama</Link>
        </li>

        <li className="text-center  border-bottom">
          <Link to="/page3">Solicitudes</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Sidebar;
