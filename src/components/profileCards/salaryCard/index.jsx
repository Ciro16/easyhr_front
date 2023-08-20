import PropTypes from 'prop-types'

import './salaryCard.css'

const SalaryCard = ({ salaryInfo }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2
  })

  return (
    <section className="salaryCard border ps-3 pt-3">
      <header>
        <h6> Salario </h6>
      </header>

      <div className="salaryInfo my-2 pe-5 py-2 border-bottom d-flex justify-content-between">
        <span className="fw-semibold"> Importe </span>
        <span> {formatter.format(salaryInfo?.betrg) || '-'} </span>
      </div>

      <div className="salaryInfo my-2 pe-5 py-2 border-bottom d-flex justify-content-between">
        <span className="fw-semibold"> Moneda </span>
        <span> {salaryInfo?.waers} </span>
      </div>

      <div className="salaryInfo my-2 pe-5 py-2 border-bottom d-flex justify-content-between">
        <span className="fw-semibold"> Salario promedio diario </span>
        <span> {formatter.format(salaryInfo?.betrg / 23.83)} </span>
      </div>

      <div className="salaryInfo my-2 pe-5 py-2 border-bottom d-flex justify-content-between">
        <span className="fw-semibold"> Paquete anual </span>
        <span> {formatter.format(salaryInfo?.betrg * 12)} </span>
      </div>
    </section>
  )
}

SalaryCard.propTypes = {
  salaryInfo: PropTypes.object
}

export default SalaryCard
