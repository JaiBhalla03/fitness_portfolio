'use client';
import Image from 'next/image'
import React from 'react'
import heroImage from '../../public/images/hero-image1.jpg'
import user1 from '../../public/images/user-image1.jpg'
import user2 from '../../public/images/user-image2.jpg'
import user3 from '../../public/images/user-image3.jpg'
import { motion } from "framer-motion";
import FeatureCard from './utils/FeatureCard';
import { MdFlightClass} from "react-icons/md";
import { FaCcDinersClub } from "react-icons/fa6";
import { FaTable } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';

const features = [
  "Expert Trainers",
  "Diverse Class Options",
  "Flexible Membership Plans",
  "Personalized Workout Plans",
  "State-of-the-Art Equipment",
  "Nutritional Guidance",
  "Strength & Conditioning Programs",
  "Group Fitness Sessions",
  "24/7 Gym Access",
  "Certified Coaches",
];

export default function Hero() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });
  return (
    <div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }} 
            className='relative text-white h-[110vh]'>
            <Image src={heroImage} alt='' className='w-full h-full object-cover'/>
            <motion.div 
                className='absolute bottom-0 w-full'
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 1, delay: 1}}
            >
                <div className='font-notable text-white text-[3rem] md:text-[5rem] leading-[4rem] text-center'>STAY FITT NOT STILL</div>
                <div className='font-cursive text-yellow-300 font-[100] text-2xl md:text-[2rem] text-center md:text-right pr-0 md:pr-32 pb-10 bg-gradient-to-t from-[#101213] to-[#101213]/30 p-4'>
                    Core-Fit Gym Center
                </div>
            </motion.div>
            <motion.div 
                initial={{opacity: 0, x: -200}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 1, delay: 1.5}}
                className='absolute left-2 md:left-10 top-1/4 md:top-1/3 flex flex-col items-center gap-2'
            >
                 <div className="flex">
                    <Image src={user1} alt="" className="h-12 w-12 rounded-full object-cover border border-blue-950 -ml-4 first:ml-0" />
                    <Image src={user3} alt="" className="h-12 w-12 rounded-full object-cover border border-blue-950 -ml-4" />
                    <Image src={user2} alt="" className="h-12 w-12 rounded-full object-cover border border-blue-950 -ml-4" />
                    <Image src={user1} alt="" className="h-12 w-12 rounded-full object-cover border border-blue-950 -ml-4" />
                </div>

                <div className='font-notable font-bold text-2xl'>220K+</div>
                <div className='text-sm'>Happy Customer</div>
            </motion.div>
            <motion.div 
                className='absolute right-2 md:right-10 top-1/2 flex flex-col items-center gap-2'
                initial={{opacity: 0, x: 200}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 1, delay: 1.5}}
            >
                <div className='font-notable font-bold text-2xl'>250+</div>
                <div className='text-sm'>Workers</div>
                <div className='text-sm bg-[#80D20E] py-4 px-8 rounded-full text-blue-950 font-semibold cursor-pointer'>Join Now</div>
            </motion.div>
        </motion.div>
        <div className="overflow-hidden bg-[#80D20E] py-4 my-4 whitespace-nowrap">
            <motion.div
                className="flex space-x-10 text-blue-950 text-2xl uppercase font-[500]"
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 10, // Adjust speed here
                }}
            >
                {[...features, ...features].map((feature, index) => (
                <span key={index} className="px-4 flex items-center gap-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.57 14.86L22 13.43L20.57 12L17 15.57L8.43 7L12 3.43L10.57 2L9.14 3.43L7.71 2L5.57 4.14L4.14 2.71L2.71 4.14L4.14 5.57L2 7.71L3.43 9.14L2 10.57L3.43 12L7 8.43L15.57 17L12 20.57L13.43 22L14.86 20.57L16.29 22L18.43 19.86L19.86 21.29L21.29 19.86L19.86 18.43L22 16.29L20.57 14.86Z" fill="#172554"/>
</svg> {feature}
                </span>
                ))}
            </motion.div>
    </div>
    {/* features  */}
    <div className='p-2 md:p-12'>
        <motion.div 
            ref={ref}
            className='text-white font-notable text-[2rem] md:text-[3.5rem]'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            Features at fitness core-fit
        </motion.div>
        <motion.div 
            className='text-sm text-white font-poppins w-full md:w-1/2'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            ref={ref}
        >Fitness Core-Fit offers top-notch amenities, cutting-edge equipment, and expert trainers to enhance your workout and achieve your goals.</motion.div>
        <div className='flex flex-col md:flex-row w-full justify-between'>
            <FeatureCard
                icon={<MdFlightClass size={40}/>}
                heading={'Class'}
                paragraph='Our amenities ensure you get the most out of your workouts and enjoy a superior gym experience.'
                ind={1}
            />
            <FeatureCard
                icon={<FaCcDinersClub size={40}/>}
                heading={'Club'}
                paragraph='Our gym features cutting-edge fitness equipment designed to elevate your workouts to the next level.'
                ind={2}
            />
            <FeatureCard
                icon={<FaTable size={40}/>}
                heading={'Timetable'}
                paragraph='Search for the class that suits your schedule? We offer a variety of time options to fit your needs.'
                ind={3}
            />
        </div>
    </div>
    </div>
  )
}
