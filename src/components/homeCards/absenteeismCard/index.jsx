import PropTypes from 'prop-types'
import AbsenteeismRow from './absenteeismRow'
import './absenteeismCard.css'

const AbsenteeismCard = ({ title }) => {
  return (
    <section className="absenteeismCard border pt-2">
      <header className="cardHeader border-bottom px-2 d-flex justify-content-between align-items-center">
        <h6>{title}</h6>
      </header>

      {/* {infoRow &&
        infoRow.map((person) => (
          <AbsenteeismCardRow
            key={crypto.randomUUID()}
            name={person.name}
            image={person.image}
          />
        ))} */}

      <AbsenteeismRow title="PTO" value={3} endValue={12} />
      <AbsenteeismRow title="Stick-Leave" value={10} endValue={12} />
    </section>
  )
}

AbsenteeismCard.propTypes = {
  title: PropTypes.string
}

export default AbsenteeismCard
