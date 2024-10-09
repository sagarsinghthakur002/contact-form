import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between items-center p-4 bg-gray-200'>
        <div className='ml-[20px]'>
          <h1 className='text-blue-600 text-2xl font-bold'>Logo</h1>
        </div>
        <ul className='flex space-x-8 mr-2'>
          <li><a href="#" className='text-gray-700 hover:text-blue-600'>Home</a></li>
          <li><a href="#" className='text-gray-700 hover:text-blue-600'>About</a></li>
          <li><a href="#" className='text-gray-700 hover:text-blue-600'>Contact</a></li>
        </ul>
      </nav> 
    </div>
  )
}

export default Navbar
