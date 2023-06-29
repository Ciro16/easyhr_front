import { Col, Row } from 'react-bootstrap'
import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'

function App() {

  return (
    <>
      <Header />
      <Row>
        <Col xs={4} sm={2 }>
          <Sidebar />
        </Col>

        <Col>
          <div className="content">contenido</div>
        </Col>
      </Row>
    </>
  )
}

export default App
