'use client';
import React, { useRef } from 'react'
import GoalCard from './utils/GoalCard'
import Image from 'next/image';
import { motion, useInView } from 'framer-motion'
import goalImage from '../../public/images/goal-image.png';
import { FaStar } from 'react-icons/fa';

export default function Goal() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const isLeftInView = useInView(leftRef, { once: true, amount: 0.3 });
  const isRightInView = useInView(rightRef, { once: true, amount: 0.3 });

  return (
    <div className='text-white flex flex-col md:flex-row w-full p-2 md:p-12'>
        {/* Left Section - Success Stories */}
        <motion.div 
          ref={leftRef}
          className='relative bg-[#181920] rounded-3xl p-8 w-full md:w-1/2'
          initial={{ x: -50, opacity: 0 }}
          animate={isLeftInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
            <Image 
              src={goalImage} 
              alt='' 
              className='hidden sm:flex filter saturate-50 absolute top-0 right-0 h-full object-cover'
            />
            <motion.div 
              className='bg-[#80D20E] rounded-full p-4 text-black w-min'
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
                <FaStar size={30}/>
            </motion.div>
            <div className='font-notable text-xl mt-8'>Success Stories</div>
            <motion.div 
              className='w-full sm:w-1/2 my-10 md:my-20'
              initial={{ opacity: 0, y: 20 }}
              animate={isLeftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
                I reached my fitness goals faster than ever with tailored workouts. Wrist notifications keep me on track, even during sessions. Absolutely love this feature and how it enhances my experience.
            </motion.div>
            <div className='font-notable text-xl mt-8'>
                Kende Attila
            </div>
            <div>CEO of Starbucks</div>

            {/* Animated Stars */}
            <motion.div 
              className='flex items-center text-[#80D20E] mt-10'
              initial={{ scale: 0.8 }}
              animate={isLeftInView ? { scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 150, damping: 10, delay: 0.5 }}
            >
                {[...Array(4)].map((_, i) => (
                    <FaStar key={i} size={20} />
                ))}
                <FaStar size={20} className='text-white'/>
            </motion.div>
        </motion.div>

        {/* Right Section - Training Plans */}
        <motion.div 
          ref={rightRef}
          className='w-full md:w-1/2 md:pl-4'
          initial={{ x: 50, opacity: 0 }}
          animate={isRightInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
            <div className='font-notable text-[2rem] md:text-[3.5rem] leading-[3.5rem]'>Best Training Plan For You</div>
            <motion.div 
              className='flex flex-col gap-8 mt-8'
              initial="hidden"
              animate={isRightInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
            >
                {[
                  { price: "$19.99/Month", heading: "Premium Plan", paragraph: "The premium package designed for dedicated fitness enthusiasts who seek the highest level of training" },
                  { price: "$11.99/Month", heading: "Elite Plan", paragraph: "The Elite Plan for passionate fitness lovers, offering top-tier resources and exclusive benefits" },
                  { price: "Free", heading: "Basic Plan", paragraph: "Our Basic Plan offers essential gym access, perfect for beginners or those with a simple workout routine" }
                ].map((plan, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                        <GoalCard {...plan} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    </div>
  )
}
