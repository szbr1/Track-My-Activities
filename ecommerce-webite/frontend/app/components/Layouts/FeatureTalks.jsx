import React from 'react'
import { FaBagShopping } from "react-icons/fa6";
import { FaArrowsRotate } from "react-icons/fa6";
import { MdOutlinePayments } from "react-icons/md";
function FeatureTalks() {
  return (
    <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 my-16'>
        <div className='flex flex-col justify-center items-center gap-3'>
           <FaBagShopping  />
           <br />
           <div className='uppercase font-semibold'>free international shipping</div>
           <span className='text-gray-400'>On all orders $100.00</span>
        </div>

        <div className='flex flex-col justify-center items-center gap-3'>
           <FaArrowsRotate  />
           <br />
           <div className='uppercase font-semibold'>45 days return</div>
           <span className='text-gray-400'>Money back gurantee</span>
        </div>

        <div className='flex flex-col justify-center items-center gap-3'>
           <MdOutlinePayments  />
           <br />
           <div className='uppercase font-semibold'>secure checkout</div>
           <span className='text-gray-400'>100% secured checkout process</span>
        </div>
    </div>
  )
}

export default FeatureTalks