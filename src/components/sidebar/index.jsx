import { Link, Outlet } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li className="text-center pb-3">
          <Link to="/dashboard/profile">Perfil</Link>
        </li>

        <li className="text-center pb-3">
          <Link to="/page2">page2</Link>
        </li>

        <li className="text-center pb-3">
          <Link to="/page3">page3</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Sidebar;
