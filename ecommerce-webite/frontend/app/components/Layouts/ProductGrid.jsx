import React from 'react'

function ProductGrid({products}) {
  return (
    
    <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 '>{products.map((product)=>{
     return  <div className='w-full h-96 rounded-lg overflow-hidden relative'>
        <img src={product.images[0].url} alt="" className='h-full w-full object-cover' />
        <div className=' absolute bottom-0 p-2 left-0 w-full backdrop-blur-md'>
            <h2 className=' text-sm font-mono text-white '>${product.price}</h2>
            <h1 className='text-lg font-bold  text-white'>{product.name}</h1>
        </div>
       </div>
    })}</div>
  )
}

export default ProductGrid