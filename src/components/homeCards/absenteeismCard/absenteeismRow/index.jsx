import PropTypes from 'prop-types'
import './absenteeismRow.css'

const AbsenteeismRow = ({ title, value, endValue }) => {
  const toPercentage = (value / endValue) * 100

  const circularGraphStyles = {
    position: 'relative',
    height: '35px',
    width: '35px',
    borderRadius: '50%',
    background: `conic-gradient(red ${toPercentage * 3.6}deg, #ccc 0deg)`,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <div className="absenteeismRow ps-3 py-2 border-bottom border-success border-opacity-10 d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <div className="circularGraph" style={circularGraphStyles}>
          <span className="graphValue fw-medium">{value}</span>
        </div>

        <div className="d-flex flex-column ps-2">
          <span className="title fw-semibold">{title}</span>
          <span className="date">Available 16 hour(s)</span>
        </div>
      </div>
    </div>
  )
}

AbsenteeismRow.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  endValue: PropTypes.number
}

export default AbsenteeismRow
