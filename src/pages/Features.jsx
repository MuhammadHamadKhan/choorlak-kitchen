import { Navigate } from 'react-router-dom'

function Features() {
  return <Navigate to={{ pathname: '/', hash: 'features' }} replace />
}

export default Features
