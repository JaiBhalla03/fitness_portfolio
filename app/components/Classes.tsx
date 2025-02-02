'use client';
import Image from 'next/image'
import React, { useRef } from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { motion, useInView } from 'framer-motion';

import classImage1 from '../../public/images/classes-image1.jpg';
import classImage2 from '../../public/images/service-image1.jpg';
import classImage3 from '../../public/images/classes-image3.jpg';
import userImage from '../../public/images/user-image1.jpg';

export default function Classes() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.div 
            ref={ref} 
            className='p-2 md:p-12 text-white'
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Header Section */}
            <div className='flex flex-col md:flex-row w-full justify-between'>
                <motion.div 
                    className='w-full md:w-[40%]'
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <div className='text-[2rem] md:text-[3.5rem] font-notable'>Our Classes</div>
                    <div className='text-sm'>"Our classes cater to all ages and preferences. You and your child can safely enjoy the facilities together. Whether young or old, our programs welcome everyone, making fitness a family affair."</div>
                </motion.div>

                {/* List Section */}
                <motion.ul 
                    className='w-full md:w-1/2 flex flex-col gap-2'
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    {["Men", "Women", "Kids"].map((item, index) => (
                        <motion.li 
                            key={index}
                            className='text-xl flex w-full justify-between items-center border-b p-2 font-notable border-white'
                            whileHover={{ scale: 1.05 }}
                        >
                            {item} <IoIosArrowRoundForward size={40} className='-rotate-45'/>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>

            {/* Image & Content Section */}
            <div className='flex flex-col gap-2 md:gap-0 md:flex-row justify-between mt-10'>
                <motion.div 
                    className='w-full md:w-[32%] h-88 rounded-3xl'
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                >
                    <Image src={classImage1} alt='' className='rounded-3xl h-full w-full object-cover filter grayscale'/>
                </motion.div>

                <motion.div 
                    className='flex flex-col gap-4 md:gap-0 justify-between p-8 bg-[#181920] w-full md:w-[66%] rounded-3xl'
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between'>
                        <div className='flex items-center gap-4'>
                            <Image src={userImage} alt='' className='h-12 w-12 rounded-full'/>
                            <div className='font-notable text-md'>Leslie Alexander</div>
                        </div>
                        <motion.div 
                            className='bg-[#80D20E] text-center rounded-full py-4 px-8 cursor-pointer font-semibold text-blue-950'
                            whileHover={{ scale: 1.1 }}
                        >
                            See All
                        </motion.div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='font-notable text-lg md:text-2xl'>Training Experience</div>
                        <IoIosArrowRoundForward size={40} className='-rotate-45'/>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Section */}
            <div className='flex flex-col gap-2 md:gap-0 md:flex-row justify-between mt-2 md:mt-8'>
                <motion.div 
                    className='bg-[#181920] w-full md:w-[32%] rounded-3xl text-2xl font-notable p-16 leading-10'
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    Credit and personalize your <i className='not-italic text-[#80D20E]'>workout</i>
                </motion.div>

                {[classImage2, classImage3].map((img, index) => (
                    <motion.div 
                        key={index} 
                        className='w-full md:w-[32%] h-88 rounded-3xl'
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <Image src={img} alt='' className='rounded-3xl w-full h-full object-cover filter grayscale'/>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}
