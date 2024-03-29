import React from 'react'

export default function Contact() {

  return (
    <div>
      <div className='text-center bg-gradient-to-b from-sky-300 to-blue-900 mx-5 my-5 rounded-2xl'>
        <div className='grid place-items-center h-[400px]'>
            <div className='backdrop-blur-sm bg-white/20 rounded-2xl px-4 py-4 shadow-xl shadow-black'>
                <form>
                <h4 className='font-bold animate-pulse text-red-500  duration-50'>Just Hire Me</h4>
                <p className=' animate-pluse '>Contact us</p>
                    <div className='text-white'>
                        <h3 className='font-bold text-black my-2'>Infromation Details</h3>
                        <hr className='border-[1px] border-gray-500'/>
                        <label><input type='text' placeholder='Enter Your Name...' className='hover:shadow-xl hover:shadow-black transition ease-in-out delay-150 duration-150 hover:scale-110 rounded-md my-2 text-black text-center font-bold backdrop-blur-sm bg-white/30' /></label><br/>
                        <label><input type='email' placeholder='Enter Your Email...' className='hover:shadow-xl hover:shadow-black transition ease-in-out delay-150 duration-150 hover:scale-110 rounded-md my-2 text-black text-center font-bold backdrop-blur-sm bg-white/30' /></label><br/>
                        <label><input type='number' placeholder='Enter Your Phone no...' className='hover:shadow-xl hover:shadow-black transition ease-in-out delay-150 duration-150 hover:scale-110 rounded-md my-2 text-black text-center font-bold backdrop-blur-sm bg-white/30' /></label><br/>
                        <label><input type='text' placeholder='Enter Your Message...' className='hover:shadow-xl hover:shadow-black transition ease-in-out delay-150 duration-150 hover:scale-110 rounded-md my-2 text-black text-center font-bold backdrop-blur-sm bg-white/30' /></label><br/>
                        <button type='Submit' className='hover:shadow-xl hover:shadow-black transition ease-in-out delay-150 duration-150 hover:scale-110 bg-gradient-to-br from-blue-500 to-indigo-300 hover:bg-gradient-to-tl from-indigo-300 to-blue-500 px-2 py-1 mt-1 rounded-md active:bg-green-500 active:shadow-green-500'>Submit</button>
                    </div>                
                </form>
            </div>
        </div>

      </div>
    </div>
  )
}
