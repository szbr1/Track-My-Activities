"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { RxCross1 } from "react-icons/rx";
function Sidebar({ isOpen, setisOpen }) {
  // hooks 
  const searchParmas = useSearchParams();
  const router = useRouter()


  const [filter, setFilter] = useState({
    category: "",
    gender: "",
    color: [],
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

  // filter change checkup  function
  
   const filterChange = (e) => {
    // the functionality i am looking for is to add all the selected items in one objec of array

    const {name , value , checked, type} = e.target;
    let newFilter = {...filter}
    if(type === 'checkbox'){
    if(checked){
      newFilter[name] = [...(newFilter[name] || []), value]
    }else {
      newFilter[name] = newFilter[name].filter(item => item !== value)
    }
    }else {
      newFilter[name] = value
    }
    setFilter(newFilter)
   }

   const updateParamsUrl = (newFilter) => {
    const params = new URLSearchParams();
     Object.keys(newFilter).forEach(key => {
      if(Array.isArray(newFilter[key]) && newFilter[key].length > 0){
        params.append(key, newFilter[key].join(','));
      }else{
        params.append(key, newFilter[key])
      }
      setSearchParams(params)
      
     })
     router.push(`/Collection/all?${params.toString()}`)
   }
  // ------------------
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
    <div className="">
      <div className="relative w-full  ">
        <div
          className=" lg:hidden p-3 absolute right-1  top-1 "
          onClick={() => setisOpen(!isOpen)}
        >
          <RxCross1 />
        </div>
      </div>

      <div className="p-4 ">
        <h2 className="text-xl font-medium mb-4 ">Filter</h2>
        {/* category segment  */}
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {category.map((category, index) => {
          return (
            <div key={index}>
              <input
                type="radio"
                name="category"
                value={category}
                onChange={filterChange}
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
                  value={gender}
                  onChange={filterChange}
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
            {color.map((color) => {
              return (
                <div key={color}>
                  <button
                  name="color"
                  onClick={filterChange}
                  value={color}
                    className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105"
                    style={{ backgroundColor: color.toLowerCase() }}
                  ></button>
                </div>
              );
            })}
          </div>
        </div>

      {/* sizes  */}
      
        <div className="mt-4">
          <label className="block text-gray-600 font-medium mb-2">Size</label>
          <div className="grid grid-cols-2">
            {size.map((size) => (
              <div key={size} className="flex items-center mb-1">
                <input
                  type="checkbox"
                  onChange={filterChange}
                  value={size}
                  name="size"
                  className="mr-2 h-4 w-4 text-blue-500 cursor-pointer focus:ring-blue-400 border-gray-300"
                />
                <span className="text-gray-700">{size}</span>
              </div>
            ))}
          </div>
        </div>
        
      {/* brands  */}

        <div className="mt-4">
          <label className="block text-gray-600 font-medium mb-2">Brands</label>
          <div className="grid grid-cols-2">
            {brand.map((brand) => (
              <div key={brand} className="flex items-center mb-1">
                <input
                value={brand}
                  type="checkbox"
                  name="brand"
                  onChange={filterChange}
                  className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 cursor-pointer border-gray-300"
                />
                <span className="text-gray-700">{brand}</span>
              </div>
            ))}
          </div>
        </div>

         {/* Material  */}

         <div className="mt-4">
          <label className="block text-gray-600 font-medium mb-2">Material</label>
          <div className="grid grid-cols-2">
            {material.map((material) => (
              <div key={material} className="flex items-center mb-1">
                <input
                value={material}
                  type='checkbox'
                  name="material"
                  onChange={filterChange}
                  className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 cursor-pointer border-gray-300"
                />
                <span className="text-gray-700">{material}</span>
              </div>
            ))}
          </div>
        </div>

{/* price  */}
        <div className="mt-4">
          <label className="block text-gray-600 font-medium mb-2">
            Price Range
          </label>
          <input type="range" min={0} max={100} value={priceRange[1]} onChange={(e)=> setPriceRange([0, e.target.value])} />
          <div className="font-mono flex justify-between pr-24">
            <span>0</span> <span>{priceRange[1]}</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;
