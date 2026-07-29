import React from 'react'
import { assets, hotelDummyData, roomsDummyData } from '../assets/assets'
import FeaturedHotelCard from './FeaturedHotelCard'
import { useNavigate } from 'react-router-dom'

export const FeaturedHotels = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col pt-20 items-center px-4 '>
            <h1 className='font-bold text-lg text-center '>Featured Hotels</h1>
            <p className='max-w-lg text-sm text-center py-5'>Discover our handPicked selection of exceptional properties around the world offering luxury and cormfortable experience</p>
            <div className='flex flex-col md:flex-row gap-5  relative'>
                {roomsDummyData.map((room, index) => (

                    <FeaturedHotelCard room={room} index={index} />
                ))}

            </div>

            <p className='text-center border p-1 shadow-lg border-gray-300 text-sm rounded-lg mt-5 ' onClick={() => navigate('/rooms')}> View  all searches</p>
        </div>
    )
}
