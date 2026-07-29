
import React, { useState } from 'react'
import { assets, roomsDummyData } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const Checkbox = ({ label, selected = false, onchange = () => { } }) => {
    return (
        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
            <input type='checkbox' checked={selected} onChange={(e) => (onchangee.target.checked, label)} />
            <span className='select-none'>{label}</span>
        </label>
    )
}

const RadioButton = ({ label, selected = false, onchange = () => { } }) => {
    return (
        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
            <input type='radio' name='sortOption' checked={selected} onChange={(e) => (onchangee.target.checked, label)} />
            <span className='select-none'>{label}</span>
        </label>
    )
}


const AllRooms100 = () => {

    const navigate = useNavigate()
    const [openFilters, setOpenFilters] = useState(false)

    const roomTypes = [
        "Single Bed",
        "Double Bed",
        "Luxury Bed",
        "Family Suite"
    ]

    const PriceRanges = [
        "0 to 500",
        "500 to 1000",
        "1000 to 2000",
        "2000 to 3000"
    ]

    const sortOptions = [
        "Price Low to High",
        "Price High to Low",
        "Newest First"
    ]
    return (
        <div className='pt-28 px-4 lg:px-24 flex gap-20'>

            <div className='flex flex-col gap-3'>
                <h1>Hotel Rooms</h1>
                <p className='max-w-lg '>Taking advantage of our limited-time offers and packages to enhance your stay and create unforgettable moments</p>
                {roomsDummyData.map((room, idx) => (
                    <Link to={"/room-details/" + room._id} className='flex'>
                        <img key={idx} src={room.images[0]} alt="" className='w-50 h-30 rounded-md' />
                        <div>
                            <p>{room.hotel.address}</p>
                            <p>{room.hotel.name}</p>
                            {/* star */}
                            <div className='flex'>
                                {[...new Array(5)].map(() => (
                                    <img src={assets.starIconFilled} alt="" />
                                ))}
                                <span>200+ reviews </span>
                            </div>
                            <p>{room.hotel.city}</p>
                            {/* ammenities */}
                            <div className='flex'>
                                {room.amenities.map((offer) => (
                                    <p>{offer}</p>
                                ))}
                            </div>
                            <p>${room.pricePerNight}</p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* filter */}
            <div className='w-80 border-gray-300 text-gray-600 max-lag:mb-8 min-lg:mt-16'>
                <div>
                    <p>FILTERS</p>
                    <div>
                        <span onClick={() => setOpenFilters(!openFilters)} className='lg:hidden'>{openFilters ? "Hide" : "show"}</span>
                        <span className='hidden lg:block'>Clear</span>
                    </div>
                </div>
                <div className={`${openFilters ? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden transition-all duration-700`}>
                    <div className='px-5 pt-5'>
                        <p className='font-medium text-gray-800 pb-2 '>Popular filter</p>
                        {roomTypes.map((room, index) => (
                            <Checkbox key={index} label={room} />
                        ))}
                    </div>
                    <div className='px-5 pt-5'>
                        <p className='font-medium text-gray-800 pb-2 '>Price Range</p>
                        {PriceRanges.map((range, index) => (
                            <Checkbox key={index} label={`$ ${range}`} />
                        ))}
                    </div>
                    <div className='px-5 pt-5'>
                        <p className='font-medium text-gray-800 pb-2 '>Popular filter</p>
                        {sortOptions.map((option, index) => (
                            <RadioButton key={index} label={option} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllRooms100