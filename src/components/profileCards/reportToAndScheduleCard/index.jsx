import PropTypes from 'prop-types'

import { Image } from 'react-bootstrap'
import './reportToAndScheduleCard.css'

const ReportToAndSchedule = ({ reportToInfo, scheduleInfo, picture }) => {
  return (
    <div className="reportToAndScheduleContainer d-flex flex-column">
      <section className="reportToCard border ps-3 pt-3">
        <header>
          <h6> Reporta a </h6>
        </header>
        <div className="reportToContent py-2 border-bottom border-success border-opacity-10 d-flex align-items-center justify-content-between">
          <div className="d-flex">
            <Image
              src={picture}
              roundedCircle
              className="smallImage"
            />
            <div className="d-flex flex-column ps-2">
              <span className="idNameEmployee">
                <span className="fw-semibold"> {reportToInfo?.s_Ename || '-'} </span>
              </span>
              <span className="position fw-light"> {reportToInfo?.s_Plans || '-'} </span>
            </div>
          </div>

          <div className="phoneNumeber pe-5">
            <i className="bi bi-telephone"></i> {reportToInfo?.s_Conta || '-'}
          </div>
        </div>
      </section>

      <section className="scheduleWorkCard border ps-3 py-3">
        <header>
          <h6> Horario de trabajo </h6>
        </header>

        <div className="scheduleTitleRow d-flex justify-content-between pe-5">
          <span> Hora Inicio </span>
          <span> {scheduleInfo?.sobeg || '-'} </span>
        </div>

        <div className="scheduleTitleRow d-flex justify-content-between pe-5">
          <span> Hora Fin </span>
          <span> {scheduleInfo?.soend || '-'} </span>
        </div>

        <div className="scheduleTitleRow d-flex justify-content-between pe-5">
          <span> Plan de trabajo </span>
          <span> {scheduleInfo?.t_Schkz || '-'} </span>
        </div>

        <div className="scheduleTitleRow d-flex justify-content-between pe-5">
          <span> Horas diarias </span>
          <span> {scheduleInfo?.arbst || '-'} </span>
        </div>

        <div className="scheduleTitleRow d-flex justify-content-between pe-5">
          <span> Indicador de tiempos </span>
          <span> {scheduleInfo?.t_Zterf || '-'} </span>
        </div>
      </section>
    </div>
  )
}

ReportToAndSchedule.propTypes = {
  reportToInfo: PropTypes.object,
  scheduleInfo: PropTypes.object,
  picture: PropTypes.object
}

export default ReportToAndSchedule
