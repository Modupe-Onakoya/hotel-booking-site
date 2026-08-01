
import React from 'react'
import { assets } from '../assets/assets'

const ExclusiveOffersCard = ({ offer, key }) => {
    return (
        <div className='  relative text-white  space-y-3 px-4  py-2 rounded-md  lg:w-1/3' key={offer._id} style={{ backgroundImage: `url(${offer.image})` }}>

            <p className='bg-white text-black w-fit font-medium px-2 py-1 rounded-xl text-[11px]  '>
                {offer.priceOff}% OFF
            </p>
            <div>
                <p className='font-bold text-sm'>
                    {offer.title}
                </p>
                <p className=' text-sm text-[13px]'>
                    {offer.description}
                </p>
            </div>
            <p className='text-[13px]'>
                Expires {offer.expiryDate}
            </p>

            <div className='flex gap-1 bg-white text-black text-[12px] w-fit px-2 py-1 rounded-md'>
                <p>
                    View  Offers
                </p>
                <img src={assets.arrowIcon} alt="" className=' py-1 px-1 rounded-md w-5' />
            </div>
        </div>
    )
}

export default ExclusiveOffersCard