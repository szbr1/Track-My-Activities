"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import { RxCross1 } from "react-icons/rx";
function Sidebar({ isOpen, setisOpen }) {
  const searchParmas = useSearchParams();
  const [filter, setFilter] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 100]);
  const color = [
    "Red",
    "Blue",
    "Black ",
    "Purple",
    "White",
    "Gray",
    "Brown",
    "Navy",
  ];

  const category = ["Top Wear ", "Bottom Wear"];
  const gender = ["Male", "Female"];
  const size = ["S", "L", "M", "Xl"];
  const material = ["Cotton", "Khaddar", "Shanoon"];
  const brand = ["Saya", "Khaddi", "Sphire", "Limelight"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParmas]);

    setFilter({
      category: params.category || "",
      gender: params.gender || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setPriceRange([1, params.maxPrice || 100]);
  }, [searchParmas]);

  return (
    <div>
      <div className="relative w-full  ">
        <div
          className=" lg:hidden p-3 absolute right-1  top-1 "
          onClick={() => setisOpen(!isOpen)}
        >
          <RxCross1 />
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-medium mb-4 ">Filter</h2>
        {/* category segment  */}
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {category.map((category, index) => {
          return (
            <div key={index}>
              <input
                type="radio"
                name="category"
                className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
              />
              <span className="text-gray-700"> {category}</span>
            </div>
          );
        })}

        {/* // gender segment  */}
        <div className="mt-4">
          <label className="block text-gray-600 font-medium mb-2">Gender</label>
          {gender.map((gender, index) => {
            return (
              <div key={index}>
                <input
                  type="radio"
                  name="gender"
                  className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
                />
                <span className="text-gray-700"> {gender}</span>
              </div>
            );
          })}
        </div>

        {/* Colors segment  */}
        <div className="mt-4">

        <label className="block text-gray-600 font-medium mb-2">Colors</label>
        <div className="flex flex-wrap gap-2">
          {color.map((color)=>{
            return(
              <div key={color}>
                <button 
                className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105"
                style={{backgroundColor: color.toLowerCase()}}
                ></button>
              </div>
            )
          })}
          </div>
        </div>
         
         <div className="mt-4">
         <label className="block text-gray-600 font-medium mb-2">Size</label>
         <div className="grid grid-cols-2">

         {size.map(size => (
           <div key={size} className="flex items-center mb-1"> 
          <input type="checkbox" name="size" className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"/>
          <span className="text-gray-700">{size}</span>
          </div>
         ))}
         </div>
         </div>


        
      </div>
    </div>
  );
}

export default Sidebar;
