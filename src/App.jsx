
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Contact from './pages/Contact'
import Features from './pages/Features'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import OnlineOrdering from './pages/OnlineOrdering'

function App() {
  return (
    <div className="min-h-screen bg-white text-text-dark">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route
            path="/online-ordering"
            element={<OnlineOrdering />}
          />
          <Route
            path="/how-it-works"
            element={<HowItWorks />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
