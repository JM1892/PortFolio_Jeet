import React from 'react'
import Pr_1 from './project-1.png'
import Pr_2 from './project-2.png'

export default function Project() {
  return (
    <div className='bg-gradient-to-br from-pink-500 from-50% to-blue-500 to-50% mx-4 rounded-2xl px-4 py-4'>
            {/* section-1 */}
            <div>
        <div className=' my-3 bg-white/10 rounded-2xl px-2 py-1 h-auto'>
                <header className='text-3xl font-bold italic text-right mx-8 text-white'>Project-1 Design A Figma Design Using TailwindCSS</header>
                <section className='my-4  md:flex flex-grow justify-between items-center'>
                    <img className=' shadow-2xl shadow-black rounded-3xl md:w-[600px] md:h-[300px]' src={Pr_1}/>
                    <p className='italic py-4 font-bold mx-6 text-white'>This is the Design to select from figma and practice of tailwindcss property how they work.</p>
                </section>
                </div>
            </div>

            <div>
            <div className=' bg-white/10 rounded-2xl px-2 py-1 h-auto'>
                <header className='text-3xl font-bold italic text-start mx-8 text-white'>Project-2 Design A PortFolio in ReactJS </header>
                <section className='my-4 md:flex flex-grow justify-between items-center'>
                    <p className='italic font-bold mx-6 text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti optio neque ipsam saepe alias, est aperiam fuga consequatur autem aspernatur ipsa possimus fugiat minima suscipit perspiciatis beatae, illo delectus! Cum?</p>
                    <img className=' shadow-2xl shadow-black rounded-3xl md:w-[600px] md:h-[300px]' src={Pr_2}/>
                </section>
            </div>
        </div>
    </div>
  )
}
