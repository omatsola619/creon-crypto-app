import React from 'react'
import FeatureCard from '../FeatureCard'
import { FeatureCardsData } from '@/data'

function Section5() {
    return (
        <div className='mt-[150px] pb-10 lg:px-[80px] mx-4 sm:mx-10 lg:mx-[60px] mb-[114px]'>
            {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-10"> */}
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    FeatureCardsData.map(item => (
                        <FeatureCard key={item.title} title={item.title} description={item.description} sub={item.sub} image={item.image} />
                    ))
                }
            </div>


        </div>
    )
}

export default Section5