import React from 'react'
import { assets } from '../assets/assets'

const Testimonial = () => {
    return (
        <div className='px-4 md:px-10 mt-20 md:mt-30 lg:px-24 bg-blue-50 py-4  '>
            <h1 className='font-bold text-2xl text-center'>
                What our guest say
            </h1>
            <p className='text-center text-[13px] pt-2 pb-8'>Discover why people decide to use QuickStay for their luxury accomodation around the world</p>
            <div className=' flex flex-col md:flex-row justify-center items-center gap-4'>


                <div className='border border-gray-200 shadow-sm rounded-lg p-2 max-w-[300px] bg-white'>
                    <div className='flex items-center gap-2'>
                        <div className='w-7 h-7 rounded-full bg-orange-500'>

                        </div>
                        <div>
                            <p className='text-[13px]'>Emmma Rodriguez</p>
                            <p className='text-[12px]'>Barcelona Spain</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex pb-3'>
                            {
                                [...new Array(5)].map((item) => (
                                    <img src={assets.starIconFilled} className='w-2' />
                                ))
                            }
                        </div>
                        <p className='max-w-[250px] text-[13px]  '>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, cum! Corrupti ratione, rerum recusandae vero molestias inventore. Corrupti alias quia provident
                        </p>
                    </div>

                </div>

                <div className='border border-gray-200 shadow-sm rounded-lg p-2 max-w-[300px]  bg-white'>
                    <div className='flex items-center gap-2'>
                        <div className='w-7 h-7 rounded-full bg-green-500'>

                        </div>
                        <div>
                            <p className='text-[13px]'>Emmma Rodriguez</p>
                            <p className='text-[12px]'>Barcelona Spain</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex pb-3'>
                            {
                                [...new Array(5)].map((item) => (
                                    <img src={assets.starIconFilled} className='w-2' />
                                ))
                            }
                        </div>
                        <p className='max-w-[250px] text-[13px]  '>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, cum! Corrupti ratione, rerum recusandae vero molestias inventore. Corrupti alias quia provident
                        </p>
                    </div>

                </div>   <div className='border border-gray-200 shadow-sm rounded-lg p-2 max-w-[300px]  bg-white '>
                    <div className='flex items-center gap-2'>
                        <div className='w-7 h-7 rounded-full bg-blue-500'>

                        </div>
                        <div>
                            <p className='text-[13px]'>Emmma Rodriguez</p>
                            <p className='text-[12px]'>Barcelona Spain</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex pb-3'>
                            {
                                [...new Array(5)].map((item) => (
                                    <img src={assets.starIconFilled} className='w-2' />
                                ))
                            }
                        </div>
                        <p className='max-w-[250px] text-[13px]  '>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, cum! Corrupti ratione, rerum recusandae vero molestias inventore. Corrupti alias quia provident
                        </p>
                    </div>

                </div>
            </div>


        </div>

    )
}

export default Testimonial