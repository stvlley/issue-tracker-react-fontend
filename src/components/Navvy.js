import React from 'react'

export default function Navvy() {
  return (
    <nav className=''>
         <div className="bg-gray-800 text-white flex justify-between items-center w-full">
             <h1 className="mx-6 p-2 h-14 text-2xl font-bold flex items-center">itPR0</h1>
             <div className='grow'></div>
             <div className='p-2 hover:text-black hover:bg-gray-100 mx-1 rounded'>Home</div>
         </div>
    </nav>
  )
}
