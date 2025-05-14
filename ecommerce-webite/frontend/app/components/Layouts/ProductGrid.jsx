import React from 'react'

function ProductGrid({products}) {
  return (
    
    <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 '>{products.map((product)=>{
     return(
        <div className='flex flex-col relative'>

        <div className='w-full h-96 rounded-lg overflow-hidden '>
        <img src={product.images[0].url} alt="" className='h-full w-full object-cover' />
       
        </div>
        <div className='ml-3 w-full backdrop-blur-md'>
            <h1 className='text-lg font-bold '>{product.name}</h1>
            <h2 className='text-sm font-mono text-gray-600 '>${product.price}</h2>
        </div>
       </div>
     )
    })}</div>
  )
}

export default ProductGrid