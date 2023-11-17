import { Row } from 'react-bootstrap'
import './createDependent.css'
import { _httpClient } from '../../../utils/httpClient'
import { useState, useEffect } from 'react'
import useStore from '../../../store/userInfoStore'
import { toast } from 'sonner'

const initialFormValues = {
  pernr: '',
  subty: '',
  anrex: '',
  vorna: '',
  nachn: '',
  gesch: '',
  gbdat: '',
  gbort: '',
  icnum1: '',
  icnum2: ''
}

const CreateDependent = () => {
  const [familyTypes, setFamilyTypes] = useState([])
  const [treatments, setTreatments] = useState([])
  const [genders, setGenders] = useState([])

  const [createDependentData, setCreateDependentData] = useState(initialFormValues)
  const { userId } = useStore((state) => state.userInfo)

  const handleChange = (e) => {
    e.preventDefault()

    const element = e.target.name
    const elementValue = e.target.value

    setCreateDependentData({
      ...createDependentData,
      [element]: elementValue
    })
  }

  const handleCedulaChange = (e) => {
    e.preventDefault()

    const element = e.target.name
    const elementValue = e.target.value

    if (e.target.checkValidity() || elementValue === '') {
      setCreateDependentData({
        ...createDependentData,
        [element]: elementValue,
        pernr: userId
      })
      return true
    }

    return false
  }

  const validateCedula = async (cedula) => {
    if (cedula === '') {
      return false
    }

    try {
      const response = await _httpClient.post('familymember/checkid', {
        icnum: cedula
      })

      if (response.status === 200) {
        return true
      }
    } catch (error) {
      toast.error(error.response.data.message)
      return false
    }
  }

  const createDependent = async (e) => {
    e.preventDefault()

    const cedula = e.target.icnum1.value

    const isValid = await validateCedula(cedula)

    if (!isValid) {
      return
    }

    try {
      const response = await _httpClient.post('familymember/create', createDependentData)

      if (response.status === 200) {
        setCreateDependentData({
          pernr: '',
          subty: '',
          anrex: '',
          vorna: '',
          nachn: '',
          gesch: '',
          gbdat: '',
          gbort: '',
          icnum1: '',
          icnum2: ''
        })
        toast.success('Dependiente creado con éxito')
      }
    } catch (error) {
      toast.error('Error creando dependiente')
    }
  }

  useEffect(() => {
    const getInfo = async () => {
      try {
        const requests = [
          _httpClient.get('familymember/subtypes'),
          _httpClient.get('familymember/treatments'),
          _httpClient.get('familymember/genders')
        ]

        const results = await Promise.all(requests)

        setFamilyTypes(results[0].data[0].memberTypesItems)
        setTreatments(results[1].data[0].treatmentItems)
        setGenders(results[2].data[0].genderItems)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    }

    getInfo()
  }, [])

  return (
    <>
      <Row className="createDependentContainer">
        <form onSubmit={createDependent} className="row g-3 col-6">
          <div className="col-md-6">
            <label className="form-label">Clase de familiar</label>
            <select
              value={createDependentData.subty}
              onChange={handleChange}
              required
              name="subty"
              className="form-select"
            >
              <option></option>
              {familyTypes.length > 0 &&
                familyTypes.map(({ descr, subty }) => (
                  <option value={descr} key={subty}>
                    {descr}
                  </option>
                ))}
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Tratamiento</label>
            <select
              value={createDependentData.anrex}
              onChange={handleChange}
              required
              name="anrex"
              className="form-select"
            >
              <option></option>
              {treatments.length > 0 &&
                treatments.map(({ descr, subty }) => (
                  <option value={descr} key={subty}>
                    {descr}
                  </option>
                ))}
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input
              value={createDependentData.vorna}
              onChange={handleChange}
              required
              name="vorna"
              type="text"
              className="form-control"
              id="name"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="lastname" className="form-label">Apellidos</label>
            <input
              value={createDependentData.nachn}
              onChange={handleChange}
              required
              name="nachn"
              type="text"
              className="form-control"
              id="lastname"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Género</label>
            <select
              value={createDependentData.gesch}
              onChange={handleChange}
              required
              name="gesch"
              className="form-select"
            >
              <option></option>
              {genders.length > 0 &&
                genders.map(({ descr, subty }) => (
                  <option value={descr} key={subty}>
                    {descr}
                  </option>
                ))}
            </select>
          </div>

          <div className="col-md-6"></div>

          <div className="col-md-6">
            <label htmlFor="dateBorn" className="form-label">Fecha de nacimiento</label>
            <input
              value={createDependentData.gbdat}
              onChange={handleChange}
              required
              name="gbdat"
              type="date"
              className="form-control"
              id="dateBorn"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="placeBorn" className="form-label">Lugar de nacimiento</label>
            <input
              value={createDependentData.gbort}
              onChange={handleChange}
              required
              name="gbort"
              type="text"
              className="form-control"
              id="placeBorn"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="cedula" className="form-label">Cédula</label>
            <input
              value={createDependentData.icnum1}
              onChange={(e) => handleCedulaChange(e)}
              pattern="[-][0-9]+"
              required
              name="icnum1"
              type="text"
              className="form-control"
              id="cedula"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="pasaporte" className="form-label">Pasaporte</label>
            <input
              value={createDependentData.icnum2}
              onChange={handleChange}
              required
              name="icnum2"
              type="text"
              className="form-control"
              id="pasaporte"
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Enviar solicitud
            </button>
          </div>
        </form>
      </Row>
    </>
  )
}

export default CreateDependent
