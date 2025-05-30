"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Email, InputWithLabel } from "../components/ui/email";
import Password from "../components/ui/passwond";
import Username from "../components/ui/Username";
import Link from "next/link";

function page() {
    // states declared 
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [usernname, setUsername] = useState("");

//   functions declared 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 5) {
      toast.error("Password Should be 6 atleast");
    }
    if (usernname.length < 3 || usernname.length > 8) {
      toast.error("Incorrect type of Name");
    }
    if (!/^[^@]+@[^@]+\.(com)$/.test(email)) {
      toast.error("please use right form at of email");
    }
    if ((password && email && usernname)) {
      toast.success("Loading...");
    }
  };

  return (
    <div className="h-screen w-full flex just ">
      {/* login sement  */}
      <div className="h-full w-full  flex justify-center items-center p-3
      ">
        <div className="w-full md:w-3/5   h-3/6 flex justify-center items-center flex-col  rounded-2xl border-2 p-2 border-gray-200 ">
          <h1 className="text-4xl text-center uppercase mt-3 font-bold text-black mb-3  ">
            SignUp
          </h1>
          <form onSubmit={handleSubmit} className="gap-3 flex flex-col">
            {/* username  */}
            <Username username={usernname} setUsername={setUsername} />
            {/* email  */}
            <Email email={email} setemail={setemail} />
            {/* password  */}
            <Password password={password} setPassword={setPassword} />

            {/* heading  */}
            <h1 className="text-center text-black">
                Already have account? <Link href={'/Login'} className="text-blue-600 underline">Login</Link>
            </h1>
            {/* submit button  */}
            <button
            type="submit"
              className=" cursor-pointer px-3 w-full  py-2 bg-black text-white rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* image segment  */}
      <div className="hidden lg:block h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1742790159516-bdb38cf17481?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
}

export default page;
