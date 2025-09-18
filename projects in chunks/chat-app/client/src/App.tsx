import { useNavigate } from "react-router-dom"

function App() {
 
  const navigate = useNavigate()
  const Users = [
    {
      _id: 123,
      username: "Shahzaib",
    },
    {
      _id: 1263,
      username: "Usman Abid",
    },
    {
      _id: 1423,
      username: "Hamza",
    }
    ,
    {
      _id: 1233,
      username: "Umair",
    }
  ]


  return (
    <>
    <div className="p-3">
        <h3 className="text-3xl font-bold text-gray-500 text-center">
          Room
        </h3>
        <p className="text-center text-xs text-gray-400">20984reioslodjf</p>

        <hr  className=" my-4 text-gray-200"/>

        <div className="flex flex-col justify-center items-start gap-2">

          {Users.map(user => {
            return (
              <div onClick={()=> navigate(`/chat/${user._id}`)} className=" flex flex-row w-full border-t  pt-3 border-gray-200  items-center ">
                 <div 
                    className="size-12 flex justify-center items-center border border-gray-200 rounded-full"> 
                      {user.username.charAt(0)}
                 </div>

                 <h5 className="px-3 text-sm text-gray-600">{user.username}</h5>

                 <div className="flex-1 w-full h-10    flex justify-end items-end text-xs text-gray-300 "> 12 </div>
              </div>
            )
          })}
          
        </div>
    </div>
    </>
  )
}

export default App
