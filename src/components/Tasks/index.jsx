import { dateDMY } from '../../utils/date'
import './task.css'

const Task = ({description, todayDate}) => {
  return (
    <div className="taskContainer">
      <h5 className="task-title mb-0">{description}</h5>
      <span>{ dateDMY(todayDate) }</span>

      {/* <div className="d-flex justify-content-between mt-4">
        <span>Receive from: System</span>
        <span>Open</span>
      </div> */}
    </div>
  )
}

export default Task