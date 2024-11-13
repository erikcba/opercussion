import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Events from "./pages/Events"
import Press from "./pages/Press"
import ReadMore from "./pages/ReadMore"
import PlayBtn from "./components/PlayBtn"
import PlayBtnMob from "./components/PlayBtnMob"



function App() {

  return (
    <>
      <Navbar/>
      <PlayBtn/>
      <PlayBtnMob/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/press" element={<Press/>}/>
        <Route path="/aboutus" element={<ReadMore/>}/>
      </Routes>
    </>
  )
}

export default App
