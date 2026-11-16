import { Navigate } from 'react-router-dom'

function OnlineOrdering() {
  return <Navigate to={{ pathname: '/', hash: 'online-ordering' }} replace />
}

export default OnlineOrdering
