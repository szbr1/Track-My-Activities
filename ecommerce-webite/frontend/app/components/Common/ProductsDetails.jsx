import React from "react";

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
function ProductsDetails() {
  return (
    <div className="p-6">
      <div className=" bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* left thumbnails  */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => {
              return (
                <img
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
                src={selectedProduct.images[0]?.url}
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
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
                />
              );
            })}
          </div>

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
      <div className="ml-4 mb-3">

            <span >{selectedProduct.description}</span>
      </div>
    {/* colors  */}
    <br />
            <span className="ml-4 mt-2 font-semibold">Color:</span>
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
               return <button className="h-10 w-10 border cursor-pointer bg-gray-100 hover:shadow-md shadow-gray-700 border-black rounded-lg font-semibold">
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

            <button className="h-10 w-7 bg-slate-300 rounded-sm">-</button>
            <span className="mx-3">1</span>
            <button className="h-10 w-7 bg-slate-300 rounded-sm">+</button>
            </div>
        </div>

    {/* Add to Cart Button  */}
      <button className="w-full cursor-pointer md:w-8/12 py-2 bg-black text-white uppercase mt-6">add to cart</button>
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetails;
