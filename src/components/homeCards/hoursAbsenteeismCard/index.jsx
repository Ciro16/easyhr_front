import PropTypes from 'prop-types'
import './hoursAbsenteeismCard.css'

const HoursAbsenteeismCard = ({ title }) => {
  return (
    <section className="hoursAbsenteeismCard border pt-2">
      <header className="cardHeader border-bottom px-2 d-flex justify-content-between align-items-center">
        <h6>{title}</h6>
      </header>

      <div className="input-group mt-3">
        <input
          type="text"
          className="form-control shadow-sm"
          placeholder="Add notes"
        />

        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Checkout
        </button>
      </div>

      <div className="clockContainer">
        <span className="months">00</span>
        <span>:</span>
        <span className="days">00</span>
        <span>:</span>
        <span className="hours">21</span>
        <span className="session ms-2">Hrs</span>
      </div>
    </section>
  )
}

HoursAbsenteeismCard.propTypes = {
  title: PropTypes.string
}

export default HoursAbsenteeismCard
