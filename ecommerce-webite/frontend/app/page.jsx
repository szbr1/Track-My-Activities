import React from 'react'
import Navbar from './components/Common/Navbar'
import Hero from './components/Common/Hero'
import Footer from './components/Common/Footer'
import ProductsDetails from './components/Common/ProductsDetails'
import ProductGrid from './components/Layouts/ProductGrid'
import FeaturedCollection from './components/Layouts/FeaturedCollection'
import FeatureTalks from './components/Layouts/FeatureTalks'

function page() {
  
const placeholderProducts = [
  {
      _id: 1,
      name: "Product 1",
      price: 100,
      images: [
          {url: "http://picsum.photos/500/500?random=22"}
      ]
  },
  {
      _id: 2,
      name: "Product 2",
      price: 100,
      images: [
          {url: "http://picsum.photos/500/500?random=24"}
      ]
  },
  {
      _id: 3,
      name: "Product 1",
      price: 100,
      images: [
          {url: "http://picsum.photos/500/500?random=23"}
      ]
  },
  {
      _id: 4,
      name: "Product 4",
      price: 100,
      images: [
          {url: "http://picsum.photos/500/500?random=25"}
      ]
  },
  {
    _id: 5,
    name: "Product 5",
    price: 100,
    images: [
        {url: "http://picsum.photos/500/500?random=26"}
    ]
},
{
  _id: 6,
  name: "Product 6",
  price: 100,
  images: [
      {url: "http://picsum.photos/500/500?random=27"}
  ]
},
{
  _id: 7,
  name: "Product 7",
  price: 100,
  images: [
      {url: "http://picsum.photos/500/500?random=29"}
  ]
},
{
  _id: 4,
  name: "Product 8",
  price: 100,
  images: [
      {url: "http://picsum.photos/500/500?random=28"}
  ]
}
]

  return (
    <div className=' w-full overflow-hidden min-h-screen'>
    <Navbar />
    <Hero />
    <ProductsDetails />
    <div className='container mx-auto px-6'> 
      <h2 className='text-3xl text-center my-4'>
        Top Wear for Women
      </h2>
      
      <ProductGrid  products={placeholderProducts} />
    </div>
      <FeaturedCollection />
      <FeatureTalks />
    <Footer /> 
    </div>

  )
}

export default page