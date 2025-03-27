import React from 'react'
import Navbar from './components/Common/Navbar'
import Hero from './components/Common/Hero'
import Footer from './components/Common/Footer'
import ProductsDetails from './components/Common/ProductsDetails'

function page() {
  return (
    <div className=' w-full overflow-hidden'>
    <Navbar />
    <Hero />
    <ProductsDetails />
    <Footer /> 
    </div>

  )
}

export default page