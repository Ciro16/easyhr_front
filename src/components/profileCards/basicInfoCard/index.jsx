import PropTypes from 'prop-types'

import formatDate from '../../../utils/date'
import './basicInfoCard.css'

const BasicInfoCard = ({ basicInfo }) => {
  const date = formatDate(basicInfo?.gbdat)

  return (
    <section className="basicInfoCard border ps-3 pt-3">
      <header>
        <h6> Información básica</h6>
      </header>

      <div className="basiInfo my-2 pe-3 d-flex justify-content-between">
        <span> Nombre completo </span>
        <span> {`${basicInfo?.vorna || '-'} ${basicInfo?.nachn}`} </span>
      </div>

      <div className="basiInfo my-2 pe-3 d-flex justify-content-between">
        <span> Tratamiento </span>
        <span> {basicInfo?.t_Anrex || '-'} </span>
      </div>

      <div className="basiInfo my-2 pe-3 d-flex justify-content-between">
        <span> Género </span>
        <span> {basicInfo?.t_Gesch || '-'} </span>
      </div>

      <div className="basiInfo my-2 pe-3 d-flex justify-content-between">
        <span> Estado civil </span>
        <span> {basicInfo?.t_Famst || '-'} </span>
      </div>

      <div className="basiInfo my-2 pe-3 d-flex justify-content-between">
        <span> Lugar de nacimiento </span>
        <span> {basicInfo?.gbort || '-'} </span>
      </div>

      <div className="basiInfo my-2 pe-3 d-flex justify-content-between">
        <span> Fecha de nacimiento </span>
        <span> {date} </span>
      </div>

      <div className="basiInfo my-2 pe-3 d-flex justify-content-between">
        <span> No. de Cédula </span>
        <span> {basicInfo?.icnum01 || '-'} </span>
      </div>

      <div className="basiInfo my-2 pe-3 d-flex justify-content-between">
        <span> No. de Pasaporte </span>
        <span> {basicInfo?.icnum02 || '-'} </span>
      </div>

      <div className="basiInfo my-2 pe-3 d-flex justify-content-between">
        <span> No. de Licencia </span>
        <span> {basicInfo?.icnum03 || '-'} </span>
      </div>

      <div className="basiInfo my-2 pe-3 d-flex justify-content-between">
        <span> Nacionalidad </span>
        <span> {basicInfo?.t_Natio || '-'} </span>
      </div>

      <div className="basiInfo my-2 pe-3 d-flex justify-content-between">
        <span> Pais de Nacimiento </span>
        <span> {basicInfo?.t_Gblnd || '-'} </span>
      </div>

      <div className="basiInfo my-2 pe-3 d-flex justify-content-between">
        <span> Teléfono </span>
        <span> {basicInfo?.tel01 || '-'} </span>
      </div>

      <div className="basiInfo my-2 pe-3 d-flex justify-content-between">
        <span> Celular </span>
        <span> {basicInfo?.tel02 || '-'} </span>
      </div>

      <div className="basiInfo my-2 pe-3 d-flex justify-content-between">
        <span> Whatsapp </span>
        <span> {basicInfo?.tel03 || '-'} </span>
      </div>

      <div className="basiInfo my-2 pe-3 d-flex justify-content-between">
        <span> Correo personal </span>
        <span> {basicInfo?.mailp || '-'} </span>
      </div>
    </section>
  )
}

BasicInfoCard.propTypes = {
  basicInfo: PropTypes.object
}

export default BasicInfoCard
