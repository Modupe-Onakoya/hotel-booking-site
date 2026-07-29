
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { roomsDummyData } from '../assets/assets'

const RoomDetails = () => {
    const [room, setRoom] = useState(null)
    const { id } = useParams()
    useEffect(() => {

        const room = roomsDummyData.find((room) => (room._id === id))
        if (room) {
            setRoom(room)
        }
    }, [])
    room ? return (
        <div>
            <div>
                <h1>
                    {room.hotel.name}
                </h1>
            </div>
        </div>
    ): null
}

export default RoomDetails