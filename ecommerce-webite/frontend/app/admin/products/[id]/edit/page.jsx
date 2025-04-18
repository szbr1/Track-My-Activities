"use client";
import AdminNavbar from "@/app/components/Common/AdminNavbar";
import AdminSidebar from "@/app/components/Common/AdminSidebar";
import React, { useState } from "react";

function page() {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [
      {
        url: "https://picsum.photos/150?random=1",
      },
      {
        url: "https://picsum.photos/150?random=2",
      },
    ],
  });

  const [togglesidebar, settoggleSidebar] = useState(false);

  //   functions
  const handleChange = (e) => {
    const { value, name } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="md:flex">
      {/* navbar  */}
      <AdminNavbar
        togglesidebar={togglesidebar}
        settoggleSidebar={settoggleSidebar}
      />
      {/* sidebar  */}
      <AdminSidebar
        togglesidebar={togglesidebar}
        settoggleSidebar={settoggleSidebar}
      />
      {/* content  */}

      <div className="w-full min-h-screen">
        <div className="mx-auto max-w-3/4 mt-12 shadow-md rounded-md p-3">
          <h1 className=" py-2 text-xl font-bold">Products Edit</h1>

          <div>
            <label className="font-semibold">Product Name</label>
            <br />
            <input
              type="text"
              className=" w-full py-1 text-xl px-3 border"
              name="name"
              value={productData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mt-8">
            <label className="font-semibold ">Description</label>
            <br />
            <textarea
              type="text"
              className=" w-full py-2 text-xs min-h-[8rem] px-3 border"
            />
          </div>

          <div className="mt-4">
            <label className="font-semibold">Price</label>
            <br />
            <input
              type="number"
              className=" w-full py-1 text-xl px-3 border"
              name="price"
              value={productData.price}
              onChange={handleChange}
            />
          </div>

          <div className="mt-4">
            <label className="font-semibold">Count in Stock</label>
            <br />
            <input
              type="number"
              className=" w-full py-1 text-xl px-3 border"
              name="countInStock"
              value={productData.countInStock}
              onChange={handleChange}
            />
          </div>

          <div className="mt-4">
            <label className="font-semibold">SKU</label>
            <br />
            <input
              type="number"
              className=" w-full py-1 text-xl px-3 border"
              name="sku"
              value={productData.sku}
              onChange={handleChange}
            />
          </div>

          <div className="mt-4">
            <label className="font-semibold">Sizes (comma seprate) </label>
            <br />
            <input
            
              type="text"
              className=" w-full py-1 text-xl px-3 border"
              name="sizes"
              value={productData.sizes}
              onChange={(e)=> setProductData({...productData, sizes: e.target.value.split(',').map(size => {size.trim()})})}
            />
          </div>

          <div className="mt-4">
            <label className="font-semibold">Sizes (comma seprate) </label>
            <br />
            <input
            
              type="text"
              className=" w-full py-1 text-xl px-3 border"
              name="sizes"
              value={productData.sizes}
              onChange={(e)=> setProductData({...productData, colors: e.target.value.split(',').map(color => {color.trim()})})}
            />
          </div>


        </div>
      </div>
    </div>
  );
}

export default page;
