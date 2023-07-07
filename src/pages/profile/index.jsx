import { Col, Row } from "react-bootstrap";
import "./profile.css";
import BasicInfoCard from "../../components/profileCards/basicInfoCard";
import ReportToAndSchedule from "../../components/profileCards/reportToAndScheduleCard";
import OrganizationalDataCard from "../../components/profileCards/organizationalDataCard";
import SalaryCard from "../../components/profileCards/salaryCard";

const Profile = () => {
  return (
    <Row className="profileContainer g-3">
      <Col sm={12} md={7}>
        <BasicInfoCard />
      </Col>
      <Col sm={12} md={5}>
        <ReportToAndSchedule />
      </Col>
      <Col sm={12} md={7}>
        <OrganizationalDataCard />
      </Col>
      <Col sm={12} md={5}>
        <SalaryCard />
      </Col>
    </Row>
  );
};

export default Profile;
