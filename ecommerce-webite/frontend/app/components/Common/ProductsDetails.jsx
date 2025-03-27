import React from 'react'

const selectedProduct = {
    name: "Stylish Jacket",
    price: 120,
    originalPrice: 150,
    description: "This is a stylish Jacket perfect for any occassion ",
    brand: "FashionBrand",
    material: "Leather",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Black"],
    images: [{
        url: "https://picsum.photos/500/500?random=1"
    },
    {
        url: "https://picsum.photos/500/500?random=2"
    },
   
]
}
function ProductsDetails() {

  return (
    <div className='p-6'>
     <div className=' bg-white p-8 rounded-lg'>
      <div className='flex flex-col md:flex-row'>
         {/* left thumbnails  */}
         <div className='hidden md:flex flex-col space-y-4 mr-6'>
            {selectedProduct.images.map((image, index)=> {

                return <img src={image.url} alt="nothing"
                className='w-20 h-20 object-cover rounded-lg cursor-pointer border'
                 />
            })}
            
         </div>

         {/* main image  */}

         <div className='md:w-1/2'>
            <div className='mb-4'>
            <img src={selectedProduct.images[0]?.url} alt=""
            className='w-full h-auto object-cover rounded-lg'
             />
            </div>
         </div>
          
        {/* Mobile Thumbnail  */}

        <div className='md:hidden flex overscroll-x-scroll space-x-4 mb-4'>
{selectedProduct.images.map((images, index)=>{
    return <img 
    src={images.url} alt="" 
    className='w-20 h-20 object-cover rounded-lg cursor-pointer border'
    />
})}
        </div>

        {/* Right Slide  */}
    <div className=''></div>


      </div>
     </div>
    </div>
  )
}

export default ProductsDetails