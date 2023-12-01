import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import { FeatureCardsType } from '@/data';

const FeatureCard: FunctionComponent<FeatureCardsType> = ({ title, sub, description, image }) => {
    return (
        <div className='bg-[#0c0f11] py-7 w-full h-full md:h-[450px] md:block relative rounded-md'>
            <div className='bg-white font-bold text-black text-[10px] font-satoshi absolute top-[-2%] right-4 py-[1px] px-[5px] rounded-lg'>
                COMING SOON
            </div>
            <div className='pl-4 w-[95%] mb-5 h-[70px]'>
                <div className='font-monument text-[15px] md:text-[20px] text-white'>{title}</div>
                <span className='text-transparent font-satoshi text-[13px] md:text-lg lg:text-[16px] bg-clip-text bg-gradient-to-r from-[#3D8BFF] from-0% to-[#AB23FF] to-100%'>{sub}</span>
            </div>

            <div className='w-full md:w-[95%] mb-5'>
                <Image src={image} alt='card image' />
            </div>

            <div className='text-[10px] md:text-xs font-satoshi text-white pl-4 w-[95%]'>
                {description}
            </div>
        </div>
    )
}

export default FeatureCard