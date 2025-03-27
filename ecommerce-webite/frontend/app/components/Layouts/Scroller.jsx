"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
function Scroller() {
  const products = [
    {
      id: 1,
      url: "https://picsum.photos/400/?=17",
      title: "Jackets",
    },
    {
      id: 2,
      url: "https://picsum.photos/200/?=18",
      title: "Jackets",
    },
    {
      id: 3,
      url: "https://picsum.photos/200/?=10",
      title: "Jackets",
    },
    {
      id: 4,
      url: "https://picsum.photos/200?=2",
      title: "Jackets",
    },
    {
      id: 5,
      url: "https://picsum.photos/400/?=1",
      title: "Jackets",
    },
    {
      id: 6,
      url: "https://picsum.photos/400/?=3",
      title: "Jackets",
    },
    {
      id: 7,
      url: "https://picsum.photos/400/?=8",
      title: "Jackets",
    },
  ];
  // All the states const are defined here
  const controlRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  // this segment ends here
  const hanldeMouseUp = () => {
    setIsDragging(false)
    document.removeEventListener("mousemove", handleMouseDragg);
    document.removeEventListener("mouseup", handleMouseUp);
  };


  const handleMouseDown = (e) => {
    setIsDragging (true)
    setStartX( e.pageX - controlRef.current.offsetLeft)
    setScrollLeft(controlRef.current.scrollLeft)

    // Add event listener dynamically
  document.addEventListener("mousemove", handleMouseDragg);
  document.addEventListener("mouseup", hanldeMouseUp )

  };


  const handleMouseDragg = (e) => {
    if (!isDragging) return;
    e.preventDefault(); 
    const x = e.pageX - controlRef.current.offsetLeft;
    const walk = x - startX;
    controlRef.current.scrollLeft = scrollLeft - walk;
  };
  


  const handleMouseLeave = () => {};

  // Left Right Image Scroller Buttons
  const scroll = (direction) => {
    const scrollleft = direction === "left" ? -373 : 373;
    controlRef.current.scrollBy({ left: scrollleft, behavior : "smooth" });
  };

  const updateScrollbuttons = () => {
    const container = controlRef.current;
    5;
    const leftScroll = container.scrollLeft;
    const rightScrollable =
      container.scrollWidth > leftScroll + container.clientWidth + 1;
    setCanScrollLeft(leftScroll > 0);
    setCanScrollRight(rightScrollable);

    //    console.log(canScrollRight)

    console.log({
      srollLeft: container.scrollLeft,
      scrollWidth: container.scrollWidth,
      clientWidth: container.clientWidth,
    });
  };
  //  -- ends
  useEffect(() => {
    const container = controlRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollbuttons);
    }
    updateScrollbuttons();
  });
  return (
    <div className=" relative">
      <div
        className="absolute lg:right-20 top-3 gap-5 flex z-10 right-6  "
       
      >
        <button
          className="border p-2 border-black rounded-full cursor-pointer disabled:text-gray-400 disabled:border-gray-300  "
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
        >
          <FaAnglesLeft />
        </button>
        <button
          className="border p-2 border-black rounded-full cursor-pointer  disabled:text-gray-400 disabled:border-gray-300  "
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
        >
          <FaAnglesRight />
        </button>
      </div>
      <br />
 {/* scrollabe container  */}

      <div
        ref={controlRef}
        onMouseDown={handleMouseDown}
        onMouseUp={hanldeMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseDragg}
        className="container  relative mx-auto overflow-x-scroll scrollbar-none h-64-900 gap-3 flex "
      >
        {products.map((product) => {
          return (
            <div
              className="mt-8 h-full w-full px-2  md:w-1/2 lg:w-64 flex-shrink-0 overflow-hidden rounded-lg relative"
              key={product.id}
            >
              <img
                src={product.url}
                className="object-cover h-full w-full  rounded-lg"
                alt=""
                draggable="false"
              />
             <div className="absolute bottom-0 text-white backdrop-blur-sm w-full p-2">
<div>{product.title}</div>
             </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Scroller;
