import React, { useContext } from 'react'
import { assets, hotelDummyData, roomsDummyData } from '../assets/assets'
import FeaturedHotelCard from './FeaturedHotelCard'
import { useNavigate } from 'react-router-dom'
import { context } from './AppContext'

export const FeaturedHotels = () => {
    const { hotel } = useContext(context)
    const navigate = useNavigate()
    return (
        <div className='flex flex-col pt-20 md:pt-30 items-center px-4  ' id='hotels'>
            <h1 className='font-bold text-xl text-center '>Featured Hotels</h1>
            <p className='max-w-lg text-[13px] text-center pt-2 pb-8'>Discover our handPicked selection of exceptional properties around the world offering luxury and cormfortable experience</p>
            <div className='flex flex-col md:flex-row gap-5  relative'>
                {hotel.map((room, index) => (

                    <FeaturedHotelCard room={room} index={index} />
                ))}

            </div>

        </div>
    )
}
