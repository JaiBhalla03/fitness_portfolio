import React from 'react'
import ServiceCard from './utils/ServiceCard'
import serviceImage1 from '../../public/images/service-image1.jpg';
import serviceImage2 from '../../public/images/service-image2.jpg';
import serviceImage3 from '../../public/images/service-image3.jpg';
import serviceImage4 from '../../public/images/service-image4.jpg';

export default function Service() {
  return (
    <div className='p-12'>
        <div className='flex items-center w-full justify-between'>
            <div className='text-white font-notable text-[3.5rem] w-2/3'>
                Explore Our Wide Range of Programs
            </div>
            <div className='text-sm text-white font-poppins w-1/3'>
                Explore our wide range of programs designed to cater to all fitness levels and preferences. From strength training to yoga, each program is crafted to help you meet your specific goals and enhance your overall health and well-being.
            </div>
        </div>
        <div className='mt-10 flex w-full justify-between'>
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
