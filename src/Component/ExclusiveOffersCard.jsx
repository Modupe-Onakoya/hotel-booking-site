
import React from 'react'
import { assets } from '../assets/assets'

const ExclusiveOffersCard = ({ offer, key }) => {
    return (
        <div className='  relative text-white max-w-90 space-y-4 px-4  py-2 rounded-md ' key={offer._id} style={{ backgroundImage: `url(${offer.image})` }}>

            <p className='bg-white text-black w-fit px-2 py-1 text-sm rounded-xl'>
                {offer.priceOff}% OFF
            </p>
            <div>
                <p className='font-bold'>
                    {offer.title}
                </p>
                <p className=' text-sm'>
                    {offer.description}
                </p>
            </div>
            <p>
                Expires {offer.expiryDate}
            </p>

            <div className='flex gap-2'>
                <p>
                    View  Offers
                </p>
                <img src={assets.arrowIcon} alt="" className='bg-white py-1 px-2 rounded-lg' />
            </div>
        </div>
    )
}

export default ExclusiveOffersCard