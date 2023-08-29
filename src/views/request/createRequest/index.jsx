import { Row } from 'react-bootstrap'
import './createRequest.css'
import useRequestStore from '../../../store/requestInfoStore'
import { _httpClient } from '../../../utils/httpClient'
import { useState, useEffect } from 'react'
import useStore from '../../../store/userInfoStore'
import { toast } from 'sonner'
import resetCreateRequestForm from '../../../utils/resetForm'

const initialFormValues = {
  pernr: '',
  reque: '',
  motiv: '',
  efeda: '',
  begda: '',
  endda: '',
  stext: '',
  priov: '',
  statu: ''
}

const CreateRequest = () => {
  const requestTypes = useRequestStore((state) => state.requestTypes)
  const [reasons, setReasons] = useState([])
  const [createRequestData, setCreateRequestData] = useState(initialFormValues)
  const { userId } = useStore((state) => state.userInfo)

  const today = new Date()

  const year = today.toLocaleString('default', { year: 'numeric' })
  const month = today.toLocaleString('default', { month: '2-digit' })
  const day = today.toLocaleString('default', { day: '2-digit' })

  const dateFormatted = `${year}-${month}-${day}`

  const getReasons = async (type) => {
    try {
      const response = await _httpClient.get(`requests/reasons?retyp=${type}`)

      if (response.status === 200) {
        setReasons(response.data[0].reasonsItems)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  const fillReasons = (e) => {
    const requestType = e.target.value

    sessionStorage.removeItem('motiv')
    setCreateRequestData({
      ...createRequestData,
      motiv: ''
    })

    if (requestType === '') {
      sessionStorage.removeItem('requestType')
      setCreateRequestData({
        ...createRequestData,
        reque: ''
      })
      setReasons([])
      return
    }

    setCreateRequestData({
      ...createRequestData,
      reque: requestType,
      pernr: userId,
      efeda: dateFormatted,
      statu: '01'
    })

    sessionStorage.setItem('requestType', requestType)

    getReasons(requestType)
  }

  const handleChange = (e) => {
    e.preventDefault()

    const element = e.target.name
    const elementValue = e.target.value

    if (elementValue === '') {
      const deleteValue = {
        motiv: () => {
          sessionStorage.removeItem('motiv')
          setCreateRequestData({
            ...createRequestData,
            motiv: ''
          })
        },
        begda: () => {
          sessionStorage.removeItem('begda')
          setCreateRequestData({
            ...createRequestData,
            begda: ''
          })
        },
        endda: () => {
          sessionStorage.removeItem('endda')
          setCreateRequestData({
            ...createRequestData,
            endda: ''
          })
        },
        stext: () => {
          sessionStorage.removeItem('stext')
          setCreateRequestData({
            ...createRequestData,
            stext: ''
          })
        },
        priov: () => {
          sessionStorage.removeItem('priov')
          setCreateRequestData({
            ...createRequestData,
            priov: ''
          })
        }
      }

      deleteValue[element]()
      return
    }

    const storeValue = {
      motiv: () => sessionStorage.setItem('motiv', elementValue),
      begda: () => sessionStorage.setItem('begda', elementValue),
      endda: () => sessionStorage.setItem('endda', elementValue),
      stext: () => sessionStorage.setItem('stext', elementValue),
      priov: () => sessionStorage.setItem('priov', elementValue)
    }

    storeValue[element]()

    setCreateRequestData({
      ...createRequestData,
      [element]: elementValue,
      pernr: userId,
      efeda: dateFormatted,
      statu: '01'
    })
  }

  const handleCreateRequest = (e) => {
    e.preventDefault()

    const createRequest = async () => {
      try {
        const response = await _httpClient.post('/requests/create', createRequestData)

        if (response.status === 200) {
          setCreateRequestData(initialFormValues)
          resetCreateRequestForm(e.target)
          toast.success('¡Solicitud creada!')
          return
        }

        toast.error('¡Error en la solicitud!')
      } catch (error) {
        toast.error('¡Error en la solicitud!')
      }
    }

    createRequest()
  }

  useEffect(() => {
    if (sessionStorage.getItem('requestType')) {
      getReasons(sessionStorage.getItem('requestType'))
    }
  }, [])

  return (
    <>
      <Row className="requestContainer">
        <form onSubmit={handleCreateRequest} className="row g-3">

          <div className="col-md-6">
            <label className="form-label">
              Tipo de solicitud
            </label>
            <select
              value={sessionStorage.getItem('requestType') || ''}
              onChange={fillReasons}
              required
              name='reque'
              className="form-select">
              <option></option>
              {requestTypes.length > 0 && requestTypes.map((type) => <option value={type.retyp} key={type.retyp}> {type.renam} </option>)}
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Motivo
            </label>
            <select
              value={sessionStorage.getItem('motiv') || ''}
              onChange={handleChange}
              required
              name='motiv'
              className="form-select">
              <option></option>
              {reasons.length > 0 && reasons.map((reason) => <option value={reason.motiv} key={reason.motiv}> {reason.stext} </option>)}
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="dateInit" className="form-label">
              Fecha inicio
            </label>
            <input
              value={sessionStorage.getItem('begda') || ''}
              onChange={handleChange}
              required
              name="begda"
              type="date"
              className="form-control"
              id="dateInit"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="dateEnd" className="form-label">
              Fecha fin
            </label>
            <input
              value={sessionStorage.getItem('endda') || ''}
              onChange={handleChange}
              required
              name="endda"
              type="date"
              className="form-control"
              id="dateEnd"
            />
          </div>

          <div className="col-md-12">
            <label htmlFor="additionalComment">Comentatio adicional</label>
            <textarea
              value={sessionStorage.getItem('stext') || ''}
              onChange={handleChange}
              required
              name="stext"
              className="form-control"
              rows="4"
              id="additionalComment">
            </textarea>
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Prioridad
            </label>
            <select
              value={sessionStorage.getItem('priov') || ''}
              onChange={handleChange}
              required
              name="priov"
              className="form-select">
              <option></option>
              <option value='normal'>Normal</option>
              <option value='media'>Media</option>
              <option value='alta'>Alta</option>
            </select>
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

export default CreateRequest
