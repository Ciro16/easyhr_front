import { useEffect, useState } from 'react'
import './summaryTimes.css'
import { _httpClient } from '../../../../utils/httpClient'
import useStore from '../../../../store/userInfoStore'
import { dateDMY } from '../../../../utils/date'

const SummaryTimes = () => {
  const { userId } = useStore((state) => state.userInfo)
  const [summaryTimesData, setSummaryTimesData] = useState({})

  useEffect(() => {
    const getTimes = async () => {
      const dataSummaryTimes = await _httpClient.post('employees/absencesdetails', {
        pernr: userId,
        yeart: new Date().getFullYear()
      })

      setSummaryTimesData(dataSummaryTimes.data[0].absencesItems[0])
    }

    getTimes()
  }, [])

  return <aside className='col-6'>
    <div className="summaryTimesContainer">
      <div className="timesHeader">
        <span>Resumen de tiempos</span>
      </div>

      <div className="timesRow">
        <span>Año actual</span>
        <span>{ summaryTimesData.yeart || '-' }</span>
      </div>

      <div className="timesRow">
        <span>Fecha inicio disfrute</span>
        <span>{ summaryTimesData.lastb ? dateDMY(summaryTimesData.lastb) : '-' }</span>
      </div>

      <div className="timesRow mb-4">
        <span>Fecha fin disfrute</span>
        <span>{ summaryTimesData.laste ? dateDMY(summaryTimesData.laste) : '-' }</span>
      </div>

      <div className="timesRow">
        <span>Dias de disfrute (ley)</span>
        <span>{ summaryTimesData.daysl ?? '-' }</span>
      </div>

      <div className="timesRow">
        <span>Dias disfrutados al momento</span>
        <span>{ summaryTimesData.dayso ?? '-'}</span>
      </div>

      <div className="timesRow">
        <span>Dias disfrute pendientes</span>
        <span>{ summaryTimesData.daysw ?? '-'}</span>
      </div>

      <div className="timesRow">
        <span>Horas de absentismo</span>
        <span>{ summaryTimesData.stdaz ?? '-'}</span>
      </div>

      <div className="timesRow">
        <span>Dias de absentismo</span>
        <span>{ summaryTimesData.abwtg ?? '-'}</span>
      </div>
    </div>
  </aside>
}

export default SummaryTimes
