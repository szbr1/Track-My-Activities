import React from 'react'

function Collection() {
  return (
    <div className=' mt-8 container mx-auto min-h-max grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 grid gap-8' >
      <div className='relative h-[400px] md:h-[500px] lg:[600px] '>
        <img src="https://images.unsplash.com/photo-1604514628550-37477afdf4e3?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-cover ' /> 
        <div className=' absolute bottom-3 flex justify-center items-center rounded-md h-10 px-4 bg-white left-2  '>Women Collection</div>
      </div>
      <div className='relative h-[400px] md:h-[500px] lg:[600px]  '>
        <img src="https://images.unsplash.com/photo-1652278859457-837e5884de31?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-cover ' /> 
        <div className=' absolute bottom-3 flex justify-center items-center px-8 h-10  bg-white left-2 rounded-md  '>Men Collection</div>
      </div>
    </div>
  )
}

export default Collection 