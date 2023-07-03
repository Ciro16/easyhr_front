import { Col, Row } from "react-bootstrap";
import "./Dashboard.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import PropTypes from "prop-types";

function Dashboard({ page }) {
  return (
    <>
      <Header />
      <Row className="dashboardContainer">
        <Col xs={4} sm={2}>
          <Sidebar />
        </Col>

        <Col>
          <div className="pagesContainer py-3">{page}</div>
        </Col>
      </Row>
    </>
  );
}

Dashboard.propTypes = {
  page: PropTypes.element,
};

export default Dashboard;
