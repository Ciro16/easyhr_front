import { Col, Row } from "react-bootstrap";
import "./profile.css";

import BasicInfoCard from "../../components/profileCards/basicInfoCard";
import ReportToAndSchedule from "../../components/profileCards/reportToAndScheduleCard";
import OrganizationalDataCard from "../../components/profileCards/organizationalDataCard";
import SalaryCard from "../../components/profileCards/salaryCard";
import AddressDataCard from "../../components/profileCards/addressDataCard";

import { useEffect, useState } from "react";
import { _httpClient } from "../../utils/httpClient";

import useStore from "../../store/store";

const Profile = () => {
  const { userId } = useStore((state) => state.userInfo);
  const [masterDataInfo, setMasterDataInfo] = useState({});

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const fetchMasterdata = async () => {
      try {
        const today = new Date().toISOString().split("T")[0];

        const { data } = await _httpClient.get(
          `masterdata/employee?begda=${today}&pernr=${userId}`,
          { signal }
        );

        setMasterDataInfo(data[0].employee);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMasterdata();

    return () => {
      abortController.abort();
    };
  }, [userId]);

  return (
    <Row className="profileContainer g-3">
      <Col sm={12} md={7}>
        <BasicInfoCard basicInfo={masterDataInfo.personaldata} />
      </Col>
      <Col sm={12} md={5}>
        <ReportToAndSchedule scheduleInfo={masterDataInfo.plannedWorking} />
      </Col>
      <Col sm={12} md={7}>
        <OrganizationalDataCard
          organizationalDataInfo={masterDataInfo.organization}
        />
      </Col>
      <Col sm={12} md={5}>
        <SalaryCard salaryInfo={masterDataInfo.salary?.[0]} />
      </Col>
      <Col sm={12} md={7}>
        <AddressDataCard addressDataInfo={masterDataInfo.address} />
      </Col>
    </Row>
  );
};

export default Profile;
