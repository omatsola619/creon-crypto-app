import React from 'react';
import telegram from '../assets/image/telegram.svg';
import discord from '../assets/image/discord.svg';
import twitter from '../assets/image/twitter.svg';
import Image from 'next/image';

function Footer() {
    return (
        <div className='lg:px-[80px] mx-4 sm:mx-10 lg:mx-[60px] gap-4 sm:gap-0 flex flex-col sm:flex-row justify-between items-center py-10'>
            {/* left side   */}
            <div className='flex flex-row items-center gap-10'>
                <div className='text-white font-satoshi text-sm'>@ Creon 2023. All rights reserved</div>
                <div className='flex flex-row gap-5'>
                    <Image src={telegram} alt='icon' width={30} height={30} />
                    <Image src={discord} alt='icon' width={30} height={30} />
                    <Image src={twitter} alt='icon' width={30} height={30} />
                </div>
            </div>

            {/* right side */}
            <div className='text-white font-satoshi text-[10px]'>
                Powered by <span className='text-sm font-monument text-white'>NIFTABLES</span>
            </div>
        </div>
    )
}

export default Footer