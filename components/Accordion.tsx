"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { BsChevronDown } from "react-icons/bs";

const Accordion = ({ title, content, image }: { title: string, content: string, image: string }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleAccordion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='w-full lg:w-[430px]'>
            <div className='py-5 px-3'>
                <div className='flex flex-row justify-between items-center cursor-pointer' onClick={toggleAccordion}>
                    <div className='flex flex-row gap-3 items-center'>
                        <Image src={image} alt='icon' width={70} height={70} />
                        <h3 className='text-white font-satoshi text-base font-bold'>{title}</h3>
                    </div>


                    {/*TODO: set transition for this transform 0.2s and styles.rotate is transition: rotate(180deg) */}
                    <span className={`font-[15px] text-white ${isExpanded ? 'transform rotate-[180]' : ''}`}><BsChevronDown /></span>
                </div>
                {isExpanded && (
                    <div className='p-2'>
                        <p className='text-white ml-[75px] text-sm font-satoshi'>{content}</p>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Accordion;
