import React, { useState } from 'react'
import { assets, roomsDummyData } from '../assets/assets'

const MyBooking = () => {


    const [booking, setBooking] = useState(roomsDummyData)

    return (
        <div className='pt-30 px-4 lg:px-24'>
            <h1 className='text-xl font-bold'>My Bookings</h1>
            <p className='max-w-lg'>Easily manage past current and upcoming hotel reservations in one place. Plan your trips seamlessly with just few click</p>

            <div className='grid grid-cols-[3fr_2fr_1fr]'>
                <div>
                    Hotel
                </div>
                <div>
                    Timing
                </div>
                <div>
                    Payment
                </div>
                {
                    booking.slice(0, 2).map((book, index) => (
                        <div className='grid grid-span-3'>
                            {/* hotel */}

                            <div>
                                <img src={book.images[0]} alt="" className='w-60 h-40' />

                                <p>{book.hotel.name}</p>
                                <div>
                                    <img src={assets.locationIcon} alt="" />
                                    <p>{book.hotel.address}</p>
                                    <p>Guest 2</p>
                                    <div>
                                        <span>Total</span>
                                        <span>{book.pricePerNight}</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                checek ik
                            </div>
                            <div>
                                paid
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default MyBooking