import { dateDMY } from '../../utils/date'
import './notification.css'

const Notification = ({title, description, date}) => {
  return (
    <div className="notification-container">
      <h5>{title}</h5>
      <p>{description}</p>
      <span>{ dateDMY(date) }</span>
    </div>
  )
}

export default Notification