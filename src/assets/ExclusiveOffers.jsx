import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from './assets'
import ExclusiveOffersCard from '../Component/ExclusiveOffersCard'

const ExclusiveOffers = () => {
    return (
        <div className='px-4 md:px-10  lg:px-24 pt-20 md:pt-30'>
            <div className='md:flex justify-between'>
                <Title align='max-w-md' title='Exclusive Offers' subtitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories' />
                <p className='border px-2 py-1 hover:-translate-y-2 cursor-pointer h-fit border-gray-300 w-fit rounded-lg mb-2 flex text-[13px] gap-2 ' >View all site <img src={assets.arrowIcon} alt="" className='w-2' /></p>
            </div>

            <div className='flex gap-3  flex-col md:flex-row'>
                {exclusiveOffers.map((offer) => (

                    <ExclusiveOffersCard offer={offer} />
                ))}
            </div>
        </div>
    )
}

export default ExclusiveOffers