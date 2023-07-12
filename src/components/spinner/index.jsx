const Spinner = () => {
  return (
    <div 
      style={{width: '3rem', height: '3rem'}}
      className="spinner-border position-absolute top-0 bottom-0 start-0 end-0 m-auto" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
  )
}

export default Spinner;