import React, { useState } from 'react'


export default function Navbar() {

    const [show, setShow] = useState(false);
    const handleonClick = () => {
        setShow(!show);
    }

    
  return (
    <div className='text-4xl md:mx-24 mx-6 my-5 bg-clip-text text-transparent bg-gradient-to-l from-blue-500 to-pink-500 font-bold'>
      <div className='flex justify-between items-center'>
        <div>
            <label>Port<span className='bg-clip-text text-transparent bg-gradient-to-br from-pink-500 to-yellow-500'>Folio</span>.</label>
        </div>
        <div>
            <ul className='md:flex hidden text-[20px]'>
                <li><a className='m-5 px-2 py-1 rounded-xl hover:border-b-2 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-500' href='#'>Home</a></li>
                <li><a className='m-5 px-2 py-1 rounded-xl hover:border-b-2 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-500' href='#'>About</a></li>
                <li><a className='m-5 px-2 py-1 rounded-xl hover:border-b-2 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-500' href='#'>Project</a></li>
                <li><a className='m-5 px-2 py-1 rounded-xl hover:border-b-2 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-500' href='#'>Contact</a></li>
            </ul>
        </div>
        <div className='md:hidden block text-blue-500'>
            <button onClick={handleonClick}><ion-icon name="grid-outline"></ion-icon>
            {show && (
                <ul className='md:flex hidden text-[20px]'>
                <li><a className='m-5 px-2 py-1 rounded-xl hover:border-b-2 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-500' href='#'>Home</a></li>
                <li><a className='m-5 px-2 py-1 rounded-xl hover:border-b-2 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-500' href='#'>About</a></li>
                <li><a className='m-5 px-2 py-1 rounded-xl hover:border-b-2 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-500' href='#'>Project</a></li>
                <li><a className='m-5 px-2 py-1 rounded-xl hover:border-b-2 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-500' href='#'>Contact</a></li>
            </ul>
            )}
            </button>

        </div>
      </div>
    </div>
  )
}
