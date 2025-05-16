'use client'
import Link from "next/link";
import React, { useState } from "react";
import { signup } from "../backend/axios";

function page() {
 const [form , setForm] = useState({email: '', username:'', password: ''})

 const handleOrigin = (e)=>{
  setForm({...form, [e.target.name]: e.target.value})
 }
 const handleSubmit = (e)=>{
  e.preventDefault();
  console.log(form)
  signup(form)
 }
  return (
    <div className="h-screen overflow-y-hidden w-full bg-blue-200 flex justify-center items-center">
      <div className="h-3/5 p-2 w-3/7 rounded-2xl bg-blue-100 backdrop:block border border-black">
        <h1 className="text-center font-mono text-xl">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col  ml-32 mt-16 ">
        <div>
            <label htmlFor="username">Username:</label>
            <br />
            <input
              type="text"
              onChange={handleOrigin}
              name="username"
              className="border-gray-500 border py-1 rounded-sm w-4/6 focus:outline-none focus:border-gray-700 focus:border-2 px-2"
            />
          </div>
          <div  className="mt-3">
            <label htmlFor="username">Email:</label> <br />
            <input
              type="text"
              onChange={handleOrigin}
              name="email"
              className="border-gray-500 border py-1 rounded-sm w-4/6 focus:outline-none focus:border-gray-700 focus:border-2 px-2"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="password">password:</label>
            <br />
            <input
              type="password"
              onChange={handleOrigin}
              name="password"
              className="border-gray-500 border py-1 rounded-sm w-4/6 focus:outline-none focus:border-gray-700 focus:border-2 px-2"
            />
          </div>
        

          <span className="mt-1">
            Create Account!{" "}
            <Link href={"/signin"} className="text-blue-900 underline ">
              Login
            </Link>
          </span>
          <button type="submit" className="mt-2 bg-sky-300 px-6 py-1 rounded-md w-86 cursor-pointer hover:bg-sky-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default page;
