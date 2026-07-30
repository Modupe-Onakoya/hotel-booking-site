import React from 'react'
import Hero from '../Component/Hero'
import { FeaturedHotels } from '../Component/FeaturedHotels'
import ExclusiveOffers from '../assets/ExclusiveOffers'
import Testimonial from '../Component/Testimonial'


const Home = () => {
    return (
        <div>
            <Hero />
            <FeaturedHotels />
            <ExclusiveOffers />
        </div>
    )
}

export default Home