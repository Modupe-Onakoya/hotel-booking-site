import { Route, Routes, useLocation } from "react-router-dom"
import QuickStay from "./Page/QuickStay"
import Home from "./Page/Home"
import Navbar from "./Component/Navbar"


function App() {
  const isOwner = useLocation().pathname.includes("owner")

  return (
    <>
      {!isOwner && <Navbar />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quick-stay" element={<QuickStay />} />
        </Routes>
      </div>

    </>
  )
}

export default App
