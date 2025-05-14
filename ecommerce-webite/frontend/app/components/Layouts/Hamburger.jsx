import Link from 'next/link'
import React from 'react'

function HamburgerLayout({cart, setCart}) {
  return (
    
    <div className=' '>

   {
    cart ? <div className={`fixed h-screen w-2/3 bg-white z-10 top-0 left-0 
                   transition-all duration-300 ease-in-out transform
                   ${cart ? "translate-x-0" : "-translate-x-full"}`}>

        {/* cross icons  */}
    <div className={`text-2xl right-0 absolute  px-[1rem] py-[0.3rem] m-3 border border-black rounded-full `} onClick={()=> setCart(!cart)}>x</div>

    <div className='flex flex-col gap-4 mt-28 px-5 text-xl'>

    <Link href={"/"}>MEN</Link>
    <Link href={"/"}>WOMEN</Link>
    <Link href={"/"}>TOP WEAR</Link>
    <Link href={"/"}>BOTTOM WEAR</Link>
</div>



</div> : null
   }
    
    </div>
  )
}

export default HamburgerLayout