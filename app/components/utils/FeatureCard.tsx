'use client';
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';


interface FeatureCardProps {
    icon: React.ReactNode;
    heading: string;
    paragraph: string;
    ind: number
}

export default function FeatureCard({icon, heading, paragraph, ind}: FeatureCardProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5*ind }}
        ref={ref}
        className='relative group hover:-translate-y-4 transition-all duration-300 mt-6 md:mt-20 bg-[#181920] rounded-2xl p-8 w-full md:w-[32%] text-white flex flex-col gap-4 cursor-pointer'>
        <div className='group-hover:border-[#80D20E] group-hover:text-[#80D20E] border border-white p-4 rounded-full w-min transition-all duration-300'>
            {icon}
        </div>
        <div className='font-notable font-bold text-2xl mt-10'>{heading}</div>
        <div className='text-sm'>
            {paragraph}
        </div>
        <div className='flex justify-end mt-10'>
            <div className='group-hover:border-[#80D20E] group-hover:text-[#80D20E] border border-white p-4 rounded-full w-min transition-all duration-300'>
                <IoIosArrowRoundForward size={40}/>
            </div>
        </div>
        <div className='absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 text-blue-950 bg-[#80D20E] p-4 rounded-full text-sm scale-0 group-hover:scale-100 transition-all duration-300'>
            Find out more
        </div>
    </motion.div>
  )
}
