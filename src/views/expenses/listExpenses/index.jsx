import { useEffect, useState } from 'react'
import './listExpenses.css'
import { _httpClient } from '../../../utils/httpClient'
import useStore from '../../../store/userInfoStore'
import ExpenseRow from '../../../components/expenses/expenseRow'

const ListExpenses = () => {
  const { userId } = useStore((state) => state.userInfo)
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    const getExpenses = async () => {
      try {
        const response = await _httpClient.get(
          `expenses/masterdata?pernr=${userId}&statu=01`
        )

        if (response.status === 200) {
          setExpenses(response.data[0].details)
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }

    getExpenses()
  }, [])

  const deleteExpense = async (e, id) => {
    e.preventDefault()

    if (confirm('¿Seguro desea borrar el gasto?')) {
      try {
        const response = await _httpClient.delete(`expenses/delete?id=${id}&pernr=${userId}`)

        if (response.status === 200) {
          setExpenses(expenses.filter((request) => request.id !== id))
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }
  }

  return (
    <div className="listExpensesContainer">
      <table className="table table-striped expensesTable">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Tipo de Gasto</th>
            <th scope="col">Motivo</th>
            <th scope="col">Fecha</th>
            <th scope="col">Proveedor</th>
            <th scope="col">RNC</th>
            <th scope="col">Concepto</th>
            <th scope="col">NCF</th>
            <th scope="col">Importe</th>
            <th scope="col">Moneda</th>
          </tr>
        </thead>

        <tbody className="table-group-divider">
          {
            expenses.length > 0 &&
              expenses.map(
                ({ id, t_Subty, motiv, efeda, vendo, rncva, notep, ncfn, betrg, waers }) => (
                  <ExpenseRow
                    key={id}
                    deleteExpense={deleteExpense}
                    id={id}
                    tipoGasto={t_Subty}
                    motivo={motiv}
                    fecha={efeda}
                    proveedor={vendo}
                    RNC={rncva}
                    concepto={notep}
                    ncf={ncfn}
                    importe={betrg}
                    moneda={waers}
                  />
                )
              )
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListExpenses
