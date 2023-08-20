import PropTypes from 'prop-types'
import { Image } from 'react-bootstrap'
import './pendingApprovalsRow.css'

const Pending = ({ title, image }) => {
  return (
    <div className="pendingApprovalsRow ps-3 py-2 border-bottom border-success border-opacity-10 d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <i className="bi bi-check-circle-fill"></i>
        <div className="d-flex flex-column ps-2">
          <span className="title fw-semibold">{title}</span>
          <span className="date">08 August 5:37 PM</span>
        </div>
      </div>
      <Image src={image} roundedCircle className="smallImage me-3" />
    </div>
  )
}

Pending.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string
}

export default Pending
