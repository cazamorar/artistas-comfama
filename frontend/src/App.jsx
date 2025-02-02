import { Navbar } from "./components/Navbar"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import { Home } from "./pages/Home"
import { CalendarioEventos } from "./pages/CalendarioEventos"
import { Musicos } from "./pages/Musicos"
import { Bailarines } from "./pages/Bailarines"
import { FotografiaPintura } from "./pages/FotografiaPintura"

function App() {

  return (
    
   <>

  <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/calendario-eventos" element={<CalendarioEventos/>} /> 
          <Route path="/musicos" element={<Musicos/>}/>
          <Route path="/bailarines" element={<Bailarines/>}/>
          <Route path="/fotografia-pintura" element={<FotografiaPintura/>} />
      </Routes>

  </Router>  
    
  </>
  )
}

export default App