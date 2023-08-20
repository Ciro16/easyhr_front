import PropTypes from 'prop-types'
import './teamCard.css'
import TeamCardRow from './teamRow'

const TeamCard = ({ title, counter, infoRow }) => {
  return (
    <section className="teamCard border pt-2">
      <header className="cardHeader border-bottom px-2 d-flex justify-content-between align-items-center">
        <h6>{title}</h6>
        <span className="badge bg-secondary">{counter}</span>
      </header>

      {infoRow &&
        infoRow.map((person) => (
          <TeamCardRow
            key={crypto.randomUUID()}
            name={person.name}
            image={person.image}
          />
        ))}
    </section>
  )
}

TeamCard.propTypes = {
  title: PropTypes.string,
  counter: PropTypes.number,
  infoRow: PropTypes.array
}

export default TeamCard
