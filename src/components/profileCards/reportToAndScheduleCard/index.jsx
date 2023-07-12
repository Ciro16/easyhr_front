import PropTypes from "prop-types";

import { Image } from "react-bootstrap";
import "./reportToAndScheduleCard.css";

const ReportToAndSchedule = ({ scheduleInfo }) => {
  return (
    <div className="reportToAndScheduleContainer d-flex flex-column">
      <section className="reportToCard border ps-3 pt-3">
        <header>
          <h6> Reporta a </h6>
        </header>
        <div className="reportToContent py-2 border-bottom border-success border-opacity-10 d-flex align-items-center justify-content-between">
          <div className="d-flex">
            <Image
              src="https://thumbs.dreamstime.com/b/hispanic-man-smiling-square-9383237.jpg"
              roundedCircle
              className="smallImage"
            />
            <div className="d-flex flex-column ps-2">
              <span className="idNameEmployee">
                <span className="fw-semibold"> Juan Ramirez </span>
              </span>
              <span className="position fw-light"> Manager - HR </span>
            </div>
          </div>

          <div className="phoneNumeber pe-5">
            <i className="bi bi-telephone"></i> 809 596 8034
          </div>
        </div>
      </section>

      <section className="scheduleWorkCard border ps-3 py-3">
        <header>
          <h6> Horario de trabajo </h6>
        </header>

        <div className="scheduleTitleRow d-flex justify-content-between pe-5">
          <span> Hora Inicio </span>
          <span> {scheduleInfo?.sobeg || "-"} </span>
        </div>

        <div className="scheduleTitleRow d-flex justify-content-between pe-5">
          <span> Hora Fin </span>
          <span> {scheduleInfo?.soend || "-"} </span>
        </div>

        <div className="scheduleTitleRow d-flex justify-content-between pe-5">
          <span> Plan de trabajo </span>
          <span> {scheduleInfo?.t_Schkz || "-"} </span>
        </div>

        <div className="scheduleTitleRow d-flex justify-content-between pe-5">
          <span> Horas diarias </span>
          <span> {scheduleInfo?.arbst || "-"} </span>
        </div>

        <div className="scheduleTitleRow d-flex justify-content-between pe-5">
          <span> Indicador de tiempos </span>
          <span> {scheduleInfo?.t_Zterf || "-"} </span>
        </div>
      </section>
    </div>
  );
};

ReportToAndSchedule.propTypes = {
  scheduleInfo: PropTypes.object,
};

export default ReportToAndSchedule;
