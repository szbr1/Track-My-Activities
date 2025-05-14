"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";

function Sidebar({ isOpen, setisOpen }) {
  // hooks 
  const searchParams = useSearchParams();
  const router = useRouter();

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
    "Black",
    "Purple",
    "White",
    "Gray",
    "Brown",
    "Navy",
  ];

  const category = ["Top Wear", "Bottom Wear"];
  const gender = ["Male", "Female"];
  const size = ["S", "L", "M", "Xl"];
  const material = ["Cotton", "Khaddar", "Shanoon"];
  const brand = ["Saya", "Khaddi", "Sphire", "Limelight"];

  const filterChange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilter = { ...filter };

    if (type === 'checkbox') {
      if (checked) {
        newFilter[name] = [...(newFilter[name] || []), value];
      } else {
        newFilter[name] = newFilter[name].filter(item => item !== value);
      }
    } else {
      newFilter[name] = value;
    }

    setFilter(newFilter);
    updateParamsUrl(newFilter);
  };

  const updateParamsUrl = (newFilter) => {
    const params = new URLSearchParams();
    
    Object.entries(newFilter).forEach(([key, value]) => {
      if (Array.isArray(value) && value.length > 0) {
        params.set(key, value.join(','));
      } else if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    router.push(`/collections/all?${params.toString()}`, { shallow: true });
  };

  useEffect(() => {
    if (!searchParams) return;

    const params = Object.fromEntries([...searchParams]);
    
    setFilter({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color ? params.color.split(",") : [],
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: Number(params.minPrice) || 0,
      maxPrice: Number(params.maxPrice) || 100,
    });
    
    setPriceRange([0, Number(params.maxPrice) || 100]);
  }, [searchParams]);

  return (
    <div className="">
      <div className="relative w-full">
        <div
          className="lg:hidden p-3 absolute right-1 top-1"
          onClick={() => setisOpen(!isOpen)}
        >
          <RxCross1 />
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-medium mb-4">Filter</h2>
        
        {/* Category segment */}
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {category.map((cat, index) => (
          <div key={index}>
            <input
              type="radio"
              name="category"
              value={cat}
              checked={filter.category === cat}
              onChange={filterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{cat}</span>
          </div>
        ))}

        {/* Gender segment */}
        <div className="mt-4">
          <label className="block text-gray-600 font-medium mb-2">Gender</label>
          {gender.map((gen, index) => (
            <div key={index}>
              <input
                type="radio"
                name="gender"
                value={gen}
                checked={filter.gender === gen}
                onChange={filterChange}
                className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
              />
              <span className="text-gray-700">{gen}</span>
            </div>
          ))}
        </div>

        {/* Colors segment */}
        <div className="mt-4">
          <label className="block text-gray-600 font-medium mb-2">Colors</label>
          <div className="flex flex-wrap gap-2">
            {color.map((col) => (
              <button
                key={col}
                name="color"
                value={col}
                onClick={filterChange}
                className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 ${filter.color.includes(col) ? 'ring-2 ring-blue-500' : ''}`}
                style={{ backgroundColor: col.toLowerCase() }}
                aria-label={col}
              />
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="mt-4">
          <label className="block text-gray-600 font-medium mb-2">Size</label>
          <div className="grid grid-cols-2">
            {size.map((sz) => (
              <div key={sz} className="flex items-center mb-1">
                <input
                  type="checkbox"
                  checked={filter.size.includes(sz)}
                  onChange={filterChange}
                  value={sz}
                  name="size"
                  className="mr-2 h-4 w-4 text-blue-500 cursor-pointer focus:ring-blue-400 border-gray-300"
                />
                <span className="text-gray-700">{sz}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Brands */}
        <div className="mt-4">
          <label className="block text-gray-600 font-medium mb-2">Brands</label>
          <div className="grid grid-cols-2">
            {brand.map((br) => (
              <div key={br} className="flex items-center mb-1">
                <input
                  type="checkbox"
                  checked={filter.brand.includes(br)}
                  onChange={filterChange}
                  value={br}
                  name="brand"
                  className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 cursor-pointer border-gray-300"
                />
                <span className="text-gray-700">{br}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Material */}
        <div className="mt-4">
          <label className="block text-gray-600 font-medium mb-2">Material</label>
          <div className="grid grid-cols-2">
            {material.map((mat) => (
              <div key={mat} className="flex items-center mb-1">
                <input
                  type="checkbox"
                  checked={filter.material.includes(mat)}
                  onChange={filterChange}
                  value={mat}
                  name="material"
                  className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 cursor-pointer border-gray-300"
                />
                <span className="text-gray-700">{mat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mt-4">
          <label className="block text-gray-600 font-medium mb-2">Price Range</label>
          <input 
            type="range" 
            min={0} 
            max={100} 
            value={priceRange[1]} 
            onChange={(e) => {
              const newPrice = e.target.value;
              setPriceRange([0, newPrice]);
              updateParamsUrl({ ...filter, maxPrice: newPrice });
            }} 
            className="w-full"
          />
          <div className="font-mono flex justify-between pr-8">
            <span>0</span>
            <span>{priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;