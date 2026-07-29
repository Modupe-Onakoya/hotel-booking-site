
import React from 'react'

const Title = ({ title, subtitle }) => {
    return (
        <div className={`flex flex-col`}>
            <h1 className='font-bold'>
                {title}
            </h1>
            <p className='max-w-md py-4'>
                {subtitle}
            </p>
        </div>
    )
}

export default Title