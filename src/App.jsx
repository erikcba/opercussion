import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Events from "./pages/Events"
import Press from "./pages/Press"
import ReadMore from "./pages/ReadMore"



function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/press" element={<Press/>}/>
        <Route path="/readmore" element={<ReadMore/>}/>
      </Routes>
    </>
  )
}

export default App
