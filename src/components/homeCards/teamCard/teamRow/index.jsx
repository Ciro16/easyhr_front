import PropTypes from 'prop-types'
import { Image } from 'react-bootstrap'
import './teamRow.css'

const TeamCardRow = ({ name, image }) => {
  return (
    <div className="teamCardContent ps-3 py-2 border-bottom border-success border-opacity-10 d-flex align-items-center">
      <Image src={image} roundedCircle className="smallImage" />
      <div className="d-flex flex-column ps-2">
        <span className="idNameEmployee">
          ZY198 - <span className="fw-semibold">{name}</span>
        </span>
        <span className="phoneNumbers fw-light">
          <i className="bi bi-phone"></i> <span className="pe-2">98839393</span>
          <i className="bi bi-telephone"></i> 45454
        </span>
      </div>
    </div>
  )
}

TeamCardRow.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string
}

export default TeamCardRow
