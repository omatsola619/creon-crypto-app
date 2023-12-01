import React from 'react'
import creonImg from '@/assets/image/creon.png'
import Image from 'next/image'
import Accordion from '../Accordion';
import { AccordionData } from '@/data';

function Section4() {
    return (
        <div className='h-full lg:h-[700px] mt-[150px] pb-14 lg:pl-[80px] mx-4 sm:mx-10 lg:mx-[60px]'>
            <div className='flex flex-col lg:flex-row flex-start justify-between gap-16'>
                {/* left section  */}
                <div>
                    <div className='font-monument text-lg pb-4 lg:text-[25px] font-normal text-white'>
                        OUR VISION IS TO SUPPORT THE INNOVATION OF AI BLOCKCHAIN PROJECTS
                        <span className='text-transparent font-monument text-lg lg:text-[25px] bg-clip-text bg-gradient-to-r from-[#3D8BFF] from-0% to-[#AB23FF] to-100%'> WHILE PRIORITIZING COMMUNITIES AND DEMOCRATIZING PROFITS</span>
                    </div>

                    <Image src={creonImg} alt='creon img' />
                </div>

                {/* right section  */}
                <div className=''>
                    <div className=''>
                        {
                            AccordionData.map(item => (
                                <div className='border-b-[1px] border-[#13171D] last:border-none w-full lg:w-[430px]' key={item.title}>
                                    <Accordion image={item.image} title={item.title} content={item.info} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4