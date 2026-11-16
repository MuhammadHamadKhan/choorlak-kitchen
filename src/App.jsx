import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

const sectionIds = [
  'features',
  'online-ordering',
  'how-it-works',
  'contact',
]

function App() {
  const location = useLocation()

  useEffect(() => {
    const fromHash = location.hash.replace('#', '')
    const fromPath = location.pathname.replace('/', '')
    const id = sectionIds.includes(fromHash)
      ? fromHash
      : sectionIds.includes(fromPath)
        ? fromPath
        : ''

    if (location.pathname === '/terms' || location.pathname === '/privacy') {
      window.scrollTo(0, 0)
      return
    }

    if (!id) return

    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)

    return () => window.clearTimeout(timer)
  }, [location.pathname, location.hash])

  return (
    <div className="min-h-screen bg-white text-text-dark">
      <Navbar />

      <main>
        <Routes>
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
