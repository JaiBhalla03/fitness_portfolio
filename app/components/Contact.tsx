import React from 'react'

export default function Contact() {
    return (
      <div className=''>
          {/* Contact Box */}
          <div className='mt-2 md:mt-0 md:translate-y-20 mx-2 md:mx-12 rounded-3xl flex flex-col gap-6 items-center py-24 relative bg-[#80D20E] 
              bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[20px_20px]'>
              
              <div className='font-notable text-center text-[2rem] md:text-[3.5rem]'>Let's Join Community</div>
              <div className='text-blue-950'>You are not alone, many have joined</div>
              
              <form className='rounded-lg bg-white p-1 md:p-2 flex items-center w-[90%] md:w-auto'>
                  <input placeholder='Your Email' className='h-full px-4 py-2 border-none outline-none w-2/3 md:w-auto'/>
                  <button className='p-2 h-full text-xs md:text-lg text-white font-notable rounded-lg bg-gray-800'>Join Now</button>
              </form>
          </div>
  
          {/* Footer */}
          <div className='bg-[#181920] flex flex-col md:flex-row w-full justify-between px-2 md:px-12 gap-4 md:gap-0 h-auto md:h-48 pt-4 md:pt-4 pb-4 md:pb-10 text-white items-center md:items-end rounded-t-[6rem]'>
              <div className='font-bold text-xl'>CORE-FIT</div>
              <div className='text-sm md:text-lg'>Copyright © 2024 CORE-FIT. All Rights Reserved</div>
              <div className='font-notable text-md'>Privacy Policy</div>
          </div>
      </div>
    )
  }
  