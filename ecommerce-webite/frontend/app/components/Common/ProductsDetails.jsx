'use client'
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductGrid from "../Layouts/ProductGrid";

const selectedProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "This is a stylish Jacket perfect for any occassion ",
  brand: "FashionBrand",
  price: [
    {
      originalPrice: 200,
      currentPrice: 120,
    },
  ],
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
    },
  ],
};
const similarProducts = [
    {
        _id: 1,
        name: "Product 1",
        price: 100,
        images: [
            {url: "http://picsum.photos/500/500?random=8"}
        ]
    },
    {
        _id: 2,
        name: "Product 2",
        price: 100,
        images: [
            {url: "http://picsum.photos/500/500?random=9"}
        ]
    },
    {
        _id: 3,
        name: "Product 4",
        price: 100,
        images: [
            {url: "http://picsum.photos/500/500?random=10"}
        ]
    },
    {
        _id: 4,
        name: "Product 4",
        price: 100,
        images: [
            {url: "http://picsum.photos/500/500?random=11"}
        ]
    }
]



function ProductsDetails() {
    const [mainImage , setMainImage] = useState("")
    const [quantity , setquantity] = useState(1)
    const [Size ,setSize] = useState("")
    const handleCartButton = ()=> {
        if(!Size){
            toast.error("Please Enter Size")
        }
        if(Size){
        toast.success("Product Added in Cart")
        }
    }
   
    const handleQuantity = (action) => {
        if(action === "plus"){ setquantity(prev => prev + 1)}
        if(action === "minus" && quantity > 1){ setquantity(prev => prev -1)}
    }

    useEffect(()=>{
        if(selectedProduct.images?.length > 0){
           setMainImage(selectedProduct.images[0].url)
        }
    },[setMainImage])
  return (
    <div className="p-6">
      <div className=" bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* left thumbnails  */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => {
              return (
                <img
                onClick={()=> setMainImage(image.url)}
                  src={image.url}
                  alt="nothing"
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
                />
              );
            })}
          </div>

          {/* main image  */}

          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt=""
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Mobile Thumbnail  */}

          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((images, index) => {
              return (
                <img
                  src={images.url}
                  alt=""
                  onClick={()=> setMainImage(images.url)}
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
                />
              );
            })}
          </div>


     {/* --------------------- */}


          {/* Right Slide  */}
          <div className="p-4 md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold">
              {selectedProduct.name}
            </h3>
        {/* price manager  */}
            {selectedProduct.price.map((price) => {
              return (
                <div className="flex flex-col mt-3">
                  
                  <span>
                    {price.originalPrice ? (
                      <div className=" line-through text-sm text-gray-400">
                        {price.originalPrice}{" "}
                      </div>
                    ) : (
                      <div>{price.currentPrice}</div>
                    )}
                  </span>
                  <span className="text-xl ml-4 mb-3">
                    ${price.originalPrice ? price.currentPrice : null}
                  </span>
                </div>
              );
            })}
      {/* description  */}
      <div className="ml-4 ">

            <span >{selectedProduct.description}</span>
      </div>
    {/* colors  */}
    <br />
            <span className="ml-4 font-semibold">Color:</span>
             <div className="flex gap-2 ml-3 mt-2">
                <div className="h-7 w-7  rounded-full bg-amber-950"></div>
                <div className="h-7 w-7  rounded-full bg-gray-800"></div>
             </div>
             
   {/* sizes and buttons  */}
    <div className="ml-4 mt-3 ">
       <span className="font-semibold">Size:</span>
       <br />
       <div className="flex gap-2">

       {
           selectedProduct.sizes.map((size)=>{
            
               return <button
                onClick={()=> setSize(size)}
                className={`h-10 w-10 border cursor-pointer  ${Size === size ? 'bg-black text-white': ''}   hover:shadow-md shadow-gray-700 border-black rounded-lg font-semibold`}>
                  {size}
                 </button>
        })
    }
    </div>
    </div>

    {/* quantity cart buttons  */}
        <div className="ml-4 mt-3">
            <span className="font-semibold ">Quantity:</span>
            <div className="mt-3">

            <button 
            onClick={()=> handleQuantity("minus")}
             className="h-10 w-7 bg-slate-300 rounded-sm cursor-pointer">-</button>
            <span className="mx-3">{quantity}</span>
            <button
            onClick={()=> handleQuantity("plus")}
             className="h-10 w-7 bg-slate-300 rounded-sm cursor-pointer">+</button>
            </div>
        </div>

    {/* Add to Cart Button  */}
      <button 
      onClick={()=> handleCartButton()}
      className="w-full ml-4 cursor-pointer md:w-8/12 py-2 bg-black text-white uppercase mt-6">add to cart</button>
<br />
    {/* Charactricstcs  */}
    <h5 className="ml-4 mt-6 font-semibold text-xl">Charactricstcs:</h5>
    <div className="ml-4 w-7/9 mt-3 lg:w-3/8 md:3/6 flex justify-between">
      <div>Brand <br /> Material</div>
      <div className="font-light text-gray-500">{selectedProduct.brand} <br /> {selectedProduct.material}</div>
    </div>
        
          </div>
        </div>
      </div>
      <h2 className="text-2xl text-center font-medium mb-4">You May Also Like</h2>
      <ProductGrid products={similarProducts}/>
    </div>
  );
}

export default ProductsDetails;
