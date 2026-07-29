import React from 'react'
import Title from './Title'
import { exclusiveOffers } from './assets'
import ExclusiveOffersCard from '../Component/ExclusiveOffersCard'

const ExclusiveOffers = () => {
    return (
        <div className='px-4 md:px-24 pt-20'>
            <div className='md:flex justify-between'>
                <Title align='max-w-md' title='Exclusive Offers' subtitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories' />
                <p className='border px-2 h-fit border-gray-300 max-md:inline-block rounded-lg mb-2' >View all site</p>
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