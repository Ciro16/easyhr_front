import { Row } from 'react-bootstrap'
import './createExpense.css'
import { _httpClient } from '../../../utils/httpClient'
import { useState, useEffect } from 'react'
import useStore from '../../../store/userInfoStore'
import { toast } from 'sonner'
import { dateYMD } from '../../../utils/date'

const initialFormValues = {
  pernr: '',
  subty: '',
  motiv: '',
  efeda: '',
  vendo: '',
  rncva: '',
  notep: '',
  ncfn: '',
  betrg: '',
  waers: '',
  filea: '',
  statu: '',
  aedtm: '',
  uname: ''
}

const CreateExpense = () => {
  const [expenseTypes, setExpenseTypes] = useState([])
  const [reasons, setReasons] = useState([])
  const [currencies, setCurrencies] = useState([])
  const [showElement, setShowElement] = useState(true)

  const [createExpenseData, setCreateExpenseData] = useState(initialFormValues)
  const { userId } = useStore((state) => state.userInfo)

  const handleExpenseTypeChange = async (e) => {
    e.preventDefault()

    handleChange(e)

    const expenseType = e.target.value

    const esAvanceDeGasto = expenseType === '0002'

    setShowElement(true)

    if (esAvanceDeGasto) {
      setShowElement(false)
    }

    if (!expenseType) {
      setReasons([])
      return
    }

    try {
      const response = await _httpClient.get(`expenses/reasons?subty=${expenseType}`)

      if (response.status === 200) {
        setReasons(response.data[0].reasonsItems)
      }
    } catch (error) {
      toast.error('Error')
    }
  }

  const handleFileChange = async (e) => {
    e.preventDefault()

    const file = e.target.files[0]

    createExpenseData.filea = await toBase64(file)
  }

  const handleChange = (e) => {
    e.preventDefault()

    const element = e.target.name
    const elementValue = e.target.value

    setCreateExpenseData({
      ...createExpenseData,
      [element]: elementValue
    })
  }

  const toBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result.split(',')[1])
      reader.onerror = reject
    })
  }

  const createExpense = async (e) => {
    e.preventDefault()

    createExpenseData.pernr = userId
    createExpenseData.statu = '01'
    createExpenseData.aedtm = dateYMD(new Date())
    createExpenseData.uname = 'EASYMOBILE'

    try {
      const response = await _httpClient.post('expenses/create', createExpenseData)

      if (response.status === 200) {
        setCreateExpenseData(initialFormValues)
        e.target.bill.value = ''
        toast.success('Gasto creado con éxito')
      }
    } catch (error) {
      toast.error('Error creando dependiente')
    }
  }

  useEffect(() => {
    const getInfo = async () => {
      try {
        const requests = [
          _httpClient.get('expenses/types'),
          _httpClient.get('expenses/currency')
        ]

        const results = await Promise.all(requests)

        setExpenseTypes(results[0].data[0].expensesItems)
        setCurrencies(results[1].data[0].waersItems)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    }

    getInfo()
  }, [])

  return (
    <>
      <Row className="createExpenseContainer">
        <form onSubmit={createExpense} className="row g-2 col-6">
          <div className="col-md-6">
            <label className="form-label">Tipo de gasto</label>
            <select
              value={createExpenseData.subty}
              onChange={handleExpenseTypeChange}
              required
              name="subty"
              className="form-select"
            >
              <option></option>
              {expenseTypes.length > 0 &&
                expenseTypes.map(({ descr, subty }) => (
                  <option value={subty} key={subty}>
                    {descr}
                  </option>
                ))}
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Motivo</label>
            <select
              value={createExpenseData.motiv}
              onChange={handleChange}
              required
              name="motiv"
              className="form-select"
            >
              <option></option>
              {reasons.length > 0 &&
                reasons.map(({ descr, subty }) => (
                  <option value={descr} key={subty}>
                    {descr}
                  </option>
                ))}
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="date" className="form-label">Fecha</label>
            <input
              value={createExpenseData.efeda}
              onChange={handleChange}
              required
              name="efeda"
              type="date"
              className="form-control"
              id="date"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="supplier" className="form-label">Proveedor</label>
            <input
              value={createExpenseData.vendo}
              onChange={handleChange}
              required
              name="vendo"
              type="text"
              className="form-control"
              id="supplier"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="rnc" className="form-label">RNC</label>
            <input
              value={createExpenseData.rncva}
              onChange={handleChange}
              required
              name="rncva"
              type="text"
              className="form-control"
              id="rnc"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="concepto" className="form-label">Concepto</label>
            <input
              value={createExpenseData.notep}
              onChange={handleChange}
              required
              name="notep"
              type="text"
              className="form-control"
              id="concepto"
            />
          </div>

          {
            showElement &&
              <div className="col-md-6">
                <label htmlFor="ncfn" className="form-label">NCF</label>
                <input
                  value={createExpenseData.ncfn}
                  onChange={handleChange}
                  required
                  name="ncfn"
                  type="text"
                  className="form-control"
                  id="ncfn"
                />
              </div>
          }

          <div className="col-md-6">
            <label htmlFor="betrg" className="form-label">Importe</label>
            <input
              value={createExpenseData.betrg}
              onChange={handleChange}
              required
              name="betrg"
              type="number"
              className="form-control"
              id="betrg"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Moneda</label>
            <select
              value={createExpenseData.waers}
              onChange={handleChange}
              required
              name="waers"
              className="form-select"
            >
              <option></option>
              {currencies.length > 0 &&
                currencies.map(({ waers }) => (
                  <option value={waers} key={waers}>
                    {waers}
                  </option>
                ))}
            </select>
          </div>

          {
            showElement && 
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Adjuntar factura</label>
                <input onChange={handleFileChange} id="formFile" className="form-control" type="file" required name="bill" accept="application/pdf, image/jpeg, image/png" />
              </div>
          }

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Crear gasto
            </button>
          </div>
        </form>
      </Row>
    </>
  )
}

export default CreateExpense
