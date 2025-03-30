'use client'
import React, { useEffect, useState } from 'react'

function MyOrders() {
    const [Orders, setOrders] = useState('');
    useEffect(()=>{
        //Simulate fetching orders
        setTimeout(()=>{
            const mockOrders = [
                {
                    _id: '12345',
                    creatdAt: new Date(),
                    shippingAddress: {city: "New York", country: "USA"},
                    ordersItems: [
                        {
                            name: "Product 1",
                            image: "https://picsum.photos/500/500?random=88",
                        },
                    ],
                    totalPrice: 100,
                    isPaid: true
                },

                    {
                        _id: '12345',
                        createdAt: new Date(),
                        shippingAddress: { city: "New York", country: "USA" },
                        ordersItems: [
                            {
                                name: "Product 1",
                                image: "https://picsum.photos/500/500?random=1",
                            },
                        ],
                        totalPrice: 100,
                        isPaid: true
                    },
                    {
                        _id: '12346',
                        createdAt: new Date(),
                        shippingAddress: { city: "Los Angeles", country: "USA" },
                        ordersItems: [
                            {
                                name: "Product 2",
                                image: "https://picsum.photos/500/500?random=2",
                            },
                        ],
                        totalPrice: 150,
                        isPaid: false
                    },
                    {
                        _id: '12347',
                        createdAt: new Date(),
                        shippingAddress: { city: "London", country: "UK" },
                        ordersItems: [
                            {
                                name: "Product 3",
                                image: "https://picsum.photos/500/500?random=3",
                            },
                        ],
                        totalPrice: 200,
                        isPaid: true
                    },
                    {
                        _id: '12348',
                        createdAt: new Date(),
                        shippingAddress: { city: "Berlin", country: "Germany" },
                        ordersItems: [
                            {
                                name: "Product 4",
                                image: "https://picsum.photos/500/500?random=4",
                            },
                        ],
                        totalPrice: 250,
                        isPaid: false
                    },
                    {
                        _id: '12349',
                        createdAt: new Date(),
                        shippingAddress: { city: "Sydney", country: "Australia" },
                        ordersItems: [
                            {
                                name: "Product 5",
                                image: "https://picsum.photos/500/500?random=5",
                            },
                        ],
                        totalPrice: 300,
                        isPaid: true
                    },
                    {
                        _id: '12350',
                        createdAt: new Date(),
                        shippingAddress: { city: "Toronto", country: "Canada" },
                        ordersItems: [
                            {
                                name: "Product 6",
                                image: "https://picsum.photos/500/500?random=6",
                            },
                        ],
                        totalPrice: 120,
                        isPaid: false
                    }
                ];
        setOrders(mockOrders)
                
                
                
        },1000)
    }, [])
  return (
    <div>
        <div className='max-w-7xl mx-auto p-4 sm:p-6'>
            <h2 className='text-xl sm:text-2xl font-bold mb-6'>
            <div className='relative shadow-md sm:rounded-lg overflow-hidden'>
                <table>

                <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
                    <tr>
                        <th className='py-2 px-4 sm:py-3'>Image</th>
                        <th className='py-2 px-4 sm:py-3'>Order ID</th>
                        <th className='py-2 px-4 sm:py-3'>Created</th>
                        <th className='py-2 px-4 sm:py-3'>Shipping Address</th>
                        <th className='py-2 px-4 sm:py-3'>Items</th>
                        <th className='py-2 px-4 sm:py-3'>Price</th>
                        <th className='py-2 px-4 sm:py-3'>Staus</th>
                    </tr>
                </thead>
                 {Orders.length > 0 ? (
                    Orders.map((order)=> (
                            <tr key={order._id} className='border-b hover:border-gray-50 cursor-pointer'>
                            <td className='py-2 px-2 sm:py-4 sm:px-4'>
                            <img src={order.ordersItems[0].image}
                            className='w-10 h-10 sm:w-12 object-cover rounded-lg'
                             alt="" />
                            </td>

                            <td className='py-2 px-2 sm:py-4 sm:px-4'>
                            {new Date(order.createdAt).toLocaleDateString()} {""}
                            {new Date(order.createdAt).toLocaleTimeString()}
                            </td>
                     <td  className='py-2 px-2 sm:py-4 sm:px-4' >
                    {order.shippingAddress.city}, {order.shippingAddress.countrys}
                     </td>
                            
                        </tr>
                    ))
                 ): ""}
                </table>
            </div>
            </h2>
             </div>
    </div>
  )
}

export default MyOrders