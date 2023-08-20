import PropTypes from 'prop-types'
import OrganizationalCard from '../organizationalCard'

const OrganizationalLevel = ({ father, childs }) => {
  if (father.length !== 0) {
    return (
      <>
        <ul>
          {father.map((infoCard) => (
            <OrganizationalCard
              key={crypto.randomUUID()}
              infoCard={infoCard}
              childs={childs}
            />
          ))}
        </ul>
      </>
    )
  }
}

OrganizationalLevel.propTypes = {
  father: PropTypes.array,
  childs: PropTypes.array
}

export default OrganizationalLevel
