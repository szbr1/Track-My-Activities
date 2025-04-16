"use client";
import React, { useEffect, useState } from "react";
import { IoLogoPaypal } from "react-icons/io5";
import { AiFillCreditCard } from "react-icons/ai";

function page() {
    const [payment , setpayment] = useState(null)
  const [ShippingAddress, setshippingAddresss] = useState({
    address: "",
    email: "user@example.com",
    firstName: "",
    LastName: "",
    City: "",
    Postal: "",
    Country: "",
    Phone: "",
  });
  useEffect(() => {
    console.log(ShippingAddress);
  }, [ShippingAddress]);

  const handleSubmit = (e)=> {
    e.preventDefault()
   setpayment('233')
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
      {/* segment 1  */}
      <div className="bg-white rounded-lg p-2 flex justify-center  flex-col">
        <h1 className="text-3xl uppercase">checkout</h1>
        <br />
        <h4 className="text-2xl font-bold w-full  ">Contact Details</h4>

        <form onSubmit={handleSubmit}>
          <label className="text-gray-600">Email</label>
          <br />
          <input
            type="text"
            value={ShippingAddress.email}
            disabled
            className="w-full p-1  mt-2 border border-gray-200 bg-gray-100 "
          />

          <h3 className="text 2xl py-2 font-bold">Delivery</h3>
          <div className="flex gap-5">
            <div>
              <label className="text-gray-600">First name</label>
              <br />
              <input
                type="text"
                value={ShippingAddress.firstName}
                onChange={(e) =>
                  setshippingAddresss({
                    ...ShippingAddress,
                    firstName: e.target.value,
                  })
                }
                className="border-gray-200 border"
              />
            </div>

            <div>
              <label className="text-gray-600 ">Last name</label>
              <br />
              <input
                type="text"
                value={ShippingAddress.LastName}
                onChange={(e) =>
                  setshippingAddresss({
                    ...ShippingAddress,
                    LastName: e.target.value,
                  })
                }
                className="border w-4/5 border-gray-200"
              />
            </div>
          </div>

          <label className="text-gray-600">Address</label>
          <br />
          <input
            value={ShippingAddress.address}
            onChange={(e) =>
              setshippingAddresss({
                ...ShippingAddress,
                address: e.target.value,
              })
            }
            type="text"
            className="w-full p-1  mt-2 border border-gray-200 focus:outline-none focus:border-gray-200"
          />

          <div className="flex gap-5 overflow-hidden">
            <div>
              <label className="text-gray-600">City</label>
              <br />
              <input
                type="text"
                value={ShippingAddress.Cityss}
                onChange={(e) =>
                  setshippingAddresss({
                    ...ShippingAddress,
                    City: e.target.value,
                  })
                }
                className="border-gray-200 border w-4/5" 
              />
            </div>

            <div>
              <label className="text-gray-600 ">Postal Code</label>
              <br />
              <input
                type="text"
                value={ShippingAddress.Postal}
                onChange={(e) =>
                  setshippingAddresss({
                    ...ShippingAddress,
                    Postal: e.target.value,
                  })
                }
                className="border w-4/5 border-gray-200"
              />
            </div>
          </div>

          <label className="text-gray-600">Country</label>
          <br />
          <input
            type="text"
            value={ShippingAddress.Country}
            onChange={(e) =>
              setshippingAddresss({
                ...ShippingAddress,
                Country: e.target.value,
              })
            }
            className="w-96 p-1  mt-2 border border-gray-200 focus:outline-none focus:border-gray-200"
          />

          <label className="text-gray-600">Phone</label>
          <br />
          <input
            type="tel"
            value={ShippingAddress.Phone}
            onChange={(e) =>
              setshippingAddresss({ ...ShippingAddress, Phone: e.target.value })
            }
            className="w-full cursor-pointer p-1  mt-2 border border-gray-200 focus:outline-none focus:border-gray-200"
          />
        {
            !payment ? (
                <button type="submit" className="bg-black text-white w-full py-2 flex justify-center items-center mt-4 rounded-md cursor-pointer">
            Continue to Payment
          </button>
            ) : <div>
                <button className="w-full cursor-pointer py-2 border mt-3 "> <IoLogoPaypal className="inline-block text-blue-900 text-2xl" /> PayPal</button>
                <button className="w-full cursor-pointer py-2 border mt-3 "> < AiFillCreditCard className="inline-block  text-2xl" /> Credit Card</button>
            </div> 
        }
          
        </form>
      </div>

      {/* segment 2  */}
      <div className="p-2  h-screen w-full flex  items-center">
        <div className="bg-green-50 w-full lg:ml-0 rounded-md h-4/5 p-2">
          <h2 className="text-2xl py-3 font-bold">Order Summary</h2>
          <hr className="text-gray-200 text-xl pb-3" />
          <div className="flex">
            <img
              src="https://picsum.photos/id/110/300/300"
              alt=""
              className="h-18 w-14"
            />
            <div className="ml-3">
              <div>Classic: </div>
              <div className="text-gray-600">S :</div>
              <div className="text-gray-600">Color : </div>
            </div>
            <div className="ml-36 font-bold">$39.99</div>
          </div>
          <hr className="text-gray-200 text-xl mt-2 pb-3" />
          <div className="flex justify-between   w-full">
            <div>Subtotal</div>
            <div>$39</div>
          </div>

          <div className="flex justify-between   w-full">
            <div>Shipping</div>
            <div>Free</div>
          </div>
          <hr className="text-gray-200 text-xl  mt-3 p-3" />
          <div className="flex justify-between   w-full">
            <div>Total</div>
            <div>$88</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
