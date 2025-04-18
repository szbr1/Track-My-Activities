import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

function AdminNavbar({togglesidebar, settoggleSidebar}) {
  return (
    <nav className='md:hidden sticky z-10 h-12 w-full bg-slate-950 opacity-90 flex items-center text-white'>
            <RxHamburgerMenu onClick={()=> settoggleSidebar(!togglesidebar)} className='text-2xl ml-3' />
                &nbsp; Dashboard 
        </nav>
  )
}

export default AdminNavbar