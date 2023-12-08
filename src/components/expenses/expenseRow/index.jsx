import PropTypes from 'prop-types'
import { dateDMY } from '../../../utils/date'

const ExpenseRow = ({ deleteExpense, id, tipoGasto, motivo, fecha, proveedor, RNC, concepto, ncf, importe, moneda }) => {
  return (
    <tr>
      <th scope="row"> {id} </th>
      <td> {tipoGasto} </td>
      <td> {motivo} </td>
      <td> {dateDMY(fecha)} </td>
      <td> {proveedor} </td>
      <td> {RNC} </td>
      <td> {concepto} </td>
      <td> {ncf} </td>
      <td> {importe} </td>
      <td> {moneda} </td>
      <td>
        <a onClick={(e) => deleteExpense(e, id)} style={{ cursor: 'pointer' }}>
          <i className="bi bi-trash text-danger"></i>
        </a>
      </td>
    </tr>
  )
}

ExpenseRow.propTypes = {
  deleteExpense: PropTypes.func,
  id: PropTypes.number,
  tipoGasto: PropTypes.string,
  motivo: PropTypes.string,
  fecha: PropTypes.string,
  proveedor: PropTypes.string,
  RNC: PropTypes.string,
  concepto: PropTypes.string,
  ncf: PropTypes.string,
  importe: PropTypes.number,
  moneda: PropTypes.string
}

export default ExpenseRow
