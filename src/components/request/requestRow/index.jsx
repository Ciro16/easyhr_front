import PropTypes from 'prop-types'
import { dateDMY } from '../../../utils/date'

const RequestRow = ({ deleteRequest, id, t_Retyp, t_Motiv, begda, endda, stext, priov }) => {
  return (
    <tr>
      <th scope="row"> {id} </th>
      <td> {t_Retyp} </td>
      <td> {t_Motiv} </td>
      <td> {dateDMY(begda)} </td>
      <td> {dateDMY(endda)} </td>
      <td style={{ maxWidth: '300px' }}>{stext}</td>
      <td> {priov} </td>
      <td>
        <a onClick={(e) => deleteRequest(e, id)} style={{ cursor: 'pointer' }}>
          <i className="bi bi-trash text-danger"></i>
        </a>
      </td>
    </tr>
  )
}

RequestRow.propTypes = {
  deleteRequest: PropTypes.func,
  id: PropTypes.number,
  t_Retyp: PropTypes.string,
  t_Motiv: PropTypes.string,
  begda: PropTypes.string,
  endda: PropTypes.string,
  stext: PropTypes.string,
  priov: PropTypes.string
}

export default RequestRow
