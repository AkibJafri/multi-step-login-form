import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import CreateProfile from './components/CreateProfile'
import Signup from './components/Signup'
import Hero from './hero/Hero'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<CreateProfile />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Hero" element={<Hero />} />
      </Routes>
    </Router>
  )
}

export default App
