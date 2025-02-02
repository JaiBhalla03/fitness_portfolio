import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface ServiceCardProps {
    img: StaticImageData;
    heading: string;
    timing: string;
    flag: boolean;
}

export default function ServiceCard({img, heading, timing, flag}: ServiceCardProps) {
  return (
    <div className={`w-[23%] text-white flex flex-col gap-2 ${flag ? 'mt-20' : 'mt-0'}`}>
        <Image src={img} alt='' className='rounded-2xl h-96 w-full object-cover shadow-sm shadow-white'/>
        <div className='font-notable text-xl'>{heading}</div>
        <div className='text-sm'>{timing}</div>
    </div>
  )
}
