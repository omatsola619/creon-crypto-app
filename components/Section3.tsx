import React from 'react'
import world from '../assets/image/world.png'
import Image from 'next/image'

function Section3() {
    return (
        <div className='pt-[103px] lg:pl-[80px] mx-4 sm:mx-10 lg:mx-[60px]'>
            <div className='text-white font-monument text-[25px] sm:text-[40px] lg:text-[58px] font-normal'>PROFITING THROUGH</div>
            <div className='flex flex-row justify-end mb-8'>
                <div className='text-transparent font-monument text-[16px] bg-clip-text bg-gradient-to-r from-[#3D8BFF] from-0% to-[#AB23FF] to-100% sm:text-[20px] lg:text-[28px] font-normal'>AI INNOBATION & DECENTRALIZATION</div>
            </div>

            <div className='pt-[103px] lg:pl-[80px] mx-4 sm:mx-10 lg:mx-[60px] lg:gap-10 flex flex-col lg:flex-row flex-wrap items-center justify-center lg:justify-between relative'>
                <div className="">
                    <Image src={world} alt='' />
                </div>

                <div className='bg-red-200'>
                    <div className='text-white font-satoshi font-bold text-base'>The dynamic community driven business model of the future.</div>
                    <div className='text-white font-satoshi text-xs mt-3'>
                        At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3