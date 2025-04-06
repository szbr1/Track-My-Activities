'use client'
import ProductGrid from '@/app/components/Layouts/ProductGrid'
import Sidebar from '@/app/components/products/Sidebar'
import Sort from '@/app/components/products/Sort'
import { products } from '@/utils/products'
import React, { useEffect, useRef, useState } from 'react'
import { FaFilter } from 'react-icons/fa'


function page() {
    const [isOpen, setisOpen] = useState(false)
    const [AllProducts, setProducts] = useState([])
    const SidebarRef = useRef(null)

    const togglefucntion= ()=>{
       setisOpen(!isOpen)
    }
    const OutsideCloser = (e)=>{
      if(SidebarRef.current && !SidebarRef.current.contains(e.target)){
        setisOpen(false)
      }
    }
    useEffect(()=>{
        // event hanlder 
        document.addEventListener('mousedown', OutsideCloser)
    })
    useEffect(()=>{
        setTimeout(() => {
          setProducts(products)
        }, 1000);
        console.log(AllProducts)
        
    },)
  return (
    <div className='py-2 min-h-screen relative'> 
    <div className='md:hidden py-4 border flex justify-center items-center '>
        <button onClick={togglefucntion} className='text-center'><FaFilter /></button>
    </div>
     {/* /sidebar for mobile  */}
     <div ref={SidebarRef} 
     className={`${isOpen? 'translate-x-0':'-translate-x-full '} w-64 transition-transform duration-300 fixed lg:block lg:translate-x-0 left-0 z-50 inset-y-0  border-black bg-white border-r  `
     }>
     <Sidebar isOpen={isOpen} setisOpen={setisOpen} />
     </div >
        <div className='flex-grow mt-3 mb-3 p-4'>
          <div className='mb-3'><Sort /></div>
          <div>
            <ProductGrid products={AllProducts} />
          </div>
        </div>
     
     </div>
  )
}

export default page


// className={`${isOpen? 'translate-x-0': '-translate-x-full'}
//       fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform border-r duration-300 lg:static lg:translate-x-0
//      `