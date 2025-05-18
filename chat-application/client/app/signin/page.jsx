'use client'
import Link from "next/link";
import React, { useState } from "react";
import { CiChat1 } from "react-icons/ci";
import { useAuthPage } from "../store/useAuthPage";
import { TbEye, TbLoaderQuarter } from "react-icons/tb";
import { FaRegEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import AuthImagePattern from "../components/AuthImagePattern";

function page() {
    const [form , setForm ]= useState({password: '', email: ''})
     const {login,Authenticating} = useAuthPage()
     const [eye , setEye] = useState(false)

     const router = useRouter()
    const handleForm = (e)=>{
        setForm({...form, [e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(form)
        login(form, router)

    }


    
  return (
    <div className="bg-[#191E24] h-screen w-full grid md:grid-cols-2 grid-cols-1 gap-x-2 ">
      <div className="w-full h-screen flex justify-center items-center flex-col border-r-4 border-gray-600 opacity-50 backdrop:blur-xl inset-0">
        {/* //logo  */}
        <div className="text-blue-900 ">
          <CiChat1 className="size-10" />
        </div>
        <div className="font-bold text-xl">SZB CHAT </div>
        <div className="text-4xl font-semibold mt-6">Login Account</div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-7 w-full  justify-center items-center">
       
          {/* // emial  */}

          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
             onChange={handleForm}  name="email" type="email" placeholder="mail@site.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
          {/* // password  */}

          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type={eye? 'password': 'text'}
              required
               onChange={handleForm} 
              name="password"
              placeholder="Password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
            <div className="cursor-pointer" onClick={()=>{setEye(!eye)}}>
            {!eye?
            <TbEye className="size-5"/>: <FaRegEyeSlash className="size-5" />
          }
            </div>
          </label>
          <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />
            At least one number <br />
            At least one lowercase letter <br />
            At least one uppercase letter
          </p>

          <button type="submit" className="w-3/8 text- mt-4 bg-white py-2 flex justify-center items-center rounded-sm cursor-pointer text-black">
          {Authenticating ? <TbLoaderQuarter className="size-8 animate-spin"/> : 'SUBMIT'}
          </button>
          <span>
            Don't have Account ?{" "}
            <Link href="/signup" className="text-blue-500 underline">
              Create Account
            </Link>
          </span>
        </form>
      </div>

      <div className=" hidden md:flex w-full h-full bg-amber-600">
      <AuthImagePattern
        title="Join our community"
        subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
      />

      </div>
    </div>
  );
}

export default page;
