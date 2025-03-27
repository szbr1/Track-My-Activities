import React from 'react'

function FeaturedCollection() {
  return (
    <div className='hidden md:block h-screen w-full p-12'>
      <div className='bg-green-100 flex h-full w-full flex-wrap rounded-3xl overflow-hidden justify-between'>
       <div className='w-1/2 h-full flex justify-center flex-col p-4'>
        <span className='font-semibold'>Comfort and Style</span>
         <div className='text-4xl font-bold'>
          Apparel made for your <br /> everyday life
         </div>
         <span className='mt-6 pr-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, laborum. Lorem ipsum dolor sit amet. Lorem, ipsum.</span>
         <button className=' cursor-pointer px-3 py-2 mt-4 w-28 rounded-lg bg-black text-white font-semibold'>Shop Now</button>
       </div>

       
       <div className='w-1/2 h-full'>
          <img src="https://picsum.photos/500/500?random=2" alt="" className='object-cover h-full w-full' />
       </div>
      </div>
    </div>
  )
}

export default FeaturedCollection