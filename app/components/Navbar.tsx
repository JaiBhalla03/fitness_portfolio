import React from 'react'

export default function Navbar() {
  return (
    <nav className='fixed w-full pt-4 z-30'>
        <div className='w-[95%] bg-gray-700 bg-opacity-50 px-6 py-4 mx-auto flex justify-between rounded-full text-white shadow-inner shadow-gray-300/10'>
            <div className='font-bold text-xl'>CORE-FIT</div>
            <ul className='flex items-center gap-4 text-sm'>
                <li>Home</li>
                <li>Service</li>
                <li>Goals</li>
                <li>Class Schedules</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
  )
}
