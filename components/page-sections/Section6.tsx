import { feature2Data } from '@/data'
import React from 'react'
import HorizontalCard from '../HorizontalCard'

const Section6 = () => {
    return (
        <div className='mt-[150px] pb-10 lg:px-[80px] mx-4 sm:mx-10 lg:mx-[60px]'>
            <div>
                {
                    feature2Data.map(item => (
                        <HorizontalCard key={item.title} title={item.title} description={item.description} image={item.image} />
                    ))
                }
            </div>
        </div>
    )
}

export default Section6