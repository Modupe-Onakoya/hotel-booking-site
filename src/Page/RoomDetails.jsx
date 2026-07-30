
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, roomCommonData, roomsDummyData, userDummyData } from '../assets/assets'

const RoomDetails = () => {
    const [room, setRoom] = useState(null)
    const [image, setImage] = useState()
    const { id } = useParams()
    useEffect(() => {

        const room = roomsDummyData.find((room) => (room._id === id))
        if (room) {
            setRoom(room)
            setImage(room.images[0])
        }
    }, [id]);

    return room && (
        <div className='pt-30 px-4 lg:px-24'>
            <div className='space-x-3'>
                <span className='text-2xl'>
                    {room.hotel.name}
                </span>
                <span> (single bed)</span>
                <span className='bg-orange-600 px-2 py-1 text-white rounded-lg'>    20% off</span>
            </div>
            <div>
                <span>
                    200+ reviews
                </span>
            </div>
            <div className='flex'>
                <img src={assets.locationIcon} alt="" />
                <span>{room.hotel.address}</span>
            </div>
            <div className='flex flex-col md:flex-row gap-2  '>
                <div className='md:w-1/2'>
                    <img src={image ? image : room.hotel.images[0]} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>

                <div className='md:w-1/2 grid grid-cols-2 gap-3'>
                    {room.images.map((img, index) => (
                        <div>
                            <img key={index} src={img} alt="" className='' onClick={() => { setImage(img) }} className="w-full h-full object-cover rounded-md cursor-pointer" />

                        </div>
                    ))}
                </div>
            </div>

            <div className='flex justify-between'>
                <div>
                    <p>
                        Experience Luxury Like Never Before
                    </p>
                    <div>
                        {room.amenities}
                    </div>
                </div>
                <div>
                    {room.pricePerNight}
                </div>
            </div>

            <form className='flex  border border-gray-200 rounded-lg mb-10 p-4 justify-between' S>
                <div className='flex gap-5'>

                    <div className='flex flex-col'>
                        <label htmlFor="checkin" className='text-sm'>Check In</label>
                        <input type="date" placeholder='checkin' required id='checkin' className='outline-none text-sm ' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="checkout" className='text-sm'>Check Out</label>
                        <input type="date" required id='checkout' placeholder='Check-out' className='outline-none text-sm  ' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="guest" className='text-sm'>Check in</label>
                        <input type="number" required id='guest' placeholder='Guest' className='outline-none text-sm  w-1/2' />
                    </div>
                </div>

                <button className='bg-blue-700 px-4 text-sm h-fit py-1 cursor-pointer text-white'>
                    Check Availabilty
                </button>
            </form>


            <div>
                {roomCommonData.map((room) => (
                    <div className='flex'>
                        <img src={room.icon} alt="" />
                        <div>
                            <p>{room.title}</p>
                            <p>
                                {room.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <p className='max-w-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum in impedit obcaecati nemo veniam voluptate fugit, eveniet incidunt aperiam quia, consectetur explicabo quo veritatis qui exercitationem deserunt ex sapiente!
            </p>

        </div>

    )
}

export default RoomDetails