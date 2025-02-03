import { Navbar } from "./components/Navbar/Navbar"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { CalendarioEventos } from "./pages/CalendarioEventos/CalendarioEventos"
import { Musicos } from "./pages/Musicos/Musicos"
import { Bailarines } from "./pages/Bailarines/Bailarines"
import { FotografiaPintura } from "./pages/FotografiaPintura/FotografiaPintura"
import { Footer } from "./components/Footer/Footer"

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
      <Footer/>
  </Router>  
    
  </>
  )
}

export default App