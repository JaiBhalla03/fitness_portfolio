'use client';
import React from 'react'
import ServiceCard from './utils/ServiceCard'
import serviceImage1 from '../../public/images/service-image1.jpg';
import serviceImage2 from '../../public/images/service-image2.jpg';
import serviceImage3 from '../../public/images/service-image3.jpg';
import serviceImage4 from '../../public/images/service-image4.jpg';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';


export default function Service() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });
  return (
    <div className='p-2 md:p-12'>
        <div className='flex flex-col md:flex-row items-center w-full justify-between'>
            <motion.div 
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                ref={ref}
                className='text-white font-notable text-[2rem] md:text-[3.5rem] w-full md:w-2/3'
            >
                Explore Our Wide Range of Programs
            </motion.div>
            <div className='text-sm text-white font-poppins w-full md:w-1/3'>
                Explore our wide range of programs designed to cater to all fitness levels and preferences. From strength training to yoga, each program is crafted to help you meet your specific goals and enhance your overall health and well-being.
            </div>
        </div>
        <div className='mt-4 md:mt-10 flex flex-col md:flex-row w-full justify-between'>
            <ServiceCard
                img={serviceImage1}
                heading='Personal Trainer'
                timing='Monday-Wednesday'
                flag={false}
            />
            <ServiceCard
                img={serviceImage3}
                heading='Outdoor Classes'
                timing='Tuesday-Thursday'
                flag={true}
            />
            <ServiceCard
                img={serviceImage2}
                heading='Digital Coursing'
                timing='Friday-Saturday'
                flag={false}
            />
            <ServiceCard
                img={serviceImage4}
                heading='Group Training'
                timing='Sunday-Monday'
                flag={true}
            />
        </div>
    </div>
  )
}
