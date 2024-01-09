import { dateDMY } from '../../utils/date'
import './task.css'

const Task = ({title, description, todayDate}) => {
  return (
    <div className="taskContainer">
      <h5 className="task-title mb-0">{ title }</h5>
      <span>{ dateDMY(todayDate) } - { description }</span>

      {/* <div className="d-flex justify-content-between mt-4">
        <span>Receive from: System</span>
        <span>Open</span>
      </div> */}
    </div>
  )
}

export default Task