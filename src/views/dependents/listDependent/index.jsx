import { useEffect, useState } from 'react'
import './listDependents.css'
import { _httpClient } from '../../../utils/httpClient'
import useStore from '../../../store/userInfoStore'
import DependentRow from '../../../components/dependents/dependentRow'

const ListDependents = () => {
  const { userId } = useStore((state) => state.userInfo)
  const [dependents, setDependents] = useState([])

  useEffect(() => {
    const getRequests = async () => {
      try {
        const response = await _httpClient.get(
          `familymember/masterdata?pernr=${userId}`
        )

        if (response.status === 200) {
          setDependents(response.data[0].memberItems)
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }

    getRequests()
  }, [])

  return (
    <div className="listDependentContainer">
      <table className="table table-striped dependentTable">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Género</th>
            <th scope="col">Fecha nacimiento</th>
            <th scope="col">Lugar nacimiento</th>
            <th scope="col">Cédula</th>
            <th scope="col">Pasaporte</th>
          </tr>
        </thead>

        <tbody className="table-group-divider">
          {
            dependents.length > 0 &&
              dependents.map(
                ({ id, vorna, nachn, gesch, gbdat, gbort, icnum1, icnum2 }) => (
                  <DependentRow
                    key={id}
                    id={id}
                    name={vorna}
                    lastname={nachn}
                    gender={gesch}
                    birthdate={gbdat}
                    birthplace={gbort}
                    cedula={icnum1}
                    pasaporte={icnum2}
                  />
                )
              )
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListDependents
