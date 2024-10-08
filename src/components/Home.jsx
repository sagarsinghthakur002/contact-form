import React from 'react'

function home() {
  return (
    <div className='w-full h-full'>
      <div >
        <form>

            <div>
                <label for="name">First Name:</label>
                <input type="text" id="name" name="name" required />
            
                <label>Last Name:</label>
                <input type='text' id="last" name="last" required />
                
            </div>

            <div className='border-lime-950'>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label for="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required />
            </div>

            <div>
                <label for="message">Message:</label>
                <textarea id="message" name="message" required />
            </div>

            


        </form>

        <div>
           <image src="" />

        </div>
      </div>

    </div>
  ) 
}

export default home
