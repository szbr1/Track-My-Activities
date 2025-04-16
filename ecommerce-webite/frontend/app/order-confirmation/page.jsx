import React from "react";

function page() {
  const myOrder = [
    {
      _id: "123455",
      createdAt: new Date(),
      shippingAddress: { city: "New York", country: "USA" },
      ordersItems: [
        {
          name: "Classic Oxford Button - Down Shirt",
          color: "red",
          size: "S",
          image: "https://picsum.photos/500/500?random=99",
        },
      ],
      totalPrice: 100,
      isPaid: true,
    },

    //   {
    //     _id: "12345",
    //     createdAt: new Date(),
    //     shippingAddress: { city: "New York", country: "USA" },
    //     ordersItems: [
    //       {
    //         name: "Product 1",
    //         image: "https://picsum.photos/500/500?random=1",
    //       },
    //     ],
    //     totalPrice: 100,
    //     isPaid: true,
    //   },
    //   {
    //     _id: "12346",
    //     createdAt: new Date(),
    //     shippingAddress: { city: "Los Angeles", country: "USA" },
    //     ordersItems: [
    //       {
    //         name: "Product 2",
    //         image: "https://picsum.photos/500/500?random=2",
    //       },
    //     ],
    //     totalPrice: 150,
    //     isPaid: false,
    //   },
  ];
  return (
    <div className="flex justify-center  h-screen w-full">
      <div className="p-3 ">
        <div className="text-center font-bold text-3xl py-12 text-green-600">
          Thank You for Order !
        </div>

        <div className="border lg:w-[42rem] w-full border-gray-200 rounded-md p-3">
          <div className="flex justify-between">
            <h1 className="font-bold text-xl ">
              Order ID: {(Math.random() * 3).toString().split(".")}
            </h1>

            <h1 className="text-blue-700 ">Estimated Delivery: 30/12/2025</h1>
          </div>
          <div className="mt-1 mb-8 text-gray-600">Order Date: 13/12/2025</div>
          {myOrder.map((item) => {
            return (
              <div key={item._id} className="grid grid-cols-1 lg:grid-cols-2 w-full 
              ">
                <div className="flex gap-3">

                <img
                  src={item.ordersItems[0].image}
                  alt=""
                  className="h-16 w-16 rounded-md"
                  />
                <div>
                  <div className="font-bold">{item.ordersItems[0].name} </div>
                  <div className="text-gray-500">
                    {item.ordersItems[0].size} | {item.ordersItems[0].color}
                  </div>
                  </div>

                 
                </div>
                <div>
                    <span className="font-bold"> SAR {item.totalPrice}
                    </span>
                      <br />
                    <span className="text-gray-500"> Qty: {myOrder.length} </span> </div>
              </div>
            );
          })}
          <div className="mt-20 flex gap-44 ">
            <div><span className="font-bold">Payment</span> <br /> <span className="text-gray-500">Paypal</span></div>

            <div><span className="font-bold">Delivery</span> <br /> <span className="text-gray-500">test</span> <br /> <span className="text-gray-500">test,test</span></div>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
