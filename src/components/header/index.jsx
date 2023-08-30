import { Container, Image } from 'react-bootstrap'
import './header.css'
import useStore from '../../store/userInfoStore'
import useRequestStore from '../../store/requestInfoStore'

import { useEffect, useState } from 'react'
import { _httpClient } from '../../utils/httpClient'

import withoutPicture from '../../assets/without_profile.png'
import { dateYMD } from '../../utils/date'

const Header = () => {
  const { userId } = useStore((state) => state.userInfo)
  const [masterDataInfo, setMasterDataInfo] = useState({})

  const setRequestTypes = useRequestStore((state) => state.setRequestTypes)

  const [profilePicture, setProfilePicture] = useState('')

  useEffect(() => {
    const fetchMasterdata = async () => {
      const today = new Date()
      const dateFormatted = dateYMD(today)

      const [dataEmployee, picture, requestTypes] = await Promise.allSettled([
        _httpClient.get(
          `masterdata/employee?begda=${dateFormatted}&pernr=${userId}`
        ),
        _httpClient.get(`masterdata/photo?pernr=${userId}`),
        _httpClient.get('requests/types')
      ])

      if (dataEmployee.status === 'fulfilled') {
        setMasterDataInfo(dataEmployee.value.data[0].employee)
      }

      if (picture.status === 'fulfilled') {
        setProfilePicture(
          `data:image/jpeg;base64,${picture.value.data.profilePicture}`
        )
      } else {
        setProfilePicture(withoutPicture)
      }

      // Para modulo solicitudes
      if (requestTypes.status === 'fulfilled') {
        setRequestTypes(requestTypes.value.data[0].requestItems)
      }
    }

    fetchMasterdata()
  }, [userId])

  return (
    <header className="header">
      <Container fluid>
        <div className="text-center">
          <Image
            src={profilePicture}
            roundedCircle
            className="profileImage my-2"
            alt="Header image"
          />
          <div className="infoHeaderEmployee text-light">
            <div className="idEmployee d-inline me-3">
              {masterDataInfo?.pernr || '-'}
            </div>
            <div className="position d-inline me-3">
              {masterDataInfo.organization?.ename || '-'}
            </div>
            <div className="department d-inline me-3">
              {masterDataInfo.organization?.t_Orgeh || '-'}
            </div>
            <div className="email d-inline">
              {masterDataInfo.organization?.t_Plans || '-'}
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
