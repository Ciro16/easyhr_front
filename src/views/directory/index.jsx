import './directory.css'
import { Image } from 'react-bootstrap'

import fatherWithoutPicture from '../../assets/without_profile.png'
import { _httpClient } from '../../utils/httpClient'
import { dateYMD } from '../../utils/date'
import { useEffect, useState } from 'react'
import { debounce } from '../../utils/debounce'
import Spinner from '../../components/spinner'

const Directory = () => {
  const [directoryData, setDirectoryData] = useState([])
  const [allEmployees, setAllEmployees] = useState([])
  const [loading, setLoading] = useState(false)
  const [firstTimeRender, setFirstTimeRender] = useState(true)

  const fetchDirectoryData = async (searchQuery, abortController) => {
    const signal = abortController?.signal ?? ''
    setLoading(true)

    if (!firstTimeRender && searchQuery === '') {
      setDirectoryData(allEmployees)
      setLoading(false)
      return
    }

    try {
      const { data } = await _httpClient.get(`employees/directory?begda=${dateYMD(new Date())}&input=${searchQuery}`)

      const picturesRequest = data[0]?.employeesItems.map((employee) =>
        _httpClient.get(`masterdata/photo?pernr=${employee.pernr}`, { signal })
      )

      const pictures = await Promise.allSettled(picturesRequest)
      pictures.forEach((picture, index) => {
        if (picture.status === 'fulfilled') {
          data[0].employeesItems[index] = {
            ...data[0]?.employeesItems[index],
            picture: `data:image/jpeg;base64,${picture.value.data.profilePicture}`
          }
        }
      })

      setDirectoryData(data[0].employeesItems)

      if (firstTimeRender) {
        setAllEmployees(data[0].employeesItems)
      }
    } catch (error) {
      console.log('Error cargando datos directory')
    } finally {
      setFirstTimeRender(false)
      setLoading(false)
    }
  }

  const debouncedFetchDirectoryData = debounce(fetchDirectoryData, 400)

  useEffect(() => {
    const abortController = new AbortController()

    fetchDirectoryData('', abortController)

    return () => {
      abortController.abort()
    }
  }, [])

  return (
    <div className="container-fluid directory-container ms-0">
      {loading && <Spinner />}
      <h2>Directorio</h2>

      <div style={{ borderBottom: '1px solid #dcdcdc' }}></div>

      <input onChange={e => debouncedFetchDirectoryData(e.target.value)} className="form-control w-25 my-3" type="text" placeholder="Buscar" />

      <div className="directory-cards row row-cols-1 row-cols-md-4 row-gap-3 mt-0">
        {
          directoryData.map(({ ename, t_Orgeh, t_Plans, conta, exten, picture }) => {
            return (
              <div key={crypto.randomUUID()} className="col">
                <div className="card">
                  <Image src={picture ?? fatherWithoutPicture} className="directory-image card-img-top image mt-3" roundedCircle alt="Directory image" />
                  <div className="card-body px-0">
                    <h5 className="card-title text-center">{ ename }</h5>
                    <div className='mt-3 ps-4 pt-3 border-top'>
                      <p className="cargo card-text mb-2">{ t_Plans }</p>
                      <div className='d-flex align-items-center phone-info'>
                        <i className="bi bi-telephone-fill fs-6 pe-2"></i>
                        <div>
                          <span>{ conta }</span>
                          <span className='ps-2'>Ext. { exten }</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Directory
