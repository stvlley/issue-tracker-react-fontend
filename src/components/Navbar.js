import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className=''>
         <div className="bg-gray-800 p-2   text-white flex justify-items-end space-x-3 items-center w-full">
             <Link to='/' className="mx-6 p-2 hover:text-black hover:bg-gray-100 h-14 text-2xl font-bold flex items-center">itPR0</Link>
             <div className='grow'></div>
             <Link to='/' className='p-2 hover:text-black hover:bg-gray-100 mx-1 '>Home</Link>
             <Link to='/' className='p-2 hover:text-black hover:bg-gray-100 mx-1 '>Home</Link>
             <Link to='/' className='p-2 hover:text-black hover:bg-gray-100 mx-1 '>Home</Link>
       

         </div>
    </nav>
  )
}
