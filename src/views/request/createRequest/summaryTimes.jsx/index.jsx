import './summaryTimes.css'

const SummaryTimes = () => {
  return <aside className='col-6'>
    <div className="summaryTimesContainer">
      <div className="timesHeader">
        <span>Resumen de tiempos</span>
        <span>Dias(s)</span>
      </div>
      <div className="timesRow">
        <span>Dias de disfrute por ley</span>
        <span>14</span>
      </div>

      <div className="timesRow">
        <span>Horas de absentismo</span>
        <span>180hrs</span>
      </div>

      <div className="timesRow">
        <span>Dias de absentismo</span>
        <span>8</span>
      </div>

      <div className="timesRow">
        <span>Dias vacaciones disponibles</span>
        <span>14</span>
      </div>

      <div className="timesRow">
        <span>Consumo dias vacaciones</span>
        <span>0</span>
      </div>
    </div>
  </aside>
}

export default SummaryTimes
