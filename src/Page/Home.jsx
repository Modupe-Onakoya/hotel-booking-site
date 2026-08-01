import React from 'react'
import Hero from '../Component/Hero'
import { FeaturedHotels } from '../Component/FeaturedHotels'
import ExclusiveOffers from '../assets/ExclusiveOffers'
import Testimonial from '../Component/Testimonial'
import Footer from '../Component/Footer'
import Star from '../Component/Star'


const Home = () => {
    return (
        <div>
            <Hero />
            <FeaturedHotels />
            <ExclusiveOffers />
            <Testimonial />
        </div>
    )
}

export default Home