import React from 'react'

export default function Contact() {
    return (
      <div className=''>
          {/* Contact Box */}
          <div className='translate-y-20 mx-12 rounded-3xl flex flex-col gap-6 items-center py-24 relative bg-[#80D20E] 
              bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[20px_20px]'>
              
              <div className='font-notable text-[3.5rem]'>Let's Join Community</div>
              <div className='text-blue-950'>You are not alone, many have joined</div>
              
              <form className='rounded-lg bg-white p-2 flex'>
                  <input placeholder='Your Email' className='h-full px-4 py-2 border-none outline-none'/>
                  <button className='p-2 text-white font-notable rounded-lg bg-gray-800'>Join Now</button>
              </form>
          </div>
  
          {/* Footer */}
          <div className='bg-[#181920] flex w-full justify-between px-12 h-48 pb-10 text-white items-end rounded-t-[6rem]'>
              <div className='font-bold text-xl'>CORE-FIT</div>
              <div>Copyright © 2024 CORE-FIT. All Rights Reserved</div>
              <div className='font-notable text-md'>Privacy Policy</div>
          </div>
      </div>
    )
  }
  