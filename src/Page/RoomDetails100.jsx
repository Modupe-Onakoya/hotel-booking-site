import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { roomsDummyData } from '../assets/assets'


const RoomDetails100 = () => {

    const { id } = useParams()
    const [roomP, setRoomP] = useState(null)
    const [mainImage, setMainImage] = useState(null)


    useEffect(() => {
        const room = roomsDummyData.find((rooms) => (rooms._id === id))
        room && setRoomP(room)
        room && setMainImage[room.images[0]]



    }, [])

    return (
        <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>

            <h1>{roomP.hotel.name}</h1> <span>{roomP.roomType}</span>
            <p>
                20% OFF
            </p>

            {/* room images */}
            <div className='flex flex-col lg:flex-row mt-6 gap-6'>
                <div className='lg:w-1/2 w-full'>
                    <img src={mainImage} alt="Room Image" className='w-full rounded-xl shadow-lg objecct-cover' />
                </div>
                <div>
                    {roomP?.images.length > 1 && roomP.images.map((imagae, index) => (
                        <img onClick={() => setMainImage(image)}
                            key={index} src={imagae} alt='Room Image'
                            className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && 'outline-3 outline-orange-500'}`} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default RoomDetails100


