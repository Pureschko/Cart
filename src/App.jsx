import React from 'react'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div>
      <Router>
      <Nav />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </Router>
        </div>
  )
}

export default App