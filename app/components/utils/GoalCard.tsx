import React from 'react'

interface GoalCardProps{
    price: string;
    heading: string;
    paragraph: string;
}

export default function GoalCard({price, heading, paragraph} : GoalCardProps) {
  return (
    <div className='group bg-[#181920] text-white flex flex-col md:flex-row p-8 rounded-3xl gap-4 md:gap-8 cursor-pointer'>
        <div className='group-hover:bg-[#80D20E] bg-transparent text-[#80D20E] group-hover:text-blue-950 w-72 text-md h-14 flex items-center justify-center rounded-full font-bold p-4 transition-all duration-300'>
            {price}
        </div>
        <div className='flex flex-col text-center md:text-right gap-4'>
            <div className='text-xl font-notable'>{heading}</div>
            <div className='text-sm'>{paragraph}</div>
        </div>
    </div>
  )
}
