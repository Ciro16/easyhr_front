import { Col, Row } from "react-bootstrap";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import PropTypes from "prop-types";

function Dashboard(props) {
  const { page } = props;
  return (
    <>
      <Header />
      <Row>
        <Col xs={4} sm={2}>
          <Sidebar />
        </Col>

        <Col>
          <div className="content">{page && page}</div>
        </Col>
      </Row>
    </>
  );
}

Dashboard.propTypes = {
  page: PropTypes.element,
};

export default Dashboard;
