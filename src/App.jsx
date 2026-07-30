import { Route, Routes, useLocation } from "react-router-dom"
import QuickStay from "./Page/QuickStay"
import Home from "./Page/Home"
import Navbar from "./Component/Navbar"
import AllRooms from "./Page/AllRooms"
import RoomDetails from "./Page/RoomDetails"
import MyBooking from "./Component/MyBooking"


function App() {
  const isOwner = useLocation().pathname.includes("owner")

  return (
    <>
      {!isOwner && <Navbar />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/room-details/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBooking />} />


        </Routes>
      </div>

    </>
  )
}

export default App
