// import html2pdf from 'html2pdf.js'
import './organizationalChart.css'
import { useState, useEffect, useRef } from 'react'
import OrganizationalLevel from './organizationalLevel'
import { _httpClient } from '../../utils/httpClient'
import useStore from '../../store/userInfoStore'

import fatherWithoutPicture from '../../assets/father_without_profile.png'
import { dateYMD } from '../../utils/date'

const OrganizationalChart = () => {
  const [chartData, setChartData] = useState([])
  const organizationalChart = useRef(null)

  const { userId } = useStore((state) => state.userInfo)

  useEffect(() => {
    const abortController = new AbortController()
    const { signal } = abortController

    const fetchChartData = async () => {
      try {
        const today = new Date()
        const dateFormatted = dateYMD(today)

        const { data } = await _httpClient.get(
          `chart/employee?begda=${dateFormatted}&pernr=${userId}`,
          { signal }
        )

        const picturesRequest = data[0]?.charting.organization.map((org) =>
          _httpClient.get(`masterdata/photo?pernr=${org.pernr}`)
        )

        const pictures = await Promise.allSettled(picturesRequest)
        pictures.forEach((picture, index) => {
          if (picture.status === 'fulfilled') {
            data[0].charting.organization[index] = {
              ...data[0]?.charting.organization[index],
              picture: `data:image/jpeg;base64,${picture.value.data.profilePicture}`
            }
          }
        })

        setChartData(data)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }

    fetchChartData()

    return () => {
      abortController.abort()
    }
  }, [userId])

  useEffect(() => {
    const scrollElement = organizationalChart.current

    // Movemos la barra de scroll al centro para que el diagrama venga centralizado
    if (scrollElement) {
      scrollElement.scrollLeft =
        (scrollElement.scrollWidth - scrollElement.clientWidth) / 2
    }
  }, [chartData])

  // const printPDF = async () => {
  //   const options = {
  //     margin: [30, 0, 0, 0],
  //     enableLinks: false,
  //     html2canvas: { useCORS: true },
  //     jsPDF: { orientation: 'landscape' }
  //   }

  //   await html2pdf().set(options).from(organizationalChart.current).save()
  // }

  const organigrama = chartData[0]?.charting

  return (
    <div className="chartContainer">
      {/* <div className="organizationalChartButtons">
        <button className="border-0" onClick={printPDF}>
          <i className="bi bi-download"></i>
        </button>
      </div> */}

      {organigrama
        ? (
        <div className="organizationalChart" ref={organizationalChart}>
          <OrganizationalLevel
            father={[
              {
                orgeh: organigrama.mainOrgeh,
                stext: organigrama.stext,
                descr: organigrama.t_Tipun,
                picture: organigrama.picture ?? fatherWithoutPicture
              }
            ]}
            childs={organigrama?.organization}
          />
        </div>
          )
        : null}
    </div>
  )
}

export default OrganizationalChart
