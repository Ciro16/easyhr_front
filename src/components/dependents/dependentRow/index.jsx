import PropTypes from 'prop-types'
import { dateDMY } from '../../../utils/date'

const DependentRow = ({ id, name, lastname, gender, birthdate, birthplace, cedula, pasaporte }) => {
  return (
    <tr>
      <th scope="row"> {id} </th>
      <td> {name} </td>
      <td> {lastname} </td>
      <td> {gender} </td>
      <td> {dateDMY(birthdate)} </td>
      <td> {birthplace} </td>
      <td> {cedula} </td>
      <td> {pasaporte} </td>
    </tr>
  )
}

DependentRow.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  lastname: PropTypes.string,
  gender: PropTypes.string,
  birthdate: PropTypes.string,
  birthplace: PropTypes.string,
  cedula: PropTypes.string,
  pasaporte: PropTypes.string
}

export default DependentRow
