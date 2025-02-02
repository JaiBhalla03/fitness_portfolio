import Image from 'next/image'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import classImage1 from '../../public/images/classes-image1.jpg';
import classImage2 from '../../public/images/service-image1.jpg';
import classImage3 from '../../public/images/classes-image3.jpg';
import userImage from '../../public/images/user-image1.jpg';

export default function Classes() {
  return (
    <div className='p-2 md:p-12 text-white'>
        <div className='flex flex-col md:flex-row w-full justify-between'>
            <div className='w-full md:w-[40%]'>
                <div className='text-[3.5rem] font-notable'>Our Classes</div>
                <div className='text-sm'>"Our classes cater to all ages and preferences. You and your child can safety enjoy the facilities together. Whether young or old, our programs welcome everyone, making fitness a family affair."</div>
            </div>
            <ul className='w-full md:w-1/2 flex flex-col gap-2'>
                <li className='text-xl flex w-full justify-between items-center border-b p-2 font-notable border-white'>Men <IoIosArrowRoundForward size={40} className='-rotate-45'/></li>
                <li className='text-xl flex w-full justify-between items-center border-b p-2 font-notable border-white'>Women <IoIosArrowRoundForward size={40} className='-rotate-45'/></li>
                <li className='text-xl flex w-full justify-between items-center border-b p-2 font-notable border-white'>Kids <IoIosArrowRoundForward size={40} className='-rotate-45'/></li>
            </ul>
        </div>
        <div className='flex flex-col gap-2 md:gap-0 md:flex-row justify-between mt-10'>
            <div className='w-full md:w-[32%] h-88 rounded-3xl'>
                <Image src={classImage1} alt='' className='rounded-3xl h-full w-full object-cover filter grayscale'/>
            </div>
            <div className='flex flex-col justify-between p-8 bg-[#181920] w-full md:w-[66%] rounded-3xl'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Image src={userImage} alt='' className='h-12 w-12 rounded-full'/>
                        <div className='font-notable text-md'>Leslie Alexander</div>
                    </div>
                    <div className='bg-[#80D20E] rounded-full py-4 px-8 cursor-pointer font-semibold text-blue-950'>
                        See All
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='font-notable text-2xl'>Training Experience</div>
                    <IoIosArrowRoundForward size={40} className='-rotate-45'/>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-2 md:gap-0 md:flex-row justify-between mt-2 md:mt-8'>
            <div className='bg-[#181920] w-full md:w-[32%] rounded-3xl text-2xl font-notable p-16 leading-10'>
                Credit and personalize your <i className='not-italic text-[#80D20E]'>workout</i>
            </div>
            <div className='w-full md:w-[32%] h-88 rounded-3xl'>
                <Image src={classImage2} alt='' className='rounded-3xl w-full h-full object-cover filter grayscale'/>
            </div>
            <div className='w-full md:w-[32%] h-88 rounded-3xl'>
                <Image src={classImage3} alt='' className='rounded-3xl w-full h-full object-cover filter grayscale'/>
            </div>
        </div>
    </div>
  )
}
