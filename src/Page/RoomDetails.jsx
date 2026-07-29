
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, roomsDummyData } from '../assets/assets'

const RoomDetails = () => {
    const [room, setRoom] = useState(null)
    const [image, setImage] = useState(null)
    const { id } = useParams()
    useEffect(() => {

        const room = roomsDummyData.find((room) => (room._id === id))
        if (room) {
            setRoom(room)
            setImage(room)
        }
    }, []);

    function change(e) {
        setImage(e.target)
    }
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
            <div className='flex'>
                <div className='flex-1'>
                    <img src={image.images[0]} alt="" className='max-w-xl ' />
                </div>

                <div className='flex flex-1'>
                    {image.images.map((image) => (
                        <div>
                            <img src={image} alt="" className='w' />

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RoomDetails