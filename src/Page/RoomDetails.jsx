import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData } from '../assets/assets'
import Star from '../Component/Star'
import { context } from '../Component/AppContext'

const RoomDetails = () => {
    const [room, setRoom] = useState(null)
    const [image, setImage] = useState("")
    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")
    const [guests, setGuests] = useState(1)
    const [bookingSuccess, setBookingSuccess] = useState(false)

    const { id } = useParams()
    const { rooms, addBooking } = useContext(context)

    useEffect(() => {
        const found = rooms.find((room) => String(room.id) === String(id))
        if (found) {
            setRoom(found)
            setImage(found.images[0])
        }
    }, [id, rooms])

    const handleBooking = (e) => {
        e.preventDefault()

        addBooking({
            roomId: room.id,
            hotelName: room.hotelName,
            roomType: room.roomType,
            image: room.images[0],
            city: room.city,
            pricePerNight: room.pricePerNight,
            checkIn,
            checkOut,
            guests: Number(guests),
        })

        setBookingSuccess(true)
        setCheckIn("")
        setCheckOut("")
        setGuests(1)
    }

    return room && (
        <div className='pt-30 px-4 lg:px-24 text-[13px] space-y-1'>

            <div className='space-x-2 flex'>
                <div>
                    <span className='text-xl'>{room.hotelName}</span>
                    <span className='text-[12px]'> ({room.roomType})</span>
                </div>
                <span className='bg-orange-600 px-1 py-1 text-white rounded-2xl text-[13px]'>20% off</span>
            </div>

            <div className='flex items-center space-x-1'>
                <Star />
                <span>200+ reviews</span>
            </div>

            <div className='flex gap-1'>
                <img src={assets.locationIcon} alt="" />
                <span>{room.city}</span>
            </div>

            <div className='flex flex-col md:flex-row gap-2 py-2'>
                <div className='md:w-1/2'>
                    <img src={image} alt="selected" className='w-full h-full object-cover rounded-lg' />
                </div>
                <div className='md:w-1/2 grid grid-cols-2 gap-3'>
                    {room.images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt=""
                            onClick={() => setImage(img)}
                            className="w-full h-full object-cover rounded-md cursor-pointer"
                        />
                    ))}
                </div>
            </div>

            <div className='flex justify-between py-2'>
                <div className='space-y-2'>
                    <p className='text-lg md:text-xl font-bold max-sm:max-w-[250px]'>
                        Experience Luxury Like Never Before
                    </p>
                    <div className='flex gap-2 flex-col md:flex-row border-b border-gray-300 pb-4'>
                        {room.amenities.map((item) => (
                            <div key={item} className=' w-fit flex items-center bg-gray-300 py-1 px-2 rounded-lg gap-1'>
                                <img src={facilityIcons[item]} alt="" className='w-3' />
                                <p className='text-[12px]'>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='text-lg font-bold'>
                    ${room.pricePerNight}/night
                </div>
            </div>

            {bookingSuccess && (
                <div className='bg-green-100 text-green-700 px-4 py-3 rounded-lg text-sm'>
                    Booking successful! Go to <a href="/my-bookings" className='underline font-medium'>My Bookings</a> to view it.
                </div>
            )}

            <form onSubmit={handleBooking} className='flex border border-gray-200 rounded-lg mb-10 p-4 justify-between mt-4 shadow-lg flex-col space-y-5 md:flex-row'>
                <div className='flex gap-5 flex-col md:flex-row'>
                    <div className='flex flex-col border-r px-2 border-gray-300'>
                        <label htmlFor="checkin" className='text-sm'>Check In</label>
                        <input
                            type="date"
                            id='checkin'
                            required
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            className='outline-none text-sm'
                        />
                    </div>
                    <div className='flex flex-col border-r px-2 border-gray-300'>
                        <label htmlFor="checkout" className='text-sm'>Check Out</label>
                        <input
                            type="date"
                            id='checkout'
                            required
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            className='outline-none text-sm'
                        />
                    </div>
                    <div className='flex flex-col px-2'>
                        <label htmlFor="guest" className='text-sm'>Guests</label>
                        <input
                            type="number"
                            id='guest'
                            required
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className='outline-none text-sm w-1/2'
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className='bg-blue-700 px-4 text-sm h-fit py-1 cursor-pointer text-white rounded'
                >
                    Book Now
                </button>
            </form>

            <div className='space-y-3'>
                {roomCommonData.map((item) => (
                    <div key={item.title} className='flex gap-2'>
                        <img src={item.icon} alt="" className='w-5' />
                        <div>
                            <p>{item.title}</p>
                            <p className='text-gray-500 text-[12px]'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <p className='max-w-lg py-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum in impedit obcaecati nemo veniam voluptate fugit, eveniet incidunt aperiam quia.
            </p>

        </div>
    )
}

export default RoomDetails