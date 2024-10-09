import React from 'react'
import { useForm } from "react-hook-form"

function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md p-8 bg-white shadow-lg rounded-lg'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center'>Register</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>

          <div>
            <label className='block text-sm font-medium text-gray-700'>First Name:</label>
            <input
              {...register("firstName", { required: { value: true, message: "First name is required" } })}
              className='w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            {errors.firstName && <p className='text-red-500 text-xs mt-1'>{errors.firstName.message}</p>}
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>Last Name:</label>
            <input
              {...register("lastName", { required: { value: true, message: "Last name is required" } })}
              className='w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            {errors.lastName && <p className='text-red-500 text-xs mt-1'>{errors.lastName.message}</p>}
          </div>

          <button
            type="submit"
            className='w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300'>
            Submit
          </button>
        </form>

        <div className='mt-6 text-center'>
          <img src="https://via.placeholder.com/150" alt="Placeholder" className='mx-auto rounded-full' />
        </div>
      </div>
    </div>
  )
}

export default Home
