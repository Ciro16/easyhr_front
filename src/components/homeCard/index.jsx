import './homeCard.css'
import { Col } from 'react-bootstrap'

const HomeCard = ({ title, value, bgColor, image, progressBar = false }) => {
  const cardStyles = {
    backgroundColor: bgColor,
    height: '80px',
  }

  const progressBarFillerPrecentage = (5 / 11) * 100

  const progressBarFiller = {
    width: `${progressBarFillerPrecentage}%`,
    height: '3px',
    backgroundColor: 'red',
  }

  return (
    <Col sm={12} md={6} lg={4}>
      <div className='card d-flex flex-row text-light' style={cardStyles}>
        <div className='card-icon-container d-flex align-items-center w-25'>
          <img className='card-icon' src={image} alt="antiguedad" />
        </div>
        <div className='card-info ps-3 pt-2 w-75'>
          <h4 className='card-title mb-0'>{ title }</h4>
          <span className='card-value'>{ value }</span>
          {/* {
            progressBar && 
              <div className='progress-bar-container'>
                <div className='progress-bar-filler' style={progressBarFiller}></div>
                <span className='progressPercentage'>{ Math.round(progressBarFillerPrecentage) + '%' }</span>
              </div>
          } */}
        </div>
      </div>
    </Col>
  )
}

export default HomeCard
