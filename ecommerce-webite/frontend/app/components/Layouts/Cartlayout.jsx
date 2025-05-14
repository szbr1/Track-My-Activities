import React, { useState } from "react";
import { FaLuggageCart } from "react-icons/fa";
import { LuDelete, LuUtensilsCrossed } from "react-icons/lu";
import { TiTrash } from "react-icons/ti";
const products = [
  {
    id: 1,
    url: "https://picsum.photos/400/?=17",
    title: "Jackets",
    price: 400,
  },
  {
    id: 2,
    url: "https://picsum.photos/200/?=18",
    title: "Jackets",
    price: 400,
  },
  {
    id: 3,
    url: "https://picsum.photos/200/?=10",
    title: "Jackets",
    price: 400,
  },
  {
    id: 4,
    url: "https://picsum.photos/200?=2",
    title: "Jackets",
    price: 400,
  },
  {
    id: 5,
    url: "https://picsum.photos/400/?=1",
    title: "Jackets",
    price: 400,
  },
  {
    id: 6,
    url: "https://picsum.photos/400/?=3",
    title: "Jackets",
    price: 400,
  },
  {
    id: 7,
    url: "https://picsum.photos/400/?=8",
    title: "Jackets",
    price: 400,
  },
];

function Cartlayout({ cart, setCart }) {
  return (
    <div className="p-2">
      {cart ? (
        <div className=" overflow-y-scroll h-screen w-3/4 bg-white fixed z-10 top-0 left-1/4 md:left-7/12 lg:left-6/9 lg:w-3/9  ">
          {/* cross icons  */}
          <div
            className="absolute 
    lg:top-4 lg:left-80 text-red-700 border opacity-80 border-red-600 p-2 
    left-54 top-3  md:left-65  cursor-pointer
    rounded-full"
            onClick={() => setCart(!cart)}
          >
            <LuUtensilsCrossed />
          </div>

          {/* cart footer  */}
          <div className="w-full p-2">
            <button className=" text-black font-bold text-xl ">Cart</button>
          </div>

          {/* cart material  */}
          <div className="mt-12">
            {products.map((product) => {
              return (
                <div className="flex justify-between p-2 border-b border-gray-200 ">
                  {/* image , title & pric  */}
                  <div className="h-20 w-20 flex gap-5 ">
                    <img
                      src={product.url}
                      alt=""
                      className="h-full w-full object-cover rounded-lg"
                    />
                    <div className="flex flex-col flex-shrink-0  ">
                      <h1 className="uppercase text-sm font-semibold">
                        {product.title}
                      </h1>
                      <span className="text-[8px]">
                        Lorem ipsum dolor sit <br /> amet consectetur <br />{" "}
                        adipisicing elit.
                      </span>
                      <div className="font-medium text-gray-700">
                        ${product.price}
                      </div>
                    </div>
                  </div>
                  

                  {/* delete and pluse minus  */}
                  <div className="flex flex-col ml-12 justify-center items-center">
                    <div className="bg-gray-300 p-2 rounded-full ">
                      <TiTrash className="text-red-700 text-xl " />
                    </div>
                    <div className="flex gap-2">
                      <button className="h-3 w-3 rounded-lg  bg- text-black">
                        +
                      </button>
                      <span className="text-md">4</span>
                      <button className="h-3 w-3 rounded-lg  bg-white text-black">
                        -
                      </button>
                    </div>
                  </div>
                  {/* ends  */}
                </div>
              );
            })}
            <br />
            <br />
            <br />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Cartlayout;
