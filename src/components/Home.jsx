import React from 'react'
import profile from './profile.jpg';
import QRCode from 'react-qr-code';

export default function Home() {

   const value = 'https://drive.google.com/file/d/18iGSPCbTVNHq8wI35bdp2OYap-7rw8KN/view';

   const resumeopen = () => {
    window.open('https://drive.google.com/file/d/18iGSPCbTVNHq8wI35bdp2OYap-7rw8KN/view','_blank');
   }

  return (
    <div>
      <div className='grid place-items-center h-screen bg-gradient-to-br from-indigo-500 to-[#ADDFFF] mx-4 rounded-xl'>
            <div className=' mx-3 border-2 border-gray-500 backdrop-blur-sm bg-white/10 rounded-xl p-8 items-center justify-between md:flex space-x-14 shadow-xl shadow-gray-500'>
                <div>
                <p className='text-gray-600 text-xl '>Hello,</p>
                <h3 className='mt-5 text-5xl font-bold text-gray-500'>I` m Jeet Atulbhai Mistry</h3>
                <h6 className='text-[#000080] text-right text-4xl italic font-bold'>Web Developer</h6>
                <button onClick={resumeopen} className='bg-transparent text-white border-[1px] px-2 py-1 rounded-xl hover:bg-npm run devviolet-500 hover:shadow-xl hover:shadow-black active:bg-green-500 active:shadow-green-500 border-transparent hover:border-gray-500'>Click to Show Resume</button> <br/>
                <div className='bg-white flex-grow inline-flex justify-between items-center shadow-xl shadow-gray-400 hover:shadow-black my-2 px-2 py-2 border-2 border-gray-500 rounded-xl'>
                <QRCode value={value} size={100} />
                </div>
                </div>
            <div>
                <img className='w-54 h-64 rounded-xl shadow-2xl border-b-2 border-black shadow-gray-500' src={profile} />
            </div>
            </div>
            </div>
            </div>
  )
}
