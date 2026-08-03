import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useSearchParams } from 'react-router-dom'
import Star from '../Component/Star'
import { context } from '../Component/AppContext';

const roomTypes = ["Single Bed", "Double Bed", "Family Bed", "Luxury Suite"];
const prices = ["₦2,500 - ₦5,000", "₦5,000 - ₦10,000", "₦10,000 - ₦20,000"];
const sort = ["Price Low to High", "Price High to Low", "Newest Price"];

const AllRooms = () => {
    const [showFilterBar, setShowFilterBar] = useState(false)
    const [selectedRoomTypes, setSelectedRoomTypes] = useState([])
    const [selectedPrice, setSelectedPrice] = useState("")
    const [selectedSort, setSelectedSort] = useState("")

    const { rooms } = useContext(context)
    const [searchParams] = useSearchParams()

    const hotelName = searchParams.get("hotelName")
    const checkIn = searchParams.get("checkIn")
    const checkOut = searchParams.get("checkOut")
    const guests = searchParams.get("guests")

    // handlers
    const handleRoomType = (type) => {
        setSelectedRoomTypes((prev) =>
            prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
        )
    }

    const handlePrice = (price) => {
        setSelectedPrice((prev) => prev === price ? "" : price)
    }

    const handleSort = (s) => {
        setSelectedSort((prev) => prev === s ? "" : s)
    }

    const handleClear = () => {
        setSelectedRoomTypes([])
        setSelectedPrice("")
        setSelectedSort("")
    }


    const filteredRooms = rooms
        .filter((room) => hotelName ? room.hotelName === hotelName : true)
        .filter((room) => selectedRoomTypes.length > 0 ? selectedRoomTypes.includes(room.roomType) : true)
        .filter((room) => {
            if (!selectedPrice) return true
            if (selectedPrice === "₦2,500 - ₦5,000") return room.pricePerNight <= 150
            if (selectedPrice === "₦5,000 - ₦10,000") return room.pricePerNight > 150 && room.pricePerNight <= 300
            if (selectedPrice === "₦10,000 - ₦20,000") return room.pricePerNight > 300
            return true
        })
        .sort((a, b) => {
            if (selectedSort === "Price Low to High") return a.pricePerNight - b.pricePerNight
            if (selectedSort === "Price High to Low") return b.pricePerNight - a.pricePerNight
            return 0
        })

    return (
        <div className='px-4 pt-30 md:px-24 flex gap-10 lg:gap-30 flex-col-reverse md:flex-row'>
            <div>
                <h1 className='font-bold text-xl'>
                    {hotelName ? `Hotel Rooms in "${hotelName}"` : "All Rooms"}
                </h1>
                <p className='max-w-xl text-sm py-3'>
                    Take advantage of our limited time offers and special packages to enhance your stay.
                </p>

                {filteredRooms.length === 0 && (
                    <p className='text-sm text-gray-500'>No rooms match your filters. Try adjusting or clearing them.</p>
                )}

                <div className='space-y-5'>
                    {filteredRooms.map((room, index) => (
                        <Link
                            key={index}
                            to={`/room-details/${room.id}`}
                            className='flex text-[12px] flex-col md:flex-row gap-5 border-b border-gray-300 py-5'
                        >
                            <img src={room.images[0]} alt="img" className='w-60 h-40 rounded-md object-cover' />
                            <div className='space-y-2'>
                                <p className='text-[14px] font-medium'>{room.hotelName}</p>
                                <p className='text-xs text-gray-500'>{room.roomType}</p>
                                <div className='flex items-center gap-1'>
                                    <Star />
                                    <span>200+ reviews</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <img src={assets.locationIcon} alt="" className='h-3' />
                                    <span>{room.city}</span>
                                </div>
                                <div className='flex gap-2 flex-wrap'>
                                    {room.amenities.map((amenity) => (
                                        <p key={amenity} className='text-xs bg-gray-200 p-1 rounded-md'>{amenity}</p>
                                    ))}
                                </div>
                                <p className='font-medium'>${room.pricePerNight}/night</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Filter */}
            <div className='h-fit w-full max-w-[250px]'>
                <div className='flex justify-between border border-gray-300 w-full p-3'>
                    <p>Filter</p>
                    <p className='md:block hidden cursor-pointer' onClick={handleClear}>Clear</p>
                    {showFilterBar
                        ? <p className='md:hidden cursor-pointer' onClick={() => setShowFilterBar(!showFilterBar)}>Close</p>
                        : <p className='cursor-pointer md:hidden' onClick={() => setShowFilterBar(!showFilterBar)}>Open</p>
                    }
                </div>

                <div className={`${showFilterBar ? "block" : "hidden"} md:block border border-t-0 p-3 space-y-2 border-gray-300`}>

                    {/* Room Types */}
                    <div className='space-y-1'>
                        <h2>Popular filters</h2>
                        <div className='space-y-2'>
                            {roomTypes.map((item) => (
                                <div key={item} className='space-x-1 text-[12px] flex items-center'>
                                    <input
                                        type="checkbox"
                                        id={item}
                                        checked={selectedRoomTypes.includes(item)}
                                        onChange={() => handleRoomType(item)}
                                    />
                                    <label htmlFor={item}>{item}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Price */}
                    <div className='space-y-1'>
                        <h2>Price</h2>
                        <div className='space-y-2'>
                            {prices.map((item) => (
                                <div key={item} className='space-x-1 text-[12px] flex items-center'>
                                    <input
                                        type="checkbox"
                                        id={item}
                                        checked={selectedPrice === item}
                                        onChange={() => handlePrice(item)}
                                    />
                                    <label htmlFor={item}>{item}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sort */}
                    <div className='space-y-1'>
                        <h2>Sort By</h2>
                        <div className='space-y-2'>
                            {sort.map((item) => (
                                <div key={item} className='space-x-1 text-[12px] flex items-center'>
                                    <input
                                        type="checkbox"
                                        id={item}
                                        checked={selectedSort === item}
                                        onChange={() => handleSort(item)}
                                    />
                                    <label htmlFor={item}>{item}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AllRooms