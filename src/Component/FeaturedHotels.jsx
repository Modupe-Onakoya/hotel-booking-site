import React from 'react'
import { assets, hotelDummyData, roomsDummyData } from '../assets/assets'
import FeaturedHotelCard from './FeaturedHotelCard'
import { useNavigate } from 'react-router-dom'

export const FeaturedHotels = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col pt-20 md:pt-30 items-center px-4 '>
            <h1 className='font-bold text-xl text-center '>Featured Hotels</h1>
            <p className='max-w-lg text-[13px] text-center pt-2 pb-8'>Discover our handPicked selection of exceptional properties around the world offering luxury and cormfortable experience</p>
            <div className='flex flex-col md:flex-row gap-5  relative'>
                {roomsDummyData.map((room, index) => (

                    <FeaturedHotelCard room={room} index={index} />
                ))}

            </div>

            <p className='text-center border p-1 shadow-lg border-gray-300 text-sm rounded-lg mt-5 cursor-pointer hover:-translate-y-2 ' onClick={() => navigate('/rooms-details')}> View  all searches</p>
        </div>
    )
}
