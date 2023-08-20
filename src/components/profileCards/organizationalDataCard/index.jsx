import PropTypes from 'prop-types'

import './organizationalDataCard.css'

const OrganizationalDataCard = ({ organizationalDataInfo }) => {
  return (
    <section className="organizationalDataCard border ps-3 pt-3">
      <header>
        <h6> Datos organizativos </h6>
      </header>

      <div className="organizationalInfo my-2 pe-3 d-flex justify-content-between">
        <span> Sociedad </span>
        <span> {organizationalDataInfo?.t_Bukrs || '-'} </span>
      </div>

      <div className="organizationalInfo my-2 pe-3 d-flex justify-content-between">
        <span> Departamento </span>
        <span> {organizationalDataInfo?.t_Orgeh || '-'} </span>
      </div>

      <div className="organizationalInfo my-2 pe-3 d-flex justify-content-between">
        <span> Posición </span>
        <span> {organizationalDataInfo?.t_Plans || '-'} </span>
      </div>

      <div className="organizationalInfo my-2 pe-3 d-flex justify-content-between">
        <span> Puesto </span>
        <span> {organizationalDataInfo?.t_Stell || '-'} </span>
      </div>

      <div className="organizationalInfo my-2 pe-3 d-flex justify-content-between">
        <span> Ubicación </span>
        <span> {organizationalDataInfo?.t_Werks || '-'} </span>
      </div>

      <div className="organizationalInfo my-2 pe-3 d-flex justify-content-between">
        <span> Localidad </span>
        <span> {organizationalDataInfo?.t_Btrtl || '-'} </span>
      </div>
    </section>
  )
}

OrganizationalDataCard.propTypes = {
  organizationalDataInfo: PropTypes.object
}

export default OrganizationalDataCard
