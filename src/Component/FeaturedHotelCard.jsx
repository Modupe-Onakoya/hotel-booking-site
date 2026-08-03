import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const FeaturedHotelCard = ({ room, index }) => {
    return (
        <Link to={`/rooms?hotelName=${room.name}`} className='rounded-sm border-gray-300 border relative text-[13px]' >

            {index % 2 === 0 && <p className='absolute text-[13px] top-2 left-2 px-3 py-1 rounded-lg bg-white'>Best Seller</p>}
            <img className="w-50 h-30 rounded-sm" src={room.image} alt="" />
            <div className='p-2 space-y-2'>
                <div className='flex justify-between'>
                    <span>{room.name}</span>
                    <div className='flex'>
                        <img src={assets.starIconFilled} alt="" className='w-3' />
                        <span>
                            {4.9}
                        </span>
                    </div>
                </div>

                <div className='flex gap-1 '>
                    <img src={assets.locationIcon} alt="" className='w-3' />
                    <span>{room.city}</span>
                </div>
                <div className='flex justify-between'>

                    <button className=' cursor-pointer border py-1 text-xs border-gray-300 rounded-md px-1'>View Details</button>
                </div>
            </div>
        </Link>
    )
}

export default FeaturedHotelCard