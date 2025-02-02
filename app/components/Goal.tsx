import React from 'react'
import GoalCard from './utils/GoalCard'
import Image from 'next/image';
import goalImage from '../../public/images/goal-image.png';
import { FaStar } from 'react-icons/fa';

export default function Goal() {
  return (
    <div className='text-white flex flex-col md:flex-row w-full p-2 md:p-12'>
        <div className='relative bg-[#181920] rounded-3xl p-8 w-full md:w-1/2'>
            <Image src={goalImage} alt='' className='hidden sm:flex filter saturate-50 absolute top-0 right-0 h-full object-cover'/>
            <div className='bg-[#80D20E] rounded-full p-4 text-black w-min'>
                <FaStar size={30}/>
            </div>
            <div className='font-notable text-xl mt-8'>Success Stories</div>
            <div className='w-full sm:w-1/2 my-10 md:my-20'>
                I reached my fitness goals faster than ever with tailored workouts. Wrist notification keep me on track, even during session. Absolutely love this feature and how it enhances my experience
            </div>
            <div className='font-notable text-xl mt-8'>
                Kende Attila
            </div>
            <div>CEO of Starbucks</div>
            <div className='flex items-center text-[#80D20E] mt-10'>
            <FaStar size={20}/>
            <FaStar size={20}/>
            <FaStar size={20}/>
            <FaStar size={20}/>
            <FaStar size={20} className='text-white'/>
            </div>
        </div>
        <div className='w-full md:w-1/2 md:pl-4'>
            <div className='font-notable text-[2rem] md:text-[3.5rem] leading-[3.5rem]'>Best Training Plan For You</div>
            <div className='flex flex-col gap-8 mt-8'>
                <GoalCard
                    price='$19.99/Month'
                    heading='Premium Plan'
                    paragraph='The premium package desgined for dedicated fitness enthusiasts who seek the highest level of training'
                />
                <GoalCard
                    price='$11.99/Month'
                    heading='Elite Plan'
                    paragraph='The Elite Plan for passionate fitness lovers, offering top-tier resources and exclusive benefits'
                />
                <GoalCard
                    price='Free'
                    heading='Basic Plan'
                    paragraph='Our Basic Plan offers essential gym access, perfect for beginners or those with a simple workout routine'
                />
            </div>
        </div>
    </div>
  )
}
