'use client'
import AdminNavbar from '@/app/components/Common/AdminNavbar'
import AdminSidebar from '@/app/components/Common/AdminSidebar'
import React, { useState } from 'react'

function page() {
     const [togglesidebar , settoggleSidebar] = useState(false)
     const [uservalue , setuservalue] = useState({
        name: '',
        email: '',
        Password: '',
        role: 'customer'
    
     })
     const Users = [
        {
            _id: 13333,
            role: 'Admin',
            name: 'Shahzabi',
            
        }
     ]
     const handleChange = (e)=>{
     setuservalue({...uservalue, [e.target.name] : e.target.value })
     }

     const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(uservalue)
        setuservalue({name: '', Password: '', email:'', role: 'customer'})
     }
     
  return (
    <div className='md:flex'>
              <AdminNavbar togglesidebar={togglesidebar} settoggleSidebar={settoggleSidebar}/>
     {/* sidebar  */}
       <AdminSidebar togglesidebar={togglesidebar} settoggleSidebar={settoggleSidebar} />
       <div className=' w-full md:w-3/4 min-h-screen px-2 md:px-4 lg:px-12 py-5'>
        <span  className='text-2xl py-5 font-bold'>User Management</span>

       <div className=' w-full lg:mt-3'>
        <span className='text-xl font-semibold'>Add New User</span> <br />
        <form onSubmit={handleSubmit}>

        <label className='text-gray-600 mt-5' >Name</label> <br />
        <input type="text" name='name' value={uservalue.name} onChange={handleChange} className='w-full py-2 px-3 border border-gray-300' />
        
        <label className='text-gray-600 mt-5' >Email</label> <br />
        <input type="text" name='email' value={uservalue.email} onChange={handleChange} className='w-full py-2 px-3 border border-gray-300' />
        
        <label className='text-gray-600 mt-5' >Password</label> <br />
        <input type="password" name='Password' value={uservalue.Password} onChange={handleChange} className='w-full py-2 px-3 border border-gray-300' />
        <select value={uservalue.role} name='role' onChange={handleChange} className='w-full p-2 mt-3 border border-gray-300 rounded-md'>
        <option value="customer">Customer</option>
        <option value="admin">Admin</option>
        </select>
        <br />
                
         <button type='submit' className="rounded-md p-2 border mt-6 px-4 cursor-pointer bg-green-400 r">Add User</button>
        </form>
        

        <div className='mt-20 overflow-x-auto lg:overflow-hidden w-full'>
            <table className='w-96'>
                <thead>
                    <tr className='w-full bg-slate-300 whitespace-nowrap'>
                        <th className='py-2 px-4 lg:px-25 text-start'>User Name</th>
                        <th className='py-2 px-4 lg:px-25'>User ID</th>
                        <th className='py-2 px-4 lg:px-25'>Role</th>
 
                        <th className='py-2 px-12'>Delete</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {Users.map(user=>{
                        return (
                            <tr className='hover:bg-green-200 border-b border-gray-200' key={user._id}>
                             <td className='py-2 px-4 lg:px-25 text-start'>{user.name}</td>
                             <td className='py-2 px-4 lg:px-25 text-start'>{user._id}</td>
                            <td className='py-2 px-4 lg:px-25 text-start'><select name={user.role}>
                                <option value="customer">Customer</option>
                                <option value="admin">Admin</option>
                                </select></td>
                            <td className='py-2 px-4 lg:px-25 text-start'><button className='bg-red-700 text-white cursor-pointer py-1 px-3 rounded-md bg'>Delete</button></td>
                        </tr>
                        )
                    })}
                   
                </tbody>
            </table>
        </div>

       </div>
       </div>
    </div>
  )
}

export default page