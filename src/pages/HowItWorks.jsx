import { Navigate } from 'react-router-dom'

function HowItWorks() {
  return <Navigate to={{ pathname: '/', hash: 'how-it-works' }} replace />
}

export default HowItWorks
