import React from 'react'

function Scroller() {
    const products = [
        {
            id: 1,
            url: "https://picsum.photos/400/?=17",
            title: "Jackets"
        },
        {
            id: 2,
            url: "https://picsum.photos/200/?=18",
            title: "Jackets"
        },
        {
            id: 3,
            url: "https://picsum.photos/200/?=10",
            title: "Jackets"
        }
        ,   {
            id: 4,
            url: "https://picsum.photos/200?=2",
            title: "Jackets"
        }
        ,   {
            id: 5,
            url: "https://picsum.photos/400/?=1",
            title: "Jackets"
        },   {
            id: 6,
            url: "https://picsum.photos/400/?=3",
            title: "Jackets"
        }
        ,   {
            id: 7,
            url: "https://picsum.photos/400/?=8",
            title: "Jackets"
        }
    ]
  return (
    <div className='container mx-auto overflow-x-scroll h-64-900 gap-3 mt-14 flex '>
    {
      products.map(product => {
        return(
            <div className='h-full w-full mx-2 rounded-md md:w-1/2 lg:w-64 flex-shrink-0 overflow-hidden' key={product.id}>

            <img src={product.url} className='object-cover h-full w-full' alt="" />
            </div>
        )
      })
    }
        
    </div>
  )
}

export default Scroller