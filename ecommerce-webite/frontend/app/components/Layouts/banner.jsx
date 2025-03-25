import React from 'react'
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import Collection from './Collection';
function Banner() {
  return (

    <div className='min-h-screen' >
        <div className='h-[400px] md:h-[600px] lg:h-[600px] w-full relative'>

        <img src="https://images.unsplash.com/photo-1581952976147-5a2d15560349?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-cover opacity-100' />

        <div className='bottom-1/4 text-2xl text-black font-bold  right-1/2 transform translate-x-1/2 absolute flex justify-center items-center flex-col'>
            
            <h1 className='md:text-5xl'>B<span className='text-orange-700'>oo</span>k O<span className='border-b-2 border-orange-700'>rder</span><span className='text-orange-700'>.</span></h1>
            <br className='hidden md:block'/>
            <button className='bg-orange-700 text-gray-200 px-6 py-1 hover:bg-gray-900 rounded-md text-center text-sm uppercase border shadow-2xl'>Trust Us.</button>
        </div>
        </div>
        {/* collection  */}
        <Collection /> 
         
         {/* collections end  */}
         
        <div className=' relative  flex px-20 justify-center items-center flex-col container mx-auto  h-32'>
         <h1 className='text-2xl md:text-3xl md:uppercase font-semibold'>
         Early Learning
         </h1>
         <span className='text-sm text-gray-600 text-center'>Meet Our Certified & Passionate Childcare Professionals</span>
        <div className='absolute right-8 flex -bottom-8 gap-4'>
            <div className='p-2 bg-slate-500 rounded-lg text-xl '>

            <TiChevronLeftOutline  className=''/>
            </div>
            <div className='p-2 bg-slate-500 rounded-lg text-xl '>

            <TiChevronRightOutline className='' />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Banner