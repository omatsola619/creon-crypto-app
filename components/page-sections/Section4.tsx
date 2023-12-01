import React from 'react'
import creonImg from '@/assets/image/creon.png'
import Image from 'next/image'
import Accordion from '../Accordion';
import icon from '@/assets/image/acc1.svg'
import { AccordionData } from '@/data';

function Section4() {
    return (
        <div className='pt-[103px] pb-10 lg:pl-[80px] mx-4 sm:mx-10 lg:mx-[60px]'>
            <div>
                {/* left section  */}
                <div>
                    <div className='font-monument text-[25px] font-normal text-white'>
                        OUR VISION IS TO SUPPORT THE INNOVATION OF AI BLOCKCHAIN PROJECTS
                        <span className='text-transparent font-monument text-[25px] bg-clip-text bg-gradient-to-r from-[#3D8BFF] from-0% to-[#AB23FF] to-100%'> WHILE PRIORITIZING COMMUNITIES AND DEMOCRATIZING PROFITS</span>
                    </div>

                    <Image src={creonImg} alt='creon img' />
                </div>

                {/* right section  */}
                <div className='my-10'>
                    <div className=''>
                        {
                            AccordionData.map(item => (
                                <div className='border-b-[1px] border-[#13171D] last:border-none w-[430px]' key={item.title}>
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