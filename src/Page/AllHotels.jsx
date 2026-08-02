import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, useSearchParams } from 'react-router-dom'
import { context } from '../Component/AppContext'
import Star from '../Component/Star'

const AllHotels = () => {
    const { hotel } = useContext(context)
    const [searchParams] = useSearchParams()

    // read city from URL
    const city = searchParams.get("city")
    const checkIn = searchParams.get("checkIn")
    const checkOut = searchParams.get("checkOut")
    const guests = searchParams.get("guests")

    // filter hotels by city if city exists in URL
    const filteredHotels = city
        ? hotel.filter((h) => h.city.toLowerCase() === city.toLowerCase())
        : hotel

    return (
        <div className='px-4 pt-30 md:px-24'>

            {/* header */}
            <div className='mb-8'>
                <h1 className='font-bold text-xl'>
                    {city ? `Hotels in ${city}` : "All Hotels"}
                </h1>
                <p className='max-w-xl text-sm py-3 text-gray-500'>
                    {checkIn && checkOut
                        ? `${checkIn} → ${checkOut} · ${guests} guest(s)`
                        : "Browse our available hotels"
                    }
                </p>
            </div>

            {/* no results */}
            {filteredHotels.length === 0 && (
                <p className='text-sm text-gray-500'>
                    No hotels found in "{city}". Try a different destination.
                </p>
            )}

            {/* hotel cards */}
            <div className='space-y-5'>
                {filteredHotels.map((h, index) => (
                    <Link
                        to={`/rooms?hotelName=${h.name}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`}
                        key={index}
                        className='flex flex-col md:flex-row gap-5 border-b border-gray-300 py-5'
                    >
                        <img
                            src={h.image}
                            alt={h.name}
                            className='w-60 h-40 rounded-md object-cover'
                        />
                        <div className='space-y-2'>
                            <p className='text-[14px] font-medium'>{h.name}</p>
                            <p className='text-xs text-gray-500'>{h.address}</p>
                            <div className='flex items-center gap-1'>
                                <Star />
                                <span className='text-xs'>{h.rating} rating</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <img src={assets.locationIcon} alt="" className='h-3' />
                                <span className='text-xs text-gray-500'>{h.city}</span>
                            </div>
                            <p className='text-xs text-gray-500'>{h.description}</p>
                            <p className='text-xs font-medium'>
                                Contact: {h.contact}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default AllHotels