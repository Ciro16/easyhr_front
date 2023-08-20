import { Col, Row } from 'react-bootstrap'
import './request.css'
import { useState } from 'react'

const Request = () => {
  const [peticionPrincipal, setPeticion] = useState('')
  const [subPeticiones, setSubPeticiones] = useState([])

  const [subPeticion, setSubPeticion] = useState('')

  const peticiones = [
    {
      name: 'peticion 1',
      subpeticiones: [
        {
          name: 'subpeticion 1'
        },
        {
          name: 'subpeticion 2'
        }
      ]
    },
    {
      name: 'peticion 2',
      subpeticiones: [
        {
          name: 'subpeticion 3'
        },
        {
          name: 'subpeticion 4'
        }
      ]
    }
  ]

  const handleRequestType = (e) => {
    setPeticion(e.target.value)
    setSubPeticiones(
      peticiones.find((peticion) => peticion.name === e.target.value)
        .subpeticiones
    )
  }

  const handleSubRequestType = (e) => {
    setSubPeticion(e.target.value)
  }

  const renderRequest = (screen) => {
    const DEFAULT_SCREEN = null

    const screens = {
      'subpeticion 1': <h1>Pantalla 1</h1>,
      'subpeticion 2': <h1>Pantalla 2</h1>,
      'subpeticion 3': <h1>Pantalla 3</h1>,
      'subpeticion 4': <h1>Pantalla 4</h1>
    }

    return screens[screen] || DEFAULT_SCREEN
  }

  return (
    <>
      <Row className="requestContainer">
        <Col sm={3}>
          <select
            className="form-select"
            aria-label="Default select example"
            value={peticionPrincipal}
            onChange={handleRequestType}
          >
            <option>--peticion--</option>
            {peticiones &&
              peticiones.map((data) => (
                <option key={crypto.randomUUID()} value={data.name}>
                  {data.name}
                </option>
              ))}
          </select>
        </Col>

        <Col sm={3}>
          <select
            className="form-select"
            aria-label="Default select example"
            value={subPeticion}
            onChange={handleSubRequestType}
          >
            <option>--sub peticion--</option>
            {subPeticiones.length > 0 &&
              subPeticiones.map((subPeticion) => (
                <option key={crypto.randomUUID()} value={subPeticion.name}>
                  {subPeticion.name}
                </option>
              ))}
          </select>
        </Col>
      </Row>
      <Row>
        <Col>{renderRequest(subPeticion)}</Col>
      </Row>
    </>
  )
}

export default Request
