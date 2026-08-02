import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import Navbar from './Navbar'
import { cities } from '../assets/assets'
import { useLocation, useNavigate } from 'react-router-dom'
import { context } from './AppContext'

const Hero = () => {
    const [pickedDestination, setPickedDestinations] = useState("")
    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")
    const [guests, setGuests] = useState(1)
    const { hotel } = useContext(context)

    const location = useLocation().pathname
    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault()
        navigate(`/all-hotels?city=${pickedDestination}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`)
    }

    return (
        <div
            style={{ backgroundImage: `url(${assets.heroImage})` }} className=' px-4 sm:px-10 lg:px-24  pt-2 bg-cover bg-no-repeat h-screen '>
            <div className='mt-50 space-y-2'>
                <p className='text-white bg-blue-400 w-fit opacity-75 rounded-xl text-[10px] px-3 h-fit md:text-[13px]'>The Ultimate Hotel Experience</p>
                <p className='text-xl max-w-[280px] text-white font-bold md:text-5xl md:max-w-lg'>Discover Your Perfect Gateway Destination</p>
                <p className='text-[10px] max-w-[250px] text-white md:text-[14px] md:max-w-lg'>Unparallel luxry and comfort await at the world most exclusive hotel and resort. Start your journey today. </p>
            </div>
            <form onSubmit={submit} className='bg-white text-gray-500 rounded-lg px-6 py-4  flex flex-col md:flex-row w-fit max-md:items-start gap-4 max-md:mx-auto'>

                <div>
                    <div className='flex items-center gap-2'>
                        <img src={assets.locationIcon} alt="" className='h-4' />
                        <label htmlFor="destinationInput">Destination</label>
                    </div>
                    <input list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" value={pickedDestination} onChange={(e) => setPickedDestinations(e.target.value)} />
                    <datalist id='destinations' >
                        {hotel.map((item, index) => (
                            <option value={item.city} key={index} />
                        ))}

                    </datalist>
                </div>

                <div>
                    <div className='flex items-center gap-2'>
                        <img src={assets.calenderIcon} alt="" className='h-4' />

                        <label htmlFor="checkIn">Check in</label>
                    </div>
                    <input value={checkIn} onChange={(e) => { setCheckIn(e.target.value) }} id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
                </div>

                <div>
                    <div className='flex items-center gap-2'>
                        <img src={assets.calenderIcon} alt="" className='h-4' />

                        <label htmlFor="checkOut">Check out</label>
                    </div>
                    <input value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)} id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
                </div>

                <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                    <label htmlFor="guests">Guests</label>
                    <input value={guests}
                        onChange={(e) => setGuests(e.target.value)} min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
                </div>

                <button type="submit" className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
                    <img src={assets.searchIcon} alt="" />
                    <span>Search</span>
                </button>
            </form>

        </div>
    )
}

export default Hero