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
      <div className='w-full max-w-md p-8'>
      <div>
        <h1 className='font-semibold text-[35px] -mt-[8rem] -ml-[10rem] mb-[1rem]'>Contact Us</h1>

        <p className='w-[80vw] -ml-[10rem] font-semibold mb-[5rem]'> We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to drop us a message using the form below. Our team will get back to you as soon as possible.</p>

        </div>
        <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center mt-[10px]'>Register</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <fieldset className='space-y-6'>

            <div>
              <label className='block text-sm font-medium text-gray-700'>Name:</label>
              <input
                {...register("name", { required: { value: true, message: "Name is required" } })}
                className='w-full border-b-2 border-gray-400 py-2 focus:outline-none focus:border-black'
                placeholder='Enter your name'
              />
              {errors.name && <p className='text-red-500 text-xs mt-1'>{errors.name.message}</p>}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>E-Mail:</label>
              <input
                {...register("email", { required: { value: true, message: "Email is required" } })}
                className='w-full border-b-2 border-gray-400 py-2 focus:outline-none focus:border-black'
                placeholder='Enter your email'
              />
              {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>Text:</label>
              <textarea
                {...register("text", { required: { value: true, message: "Text is required" } })}
                className='w-full border-b-2 border-gray-400 py-2 focus:outline-none focus:border-black'
                rows='4'
                placeholder='Enter your message'
              />
              {errors.text && <p className='text-red-500 text-xs mt-1'>{errors.text.message}</p>}
            </div>

          </fieldset>

          <button
            type="submit"
            className='w-full py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300'>
            SUBMIT
          </button>
        </form>
      </div>

      <div className='ml-[10rem]'>
      <img src='/images/help.png' />
      </div>
      
    </div>
  )
}

export default Home
