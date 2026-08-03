import React from 'react';
import { createContext, useEffect, useState } from "react";
import roomImg1 from '../assets/roomImg1.png'
import roomImg2 from '../assets/roomImg2.png'
import roomImg3 from '../assets/roomImg3.png'
import roomImg4 from '../assets/roomImg4.png'
import { data } from 'react-router-dom';
import { hotelData } from '../assets/assets';

const roomImages = [roomImg1, roomImg2, roomImg3, roomImg4]
export const context = createContext()

const AppContext = ({ children }) => {


    const [hotel, setHotel] = useState([])
    const [rooms, setRooms] = useState([])

    const roomsWithImages = hotelData.rooms.map((room) => ({
        ...room,
        images: [roomImg1, roomImg2, roomImg3, roomImg4]
    }))

    // merge real image into hotels
    const hotelsWithImages = hotelData.hotels.map((h, index) => ({
        ...h,
        image: roomImages[index % roomImages.length]
    }))

    useEffect(() => {
        setHotel(hotelsWithImages)
        setRooms(roomsWithImages)
    }, [])

    return (
        <context.Provider value={{ hotel, rooms }}>
            {children}
        </context.Provider>
    )
}

export default AppContext