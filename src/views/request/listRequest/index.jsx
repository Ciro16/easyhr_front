import { useEffect, useState } from 'react'
import './listRequests.css'
import { _httpClient } from '../../../utils/httpClient'
import useStore from '../../../store/userInfoStore'
import RequestRow from '../../../components/request/requestRow'

const ListRequests = () => {
  const { userId } = useStore((state) => state.userInfo)
  const [requests, setRequests] = useState([])

  const deleteRequest = async (e, id) => {
    e.preventDefault()

    if (confirm('¿Seguro desea borrar la solicitud?')) {
      try {
        const response = await _httpClient.delete(`requests/delete?id=${id}&pernr=${userId}`)

        if (response.status === 200) {
          setRequests(requests.filter((request) => request.id !== id))
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }
  }

  useEffect(() => {
    const getRequests = async () => {
      try {
        const response = await _httpClient.get(
          `requests/masterdata?pernr=${userId}&statu=01`
        )

        if (response.status === 200) {
          setRequests(response.data[0].details)
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }

    getRequests()
  }, [])

  return (
    <div className="listRequestContainer">
      <table className="table table-striped requestTable">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Tipo de solicitud</th>
            <th scope="col">Motivo.</th>
            {/* <th scope="col">Descrip.</th> */}
            <th scope="col">Fecha inicio</th>
            <th scope="col">Fecha fin</th>
            <th scope="col">Comentario</th>
            <th scope="col">Prioridad</th>
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody className="table-group-divider">
          {
            requests.length > 0 &&
              requests.map(
                ({ id, t_Retyp, t_Motiv, begda, endda, stext, priov }) => (
                  <RequestRow
                    deleteRequest={deleteRequest}
                    key={id}
                    id={id}
                    t_Retyp={t_Retyp}
                    t_Motiv={t_Motiv}
                    begda={begda}
                    endda={endda}
                    stext={stext}
                    priov={priov}
                  />
                )
              )
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListRequests
