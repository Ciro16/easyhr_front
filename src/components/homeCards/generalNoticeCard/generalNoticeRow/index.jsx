import PropTypes from 'prop-types'
import { Image } from 'react-bootstrap'
import './generalNoticeRow.css'

const GeneralNoticeCardRow = ({ title, description, image }) => {
  return (
    <div className="generalNoticeCardContent ps-3 py-2 border-bottom border-success border-opacity-10">
      <p className="mb-0 titleRow">{title}</p>
      <p className="mb-0 textRow">{description}</p>
      <div className="d-flex justify-content-between align-items-center">
        <span className="date">08 August 5:37 PM</span>
        <Image src={image} className="smallImage me-3" roundedCircle />
      </div>
    </div>
  )
}

GeneralNoticeCardRow.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
}

export default GeneralNoticeCardRow
