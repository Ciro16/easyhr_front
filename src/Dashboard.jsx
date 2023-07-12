import { Col, Row } from "react-bootstrap";
import "./Dashboard.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <Header />
      <Row className="dashboardContainer">
        <Col xs={4} sm={2}>
          <Sidebar />
        </Col>

        <Col>
          <div className="pagesContainer py-3">
            <Outlet />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
