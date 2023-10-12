import { Button, Modal } from 'react-bootstrap'

import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import './payrollSummaryModal.css'
import { useEffect, useState } from 'react'
import { _httpClient } from '../../utils/httpClient'
import useStore from '../../store/userInfoStore'
import { toast } from 'sonner'

function RegularPayroll (props) {
  const navegate = useNavigate()
  const [searchParams] = useSearchParams()
  const [regularPayrollData, setRegularPayrollData] = useState()
  const [payrollLink, setPayrollLink] = useState('')
  const { userId } = useStore((state) => state.userInfo)

  const { id: payrollId } = useParams()

  const formatOptions = {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }

  const downloadPDF = () => {
    if (payrollLink) {
      return window.open(payrollLink, '_blank')
    }

    toast.error('No se ha cargado el volante de esta nómina')
  }

  useEffect(() => {
    const fetchRegularPayroll = async () => {
      const startDate = searchParams.get('begda')
      const endDate = searchParams.get('endda')

      const { data } = await _httpClient.get(`payroll/regular?pernr=${userId}&begda=${startDate}&endda=${endDate}`)
      const { data: payrollFtp } = await _httpClient.get(`payroll/payftp?pernr=${userId}&dirid=${payrollId}`)

      setRegularPayrollData(data[0].regular)
      setPayrollLink(payrollFtp[0].details[0].ftpFile)
    }

    fetchRegularPayroll()
  }, [])

  return (
    <Modal
      {...props}
      onExited={() => navegate('/dashboard/payroll-flyers')}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Volante
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='modalContainer'>
          <h3 className='text-center mb-4'>$ { regularPayrollData?.netsa.toLocaleString('en-US', formatOptions) }</h3>
          <h5 className='d-inline-block me-2'>Detalles</h5> <span>{ regularPayrollData?.perio }</span>
          <div className='d-flex flex-wrap justify-content-between'>
            <span className='w-50'>Salario mensual</span>
            <span className='w-50 text-start pl'>
            <span className='fw-bold me-1'> {regularPayrollData?.waers} </span>
              {regularPayrollData?.monsa.toLocaleString('en-US', formatOptions)}
            </span>

            <span className='w-50 '>Salario por hora</span>
            <span className='w-50 text-start pl'>
              <span className='fw-bold me-1'> {regularPayrollData?.waers} </span>
              {regularPayrollData?.salra.toLocaleString('en-US', formatOptions)}
            </span>

            <span className='w-50'>Salario devengado</span>
            <span className='w-50 text-start pl'>
              <span className='fw-bold me-1'> {regularPayrollData?.waers}
              </span> {regularPayrollData?.works.toLocaleString('en-US', formatOptions)}
            </span>
          </div>

          <h5 className='mt-4'>Deducciones</h5>
          <div className='d-flex flex-wrap justify-content-between'>
            <span className='w-50'>ISR</span>
            <span className='w-50 text-start pl'>
              <span className='fw-bold me-1'> {regularPayrollData?.waers} </span>
              {regularPayrollData?.taxes.toLocaleString('en-US', formatOptions)}
            </span>

            <span className='w-50 '>AFP</span>
            <span className='w-50 text-start pl'>
              <span className='fw-bold me-1'> {regularPayrollData?.waers} </span>
              {regularPayrollData?.ssfun.toLocaleString('en-US', formatOptions)}
            </span>

            <span className='w-50'>SFS</span>
            <span className='w-50 text-start pl'>
              <span className='fw-bold me-1'> {regularPayrollData?.waers} </span>
               {regularPayrollData?.sfsfu.toLocaleString('en-US', formatOptions)}
            </span>

            <span className='w-50'>Dependiente adic.</span>
            <span className='w-50 text-start pl'>
              <span className='fw-bold me-1'> {regularPayrollData?.waers} </span>
              {regularPayrollData?.famam.toLocaleString('en-US', formatOptions)}
            </span>

            <span className='w-50'>Otros descuentos.</span>
            <span className='w-50 text-start pl'>
              <span className='fw-bold me-1'> {regularPayrollData?.waers} </span>
              { regularPayrollData?.disco.toLocaleString('en-US', formatOptions) }
            </span>
          </div>

          <h5 className='mt-4'>Total</h5>
          <div className='d-flex flex-wrap justify-content-between'>
            <span className='w-50'>Neto a cobrar</span>
            <span className='w-50 text-start pl'>
              <span className='fw-bold me-1'> {regularPayrollData?.waers} </span>
              {regularPayrollData?.netsa.toLocaleString('en-US', formatOptions)}
            </span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ backgroundColor: '#31ae4e' }} onClick={downloadPDF}>Descargar volante de pago</Button>
      </Modal.Footer>
    </Modal>
  )
}

function SpecialPayroll (props) {
  const navegate = useNavigate()
  const [searchParams] = useSearchParams()
  const [specialPayrollData, setSpecialPayrollData] = useState()
  const [payrollLink, setPayrollLink] = useState('')

  const { userId } = useStore((state) => state.userInfo)
  const { id: payrollId } = useParams()

  const formatOptions = {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }

  useEffect(() => {
    const fetchSpecialPayroll = async () => {
      const startDate = searchParams.get('begda')
      const endDate = searchParams.get('endda')

      const { data } = await _httpClient.get(`payroll/special?pernr=${userId}&begda=${startDate}&endda=${endDate}`)
      const { data: payrollFtp } = await _httpClient.get(`payroll/payftp?pernr=${userId}&dirid=${payrollId}`)

      setSpecialPayrollData(data[0].special)
      setPayrollLink(payrollFtp[0].details[0].ftpFile)
    }

    fetchSpecialPayroll()
  }, [])

  return (
    <Modal
      {...props}
      onExited={() => navegate('/dashboard/payroll-flyers')}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Volante
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='modalContainer'>
        <h3 className='text-center mb-3'>$ { specialPayrollData?.netsa.toLocaleString('en-US', formatOptions) }</h3>
          <div className='d-flex flex-wrap justify-content-between'>
            <span className='w-50 fw-bold'>Tipo de nómina:</span>
            <span className='w-50 text-end'>NÓMINA ESPECIAL</span>
          </div>

          <h5 className='mt-3'>Deducciones</h5>
          <div className='d-flex flex-wrap justify-content-between'>
            <span className='w-50'>ISR</span>
            <span className='w-50 text-start pl'>
              <span className='fw-bold me-1'> { specialPayrollData?.waers } </span>
              { specialPayrollData?.taxes.toLocaleString('en-US', formatOptions) }
              </span>
          </div>

          <h5 className='mt-4'>Total</h5>
          <div className='d-flex flex-wrap justify-content-between'>
            <span className='w-50'>Neto a cobrar</span>
            <span className='w-50 text-start pl'>
              <span className='fw-bold me-1'> { specialPayrollData?.waers } </span>
              {specialPayrollData?.netsa.toLocaleString('en-US', formatOptions)}
            </span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
      <Button style={{ backgroundColor: '#31ae4e' }} href={payrollLink} target='_blank'>Descargar volante de pago</Button>
      </Modal.Footer>
    </Modal>
  )
}

function PayrollSummaryModal (props) {
  const { payrollType } = useParams()

  const modalToShow = {
    REGULAR: <RegularPayroll {...props}/>,
    ESPECIAL: <SpecialPayroll {...props}/>
  }

  return modalToShow[payrollType]
}

export default PayrollSummaryModal
