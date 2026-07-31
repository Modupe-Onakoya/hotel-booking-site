
import React from 'react'

const Title = ({ title, subtitle }) => {
    return (
        <div className={`flex flex-col`}>
            <h1 className='font-bold text-2xl'>
                {title}
            </h1>
            <p className='max-w-md pt-2 pb-8 text-[13px]'>
                {subtitle}
            </p>
        </div>
    )
}

export default Title