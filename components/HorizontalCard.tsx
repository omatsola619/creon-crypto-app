import React from 'react';
import img1 from '@/assets/image/horiz1.png'
import Image from 'next/image';

function HorizontalCard() {
    return (
        <div className='flex flex-row items-center justify-between bg-[#0c0f11] bg-opacity-50'>
            {/* left side */}
            <div className='flex-[0.7] p-4'>
                <div className='text-white font-[28px] font-monument mb-2'>
                    AI Prospects, Market Size, and Development Pace
                </div>
                <div className='text-[10px] text-white font-satoshi'>
                    The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.
                </div>
            </div>

            {/* right side  */}
            <div className='flex-[0.3]'>
                <Image src={img1} alt='image' height={250} width={500} />
            </div>
        </div>
    )
}

export default HorizontalCard