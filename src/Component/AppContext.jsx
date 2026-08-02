import { createContext, useEffect, useState } from "react";


import React from 'react'
export const context = createContext()

const AppContext = ({ children }) => {


    const [hotel, setHotel] = useState([])
    const [rooms, setRooms] = useState([])
    const [testimonial, setTestimonial] = useState([])
    const [Bookings, setBookings] = useState([])



    const hotelInfo = async () => {
        try {
            const hotelData = await fetch("http://localhost:5000/hotels")
            if (!hotelData.ok) {
                throw new Error("Failed to fetch data");
            }
            const roomsData = await fetch("http://localhost:5000/rooms")
            if (!roomsData.ok) {
                throw new Error("Failed to fetch data");
            }
            const testimonialData = await fetch("http://localhost:5000/testimonials")
            if (!testimonialData.ok) {
                throw new Error("Failed to fetch data");
            }
            const parsedHotelData = await hotelData.json()
            const parsedRoomsData = await roomsData.json()
            const parsedTestimonialData = await testimonialData.json()
            setHotel(parsedHotelData)
            setRooms(parsedRoomsData)
            setTestimonial(parsedTestimonialData)

        }
        catch (err) {
            console.log(err)
        }


    }
    useEffect(
        () => {
            hotelInfo()
        }, []
    )

    return (
        <context.Provider value={{ hotel, rooms, testimonial }}>
            {children}
        </context.Provider>
    )
}

export default AppContext