import React from 'react'
import { assets, roomsDummyData } from '../assets/assets'
import { Link } from 'react-router-dom'

const AllRooms = () => {
    return (
        <div className='px-4 pt-20 md:px-24 flex flex-col-reverse md:flex-row'>
            <div>

                <h1 className='font-bold text-xl '>
                    Hotel Rooms
                </h1>
                <p className='max-w-xl text-sm'>
                    Take advantage of our limited time offer and special packages to enhance your stay and create unforgettable moments
                </p>
                <div className=' space-y-5'>
                    {roomsDummyData.map((room, index) => (
                        <Link to={"/room-details/" + room._id} className='flex flex-col md:flex-row gap-5 border-b border-gray-300 py-5 '>
                            <img src={room.images[0]} alt="img" className='w-60 h-40 rounded-md' />
                            <div>
                                <p className='text-xs text-gray-500'>{room.hotel.address}</p>
                                <p>{room.hotel.name}</p>
                                <div>
                                    <span>
                                        200+ reviews
                                    </span>
                                </div>
                                <div className='flex'>
                                    <img src={assets.locationIcon} alt="" />
                                    <span className=''>{room.hotel.name}</span>
                                </div>
                                <div className='flex gap-2'>
                                    {room.amenities.map((amenity) => (
                                        <p className='text-xs bg-gray-200 p-1 text-bold rounded-md' > {amenity}</p>
                                    ))}
                                </div>
                                <p>
                                    ${room.pricePerNight}/day
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>

            {/* Filter */}

            <div className='border h-fit'>
                <p>Filter</p>
                <p className='md:block hidden' >Clear</p>
            </div>
        </div>
    )
}

export default AllRooms