import React from 'react'
import Navbar from 'react' ./components/Home
const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between items-center p-4 bg-gray-100'>
        <div>
          <h1 className='text-blue-600 text-2xl font-bold'>Logo</h1>
        </div>
        <ul className='flex space-x-8'>
          <li><a href="#" className='text-gray-700 hover:text-blue-600'>Home</a></li>
          <li><a href="#" className='text-gray-700 hover:text-blue-600'>About</a></li>
          <li><a href="#" className='text-gray-700 hover:text-blue-600'>Contact</a></li>
        </ul>
      </nav> 
    </div>
  )
}

export default Navbar
