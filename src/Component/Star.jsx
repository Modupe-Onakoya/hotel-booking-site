import React from 'react'
import { assets } from '../assets/assets'

function Star() {
    const star = [1, 2, 3, 4, 5]
    const rating = 4
    return (
        <div className='flex'>
            {
                star.map((items, index) => (
                    <div>
                        {
                            index < rating ? <img src={assets.starIconFilled} className='w-3' />
                                : <img src={assets.starIconOutlined} className='w-3' />
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Star