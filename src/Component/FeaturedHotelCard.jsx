import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const FeaturedHotelCard = ({ room, index }) => {
    return (
        <Link to={"/rooms/" + room._id} className='rounded-sm border-gray-300 border relative' >

            {index % 2 === 0 && <p className='absolute top-2 left-2 px-3 py-1 rounded-lg bg-white'>Best Seller</p>}
            <img className="w-50 h-30 rounded-sm" src={room.images[0]} alt="" />
            <div className='p-2 space-y-2'>
                <div className='flex justify-between'>
                    <span>{room.hotel.name}</span>
                    <div className='flex'>
                        <img src={assets.starIconFilled} alt="" />
                        <span>
                            {4.9}
                        </span>
                    </div>
                </div>

                <div className='flex '>
                    <img src={assets.locationIcon} alt="" />
                    <span>Maldives</span>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <span className='font-bold text-sm'>$450</span>
                        <span className='text-smS'>/night</span>
                    </div>
                    <button className='font-bold border py-1 text-xs border-gray-300 rounded-md px-1'>View Details</button>
                </div>
            </div>
        </Link>
    )
}

export default FeaturedHotelCard