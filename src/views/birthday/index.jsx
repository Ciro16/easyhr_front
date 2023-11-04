import './directory.css'
import { Image } from 'react-bootstrap'

import fatherWithoutPicture from '../../assets/without_profile.png'
import { _httpClient } from '../../utils/httpClient'
import { useEffect, useState } from 'react'
import Spinner from '../../components/spinner'

const Birthday = () => {
  const [birthdayData, setBirthdayData] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchBirthdayData = async ({ abortController, e }) => {
    const signal = abortController?.signal ?? ''

    const month = e?.target.value ?? '01'

    setLoading(true)

    try {
      const { data } = await _httpClient.get(`employees/birthdays?begda=2023-${month}`)

      const picturesRequest = data[0]?.birthdayItems.map((employee) =>
        _httpClient.get(`masterdata/photo?pernr=${employee.pernr}`, { signal })
      )

      const pictures = await Promise.allSettled(picturesRequest)
      pictures.forEach((picture, index) => {
        if (picture.status === 'fulfilled') {
          data[0].birthdayItems[index] = {
            ...data[0]?.birthdayItems[index],
            picture: `data:image/jpeg;base64,${picture.value.data.profilePicture}`
          }
        }
      })

      setBirthdayData(data[0].birthdayItems)
    } catch (error) {
      setLoading(false)
      console.log('Error cargando datos birthday')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const abortController = new AbortController()

    fetchBirthdayData({ abortController })

    return () => {
      abortController.abort()
    }
  }, [])

  return (
    <div className="container-fluid directory-container ms-0">
      {loading && <Spinner />}
      <h2>Cumpleaños</h2>

      <div style={{ borderBottom: '1px solid #dcdcdc' }}></div>

      <select defaultValue="00" onChange={(e) => fetchBirthdayData({ e })} className="form-select mt-3 w-25" aria-label="Default select example">
          <option value="01">Enero</option>
          <option value="02">Febrero</option>
          <option value="03">Marzo</option>
          <option value="04">Abril</option>
          <option value="05">Mayo</option>
          <option value="06">Junio</option>
          <option value="07">Julio</option>
          <option value="08">Agosto</option>
          <option value="09">Septiembre</option>
          <option value="10">Octubre</option>
          <option value="11">Noviembre</option>
          <option value="12">Dciembre</option>
        </select>

      <div className="directory-cards row row-cols-1 row-cols-md-4 g-4 mt-0">
        {
          birthdayData.map(({ ename, t_Plans, picture, t_Day }) => {
            return (
              <div key={crypto.randomUUID()} className="col">
                <div className="card">
                  <Image src={picture ?? fatherWithoutPicture} className="directory-image card-img-top image mt-3" roundedCircle alt="Directory image" />
                  <div className="card-body px-0">
                    <h5 className="card-title text-center">{ ename }</h5>
                    <div className='mt-3 ps-4 pt-3 border-top'>
                      <p className="cargo card-text mb-2">{ t_Plans }</p>
                      <div className='d-flex align-items-center phone-info'>
                        <span>{ t_Day }</span>
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

export default Birthday
