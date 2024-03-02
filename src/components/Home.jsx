import React from 'react'
import profile from './profile.jpg';
import QRCode from 'react-qr-code';

export default function Home() {

   const value = 'https://drive.google.com/drive/folders/1uERsgNrqxdp9_N1O5I-kYyidIC8xrBz6';

  return (
    <div>
      <div className='grid place-items-center h-screen bg-gradient-to-br from-[#B0E0E6] to-[#ADDFFF] mx-4 rounded-xl'>
            <div className=' mx-3 border-2 border-gray-500 backdrop-blur-sm bg-white/50 rounded-xl p-8 items-center justify-between md:flex space-x-14 shadow-xl shadow-gray-500'>
                <div>
                <p className='text-gray-600 text-xl '>Hello,</p>
                <h3 className='mt-5 text-5xl font-bold text-gray-500'>I` m Jeet Atulbhai Mistry</h3>
                <marquee direction="right"><h6 className='text-[#000080] text-right text-4xl italic font-bold'>Full Stack Developer</h6></marquee>
                <div className='bg-white flex-grow inline-flex justify-between items-center shadow-xl shadow-gray-400 hover:shadow-black my-2 px-2 py-2 border-2 border-gray-500 rounded-xl'>
                <QRCode value={value} size={100} />
                </div>
                </div>
            <div>
                <img className='w-54 h-64 rounded-xl shadow-xl border-b-2 border-gray-500 shadow-gray-500' src={profile} />
            </div>
            </div>
            </div>
            </div>
  )
}
