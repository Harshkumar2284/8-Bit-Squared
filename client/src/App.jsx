import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Landing from "./pages/Landing"
import Auth from "./pages/Auth"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/join" element={<Auth />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
