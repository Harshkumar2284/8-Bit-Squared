import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Landing from "./pages/Landing"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
