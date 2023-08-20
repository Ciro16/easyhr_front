import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import { isCookieSet } from '../../utils/cookiesActions'
import useStore from '../../store/store'

export const ProtectedRoute = ({ children }) => {
  const isAuth = useStore((state) => state.isAuth)

  if (!isAuth || !isCookieSet('_auth_token')) {
    return <Navigate to="/" replace />
  }

  return children
}

ProtectedRoute.propTypes = {
  children: PropTypes.element
}
