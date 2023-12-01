import React, { FunctionComponent } from 'react';
import img1 from '@/assets/image/horiz1.png'
import Image from 'next/image';
import { Feature2Type } from '@/data';

const HorizontalCard: FunctionComponent<Feature2Type> = ({ title, description, image }) => {
    return (
        <div className='flex flex-col mb-8 sm:mb-3 sm:flex-row items-center justify-between bg-[#0c0f11] bg-opacity-50'>
            {/* left side */}
            <div className='flex-[0.7] p-4'>
                <div className='text-white font-[18px] md:font-[28px] font-monument mb-2'>
                    {title}
                </div>
                <div className='text-[10px] text-white font-satoshi'>
                    {description}
                </div>
            </div>

            {/* right side  */}
            <div className='flex-[0.3]'>
                <Image src={image} alt='image' className='cover w-screen md:w-[500] h-[250]' />
            </div>
        </div>
    )
}

export default HorizontalCard