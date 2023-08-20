import PropTypes from 'prop-types'
import './pendingApprovalsCard.css'
import PendingApprovalsRow from './pendingApprovalsRow'

const PendingApprovals = ({ title, counter }) => {
  return (
    <section className="pendingApprovalsCard border pt-2">
      <header className="cardHeader border-bottom px-2 d-flex justify-content-between">
        <h6>{title}</h6>
        <div>
          <span className="bagdeTag me-1">Pendientes</span>
          <span className="badge bg-secondary">{counter}</span>
        </div>
      </header>

      {/* {infoRow &&
        infoRow.map((person) => (
          <PendingApprovalsRow
            key={crypto.randomUUID()}
            name={person.name}
            image={person.image}
          />
        ))} */}
      <PendingApprovalsRow
        title="Expense Submission"
        image="https://square-vn.com/app/dscms/assets/images/person-1.jpg?v=1653932875"
      />
    </section>
  )
}

PendingApprovals.propTypes = {
  title: PropTypes.string,
  counter: PropTypes.number
}

export default PendingApprovals
