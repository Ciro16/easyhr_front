import { useEffect, useState } from 'react'
import './payrollFlyers.css'
import { _httpClient } from '../../utils/httpClient'
import { moneyFormatter } from '../../utils/numberFomatter'
import PayrollSummaryModal from '../../components/modals/payrollSummaryModal'
import { dateDMY, dateYMD } from '../../utils/date'
import { NavLink } from 'react-router-dom'
import useStore from '../../store/userInfoStore'

import PropTypes from 'prop-types'

const PayrollFlyers = ({ showDetail }) => {
  const statusStyles = {
    display: 'block',
    backgroundColor: 'green',
    height: '20px',
    width: '20px',
    marginLeft: '15px',
    borderRadius: '50%'
  }

  const formatter = moneyFormatter('currency', 'USD').format

  const { userId } = useStore((state) => state.userInfo)
  const [payrollSummaryInfo, setPayrollSummaryInfo] = useState({})
  const [payrollTableInfo, setPayrollTableInfo] = useState([])

  const [modalShow, setModalShow] = useState(false)

  const fetchPayrollSummary = async (e) => {
    const month = e?.target.value ?? '00'

    try {
      const { data } = await _httpClient.get(`payroll/summary?pernr=${userId}&efeda=${dateYMD(new Date())}&month=${month}`)

      const { data: details } = await _httpClient.get(`payroll/directory?pernr=${userId}&yeart=2023`)
      setPayrollSummaryInfo(data[0].summary[0])
      setPayrollTableInfo(details[0].directory)
    } catch (error) {
      setPayrollSummaryInfo({})
    }
  }

  useEffect(() => {
    fetchPayrollSummary()
  }, [])

  return (
    <div className="container ms-0">
      <h2>Volantes de pago</h2>

      <div style={{ borderBottom: '1px solid #dcdcdc' }}></div>

      <div className="container ms-0">
        <select defaultValue="00" onChange={(e) => fetchPayrollSummary(e)} className="form-select mt-3 w-25" aria-label="Default select example">
          <option value="00">Resumen del año</option>
          <option value="01">Enero</option>
          <option value="02">Febrero</option>
          <option value="03">Marzo</option>
          <option value="04">Abril</option>
          <option value="05">Mayo</option>
          <option value="06">Junio</option>
          <option value="07">Julio</option>
          <option value="08">Agosto</option>
          <option value="09">Septiembre</option>
          <option value="10">Octubre</option>
          <option value="11">Noviembre</option>
          <option value="12">Dciembre</option>
        </select>

        <div className="row summary-payroll ms-4 mt-4 align-items-start">
          <div className="col">
            <p className="title fw-bold mb-2">AFP</p>
            <span className="amount">{ payrollSummaryInfo?.ssfun ? formatter(payrollSummaryInfo?.ssfun) : '-' }</span>
          </div>

          <div className="col">
            <p className="title fw-bold mb-2">SFS</p>
            <span className="amount">{ payrollSummaryInfo?.sfsfu ? formatter(payrollSummaryInfo?.sfsfu) : '-' }</span>
          </div>

          <div className="col">
            <p className="title fw-bold mb-2">ISR</p>
            <span className="amount">{ payrollSummaryInfo?.taxes ? formatter(payrollSummaryInfo?.taxes) : '-' }</span>
          </div>

          <div className="col">
            <p className="title fw-bold mb-2">Otros desc.</p>
            <span className="amount">{ payrollSummaryInfo?.disco ? formatter(payrollSummaryInfo?.disco) : '-'}</span>
          </div>

          <div className="col">
            <p className="title fw-bold mb-2">Total devengado</p>
            <span className="amount">{ payrollSummaryInfo?.netsa ? formatter(payrollSummaryInfo?.netsa) : '-' }</span>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center mt-5 mb-4">
        <i className="bi bi-card-checklist fs-5 me-2"></i>
        <h4 className="mb-0">Lista de períodos</h4>
      </div>

      <div className='listPayrollContainer'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Directorio No.</th>
              <th scope="col">Tipo de nómina</th>
              <th scope="col">Fecha inicio</th>
              <th scope="col">Fecha fin</th>
              <th scope="col" style={{ textAlign: 'center' }}>Devengado total</th>
              <th scope="col">Estatus</th>
              <th scope="col">Registrado el</th>
            </tr>
          </thead>
          <tbody>
            {
              payrollTableInfo.length > 0 && payrollTableInfo.map(payroll => {
                const startDate = dateYMD(new Date(payroll.fpbeg))
                const endDate = dateYMD(new Date(payroll.fpend))
                return (
                  <tr key={payroll.dirid}>
                    <th scope="row">
                      <NavLink onClick={() => setModalShow(true)} to={
                        {
                          pathname: `/dashboard/payroll-flyers/${payroll.dirid}/${payroll.actin}`,
                          search: `?begda=${startDate}&endda=${endDate}`
                        }
                      }>
                        { payroll.dirid }
                      </NavLink>
                    </th>
                    <td>{ payroll.actin }</td>
                    <td>{ dateDMY(payroll.fpbeg) }</td>
                    <td>{ dateDMY(payroll.fpend) }</td>
                    <td style={{ textAlign: 'right', paddingRight: '55px' }}>{ formatter(payroll.betrg) }</td>
                    <td><span style={statusStyles}></span></td>
                    <td>{ dateDMY(payroll.rundt) }</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      {
        showDetail ? <PayrollSummaryModal show={modalShow} onHide={() => setModalShow(false)} /> : null
      }
    </div>
  )
}

PayrollFlyers.propTypes = {
  showDetail: PropTypes.bool
}

export default PayrollFlyers
