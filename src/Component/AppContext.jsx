import React from 'react';
import { createContext, useEffect, useState } from "react";
import roomImg1 from '../assets/roomImg1.png'
import roomImg2 from '../assets/roomImg2.png'
import roomImg3 from '../assets/roomImg3.png'
import roomImg4 from '../assets/roomImg4.png'

const roomImages = [roomImg1, roomImg2, roomImg3, roomImg4]
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


            const roomsWithImages = parsedRoomsData.map((room) => ({
                ...room,
                images: [roomImg1, roomImg2, roomImg3, roomImg4]
            }))
            const hotelsWithImages = parsedHotelData.map((h, index) => ({
                ...h,
                image: roomImages[index % roomImages.length]
            }))

            setHotel(hotelsWithImages)
            setRooms(roomsWithImages)
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