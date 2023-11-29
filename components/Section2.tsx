import Image from 'next/image'
import React from 'react'
import staff from '../assets/image/staff.png'

const data = [
    'Pre-launch investment opportunities for upcoming AI projects',
    'Free and early access to Creon built AI projects',
    'Higher allocation limits on the Creon AI Launchpad',
    'Revenue share distribution from Creon built AI projects'
]

function Section2() {
    return (
        <div className='mb-[120px]'>
            <div className='pt-[103px] lg:pl-[80px] mx-4 sm:mx-10 lg:mx-[60px] lg:gap-10 flex flex-col lg:flex-row flex-wrap items-center justify-center lg:justify-between relative'>
                <div className='flex-1 pb-6 lg:pb-0'>
                    <div className='text-white text-2xl text-[40px] lg:text-[55px] text-left leading-[70px] lg:text-left font-monument font-normal mb-[50px]'>CREON PASS NFT</div>

                    <div className='text-transparent mb-10 text-satoshi text-lg bg-clip-text bg-gradient-to-r from-[#3D8BFF] from-0% to-[#AB23FF] to-100%'>
                        The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools
                    </div>

                    <div className='mb-[50px]'>
                        {
                            data.map(item => (
                                <div key={item} className='text-white rounded text-sm font-satoshi border-[#13171D] border-[1px] p-2 mb-1'>{item}</div>
                            ))
                        }
                    </div>

                    <div>
                        <div className='w-[300px] h-[40px] rounded bg-gradient-to-r from-[#3D8BFF] from-0% to-[#AB23FF] to-100% text-white flex items-center justify-center text-sm font-satoshi'>Buy Creon Pass</div>
                    </div>
                </div>
                <div className='mt-5 flex-1 lg:mt-0'>
                    <Image src={staff} width={500} height={600} alt='new release' />
                </div>

            </div>
        </div>
    )
}

export default Section2