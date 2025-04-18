"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import AdminNavbar from "@/app/components/Common/AdminNavbar";
import AdminSidebar from "@/app/components/Common/AdminSidebar";

function page() {
  const [togglesidebar, settoggleSidebar] = useState(false);
  const Users = [
    {
      _id: 1233,
      Price: 233,
      name: "Shirt",
    },
    {
        _id: 1233,
        Price: 233,
        name: "Shirt",
      },
      {
        _id: 1233,
        Price: 233,
        name: "Shirt",
      },
      {
        _id: 1233,
        Price: 233,
        name: "Shirt",
      },
      {
        _id: 1233,
        Price: 233,
        name: "Shirt",
      },
      {
        _id: 1233,
        Price: 233,
        name: "Shirt",
      },
      {
        _id: 1233,
        Price: 233,
        name: "Shirt",
      },
      {
        _id: 1233,
        Price: 233,
        name: "Shirt",
      },
      {
        _id: 1233,
        Price: 233,
        name: "Shirt",
      },
      {
        _id: 1233,
        Price: 233,
        name: "Shirt",
      },
      {
        _id: 1233,
        Price: 233,
        name: "Shirt",
      },

  ];

  return (
    <div className="  w-full md:flex">
      {/* navbar  */}
      <AdminNavbar
        togglesidebar={togglesidebar}
        settoggleSidebar={settoggleSidebar}
      />
      {/* sidebar  */}
      <AdminSidebar
        togglesidebar={togglesidebar}
        settoggleSidebar={settoggleSidebar}
      />

      <div className=" lg:p-10  w-full">
        <div className="lg:text-2xl text-xl font-bold py-7 ">Product Management</div>
        <div className="overflow-x-auto p-2 ">
          <table className="w-[37rem] md:w-full text-left ">
            <thead className="mb-6 ">
              <tr className="bg-gray-200 uppercase text-xs">
                <th className=" px-4 py-2"> name </th>
                <th className=" px-4 py-2">price</th>
                <th className=" px-4 py-2">sku</th>
                <th className=" px-4 py-2">actions</th>
              </tr>
            </thead>
            <tbody >
                { Users.map(user =>{ 
                    return (
                        <tr className="border-b text-xs border-gray-200 hover:bg-green-200">
                            <td className="px-4 py-2">{user.name}</td>
                            <td className="px-4 py-2">{user.Price}</td>
                            <td className="px-4 py-2">{user._id}</td>
                            <td className="px-4 py-2">
                                <Link className="flex gap-2 -ml-10" href={`/admin/products/${user._id}/edit`}>
                                <button className="w-16 h-7 cursor-pointer bg-amber-500 text-blue-800 rounded-md">Edit</button>
                                <button className="w-16 h-7 cursor-pointer bg-red-600 text-blue-800 rounded-md">Delte</button>
                                </Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default page;
