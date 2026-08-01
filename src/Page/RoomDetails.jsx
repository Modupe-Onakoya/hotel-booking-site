
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData, userDummyData } from '../assets/assets'
import Star from '../Component/Star'

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
        <div className='pt-30 px-4 lg:px-24 text-[13px] space-y-1'>
            <div className='space-x-2 flex'>
                <div>
                    <span className='text-xl'>
                        {room.hotel.name}
                    </span>
                    <span className='text-[12px]'> (single bed)</span>
                </div>

                <span className='bg-orange-600 px-1 py-1 text-white rounded-2xl text-[13px]'>20% off</span>
            </div>
            <div className='flex items-center space-x-1 '>
                <Star />
                <span >
                    200+ reviews
                </span>
            </div>
            <div className='flex gap-1'>
                <img src={assets.locationIcon} alt="" />
                <span>{room.hotel.address}</span>
            </div>
            <div className='flex flex-col md:flex-row gap-2 py-2 '>
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

            <div className='flex justify-between  py-2 '>
                <div className='space-y-2'>
                    <p className='text-lg md:text-xl font-bold max-sm:max-w-[250px]'>
                        Experience Luxury Like Never Before
                    </p>
                    <p>
                    </p>
                    <div className='flex gap-2 border-b border-gray-300 pb-4'>
                        {room.amenities.map((item) => (
                            <div className='flex bg-gray-300 py-1 px-2 rounded-lg '>
                                <img src={facilityIcons[item]} alt="" className='w-3' />
                                <p className='   text-[12px]'>{item}</p>

                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    {room.pricePerNight}
                </div>
            </div>

            <form className='flex  border border-gray-200 rounded-lg mb-10 p-4 justify-between mt-4 shadow-lg flex-col space-y-5 md:flex-row' >
                <div className='flex gap-5 flex-col md:flex-col'>

                    <div className='flex flex-col border-r px-2 border-gray-300'>
                        <label htmlFor="checkin" className='text-sm'>Check In</label>
                        <input type="date" placeholder='checkin' required id='checkin' className='outline-none text-sm ' />
                    </div>
                    <div className='flex flex-col border-r px-2 border-gray-300'>
                        <label htmlFor="checkout" className='text-sm'>Check Out</label>
                        <input type="date" required id='checkout' placeholder='Check-out' className='outline-none text-sm  ' />
                    </div>
                    <div className='flex flex-col px-2'>
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
                    <div className='flex gap-2'>
                        <img src={room.icon} alt="" className='w-5' />
                        <div>
                            <p>{room.title}</p>
                            <p className='text-gray-500 text-[12px]'>
                                {room.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <p className='max-w-lg py-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum in impedit obcaecati nemo veniam voluptate fugit, eveniet incidunt aperiam quia, consectetur explicabo quo veritatis qui exercitationem deserunt ex sapiente!
            </p>

        </div>

    )
}

export default RoomDetails