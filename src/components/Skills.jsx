import React from 'react'
import html from './html.png';
import css from './social.png';
import js from './javascript.png';
import react from './atom.png';
import git from './github.png';
import boot from './bootstrap.png';
import tailwind from './tailwind.png';


export default function () {
  return (
    <div>
      <div className='bg-gradient-to-br from-green-500 to-cyan-500 py-2 h-auto mx-4 rounded-xl my-4'>
            <div className='justify-between items-center p-auto mx-4 my-4'>
            <div className='backdrop-blur-sm bg-white/10 text-center rounded-xl my-2'>
                        <div className='py-2'>
                        <h2 className='bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-red-500 text-3xl font-bold  rounded-xl'>About Me</h2>
                        <p className='font-bold text-[#000080] text-center px-5'>Highly motivated and creative Fresher Web Designer with a passion for designing user-friendly websites. Proven ability to collaborate with teams to implement responsive web design and optimize website performance, resulting in increased traffic, decreased bosuner ratus, and improved conversion rates. Stay up-to-date on emerging technologies and trends to deliver innorative design solutions that enhance user engagement and satisfaction</p>
                        </div>
                    </div>
            </div>
        <div className='grid place-items-center h-auto mx-5'>
            <h2 className='bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-pink-500 text-4xl my-2 font-bold hover:border-b-2 hover:border-violet-500 rounded-xl px-2 py-1 shadow-xl hover:shadow-violet-500'>Skills</h2>
            <div>
                <div className='flex-grow justify-center md:items-center md:mx-2'>
                    <div className='text-center inline-flex m-5 backdrop-blur-sm bg-white/10 p-6  rounded-xl shadow-xl border-b-2 border-orange-500 hover:bg-orange-300 hover:shadow-orange-500'><img className='w-10 mx-3' src={html} alt="" /></div>
                    <div className='text-center inline-flex m-5 backdrop-blur-sm bg-white/10 p-6  rounded-xl shadow-xl border-b-2 border-blue-500 hover:bg-blue-300 hover:shadow-blue-500'><img className='w-10 mx-3' src={css} alt="" /></div>
                    <div className='text-center inline-flex m-5 backdrop-blur-sm bg-white/10 p-6  rounded-xl shadow-xl border-b-2 border-yellow-500 hover:bg-yellow-200 hover:shadow-yellow-500'><img className='w-10 mx-3' src={js} alt="" /></div>
                    <div className='text-center inline-flex m-5 backdrop-blur-sm bg-white/10 p-6  rounded-xl shadow-xl border-b-2 border-sky-500 hover:bg-sky-300 hover:shadow-sky-500'><img className='w-10 mx-3' src={react} alt="" /></div>
                    <div className='text-center inline-flex m-5 backdrop-blur-sm bg-white/10 p-6  rounded-xl shadow-xl border-b-2 border-sky-500 hover:bg-sky-300 hover:shadow-sky-500'><img className='w-10 mx-3' src={tailwind} alt="" /></div>
                    <div className='text-center inline-flex m-5 backdrop-blur-sm bg-white/10 p-6  rounded-xl shadow-xl border-b-2 border-violet-500 hover:bg-violet-300 hover:shadow-violet-500'><img className='w-10 mx-3' src={boot} alt="" /></div>
                    <div className='text-center inline-flex m-5 backdrop-blur-sm bg-white/10 p-6  rounded-xl shadow-xl border-b-2 border-violet-500 hover:bg-violet-300 hover:shadow-violet-500'><img className='w-10 mx-3' src={git} alt="" /></div>
                </div>
                <div className='grid place-item-center h-auto px-2 py-1 my-2 text-center'>
                    <div className='backdrop-blur-sm bg-white/20 rounded-xl text-center my-2'>
                        <div>
                        <h2 className='bg-clip-text text-transparent bg-gradient-to-b from-orange-500 to-red-500 text-3xl font-bold rounded-xl'>Education</h2>
                        <div>
                            <h3 className='bg-clip-text cursor-pointer text-transparent bg-gradient-to-b from-orange-500 to-red-500 text-2xl'><a href='https://svmit.ac.in/'>Shri Sad`s Vidhya Mandal Institute of Technology, Bharuch</a></h3>
                            <p className='bg-clip-text text-transparent bg-gradient-to-b from-orange-500 to-red-500 text-xl'>Bachelor of Engineering in Computer Science & Engineering</p>
                        </div>

                        </div>
                    </div>
                    <div className='backdrop-blur-sm shadow-xl bg-white/20 w-full rounded-xl my-3'>
                        <div>
                        <h2 className='bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-red-500 text-3xl font-bold  rounded-xl'>Internship</h2>
                        <div>
                            <h3 className='cursor-arrow bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-red-500 text-2xl'><a href='https://durvasainfotech.com/'>Durvasa Infotech, Utran  -Surat</a></h3>
                            <p className='bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-red-500 text-xl'>Web Development</p>
                        </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </div>
  )
}
