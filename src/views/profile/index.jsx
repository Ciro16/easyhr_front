import { Col, Row } from 'react-bootstrap'
import './profile.css'

import BasicInfoCard from '../../components/profileCards/basicInfoCard'
import ReportToAndSchedule from '../../components/profileCards/reportToAndScheduleCard'
import OrganizationalDataCard from '../../components/profileCards/organizationalDataCard'
import SalaryCard from '../../components/profileCards/salaryCard'
import AddressDataCard from '../../components/profileCards/addressDataCard'

import withoutImage from '../../assets/without_profile.png'

import { useEffect, useState } from 'react'
import { _httpClient } from '../../utils/httpClient'

import useStore from '../../store/userInfoStore'
import { dateYMD } from '../../utils/date'

const Profile = () => {
  const { userId } = useStore((state) => state.userInfo)
  const [masterDataInfo, setMasterDataInfo] = useState({})
  const [picture, setPicture] = useState(null)

  useEffect(() => {
    const fetchMasterdata = async () => {
      const today = new Date()

      const dateFormatted = dateYMD(today)

      const dataEmployee = await _httpClient.get(
        `masterdata/employee?begda=${dateFormatted}&pernr=${userId}`
      )
      setMasterDataInfo(dataEmployee.data[0].employee)

      const picture = await _httpClient.get(
        `masterdata/photo?pernr=${dataEmployee.data[0].employee.organization.s_Pernr}`
      )
      setPicture(`data:image/jpeg;base64,${picture.data.profilePicture}`)
    }

    fetchMasterdata()
  }, [userId])

  return (
    <Row className="profileContainer g-3">
      <Col sm={12} md={7}>
        <BasicInfoCard basicInfo={masterDataInfo.personaldata} />
      </Col>
      <Col sm={12} md={5}>
        <ReportToAndSchedule
          reportToInfo={masterDataInfo.organization}
          scheduleInfo={masterDataInfo.plannedWorking}
          picture={picture ?? withoutImage}
        />
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
  )
}

export default Profile
