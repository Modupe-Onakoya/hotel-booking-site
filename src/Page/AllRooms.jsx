import React, { useState } from 'react'
import { assets, roomsDummyData } from '../assets/assets'
import { Link } from 'react-router-dom'
import Star from '../Component/Star'

const roomTypes = [
    "Single Bed",
    "Double Bed",
    "Family Bed",
    "Luxury Suite",
];

const prices = [
    "₦2,500 - ₦5,000",
    "₦5,000 - ₦10,000",
    "₦10,000 - ₦20,000",
];

const sort = [
    "Price Low to High",
    "Price High to Low",
    "Newest Price",
];

const AllRooms = () => {

    const [showFilterBar, setShowFilterBar] = useState(false)
    return (
        <div className='px-4 pt-30 md:px-24 flex gap-10 lg:gap-30 flex-col-reverse md:flex-row '>
            <div>

                <h1 className='font-bold text-xl '>
                    Hotel Rooms
                </h1>
                <p className='max-w-xl text-sm py-3'>
                    Take advantage of our limited time offer and special packages to enhance your stay and create unforgettable moments
                </p>
                <div className=' space-y-5'>
                    {roomsDummyData.map((room, index) => (
                        <Link to={"/room-details/" + room._id} className='flex text-[12px] flex-col md:flex-row gap-5 border-b border-gray-300 py-5 '>
                            <img src={room.images[0]} alt="img" className='w-60 h-40 rounded-md' />
                            <div className='space-y-2'>
                                <p className='text-xs text-gray-500'>{room.hotel.address}</p>
                                <p className='text-[14px]'>{room.hotel.name}</p>
                                <div className='flex items-center'>
                                    <Star />

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

                <div>
                    <label htmlFor="go">me
                    </label>

                    <input type="checkbox" id='go' />
                </div>
            </div>

            {/* Filter */}

            <div className=' h-fit w-full max-w-[250px] '>
                <div className='flex justify-between border border-gray-300 w-full p-3 ' >
                    <p>Filter</p>
                    <p className='md:block hidden cursor-pointer' >Clear</p>

                    {
                        showFilterBar ? <p className='md:hidden cursor-pointer' onClick={() => setShowFilterBar(!showFilterBar)}>Close</p> : <p className='cursor-pointer md:hidden' onClick={() => setShowFilterBar(!showFilterBar)}>open</p>
                    }
                </div>
                <div className={`${showFilterBar ? "block" : "hidden"} md:block border border-t-0 p-3 space-y-2 border-gray-300`}>
                    <div className='space-y-1'>
                        <h2 className=''>
                            Popular filters
                        </h2>
                        <div className='space-y-2'>
                            {roomTypes.map((items) => (
                                <div className='space-x-1 text-[12px] flex items-center'>
                                    <input type="checkbox" id={items} className='' />
                                    <label htmlFor={items}>{items}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <h2 className=''>
                            Price
                        </h2>
                        <div className='space-y-2 '>
                            {prices.map((items) => (
                                <div className='space-x-1 text-[12px] flex items-center'>
                                    <input type="checkbox" id={items} />
                                    <label htmlFor={items}>{items}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <h2 className=''>
                            Sort By
                        </h2>
                        <div className='space-y-2'>
                            {sort.map((items) => (
                                <div className='space-x-1 text-[12px] flex items-center'>
                                    <input type="checkbox" id={items} />
                                    <label htmlFor={items}>{items}</label>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div >

        </div >
    )
}

export default AllRooms