import { useState } from "react";
import { useAppManager } from "../store/useAppManager";


function CreateRoom() {
    const [RoomId , setRoomId] = useState({roomId: ""})
    const {roomUp,} = useAppManager();
   
     const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
       setRoomId({...RoomId, [e.target.name]:e.target.value})
     }

   
    
     
     const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
       e.preventDefault();
       console.log("This is the room id",RoomId)
   
       roomUp(RoomId)
     }

  return (
    <div className="min-h-screen w-full  flex justify-center items-center">
      <div className=" w-full m-3 p-3 md:w-[35vw] rounded-md border border-gray-200 shadow-md ">
        <p className="text-3xl text-center py-3  text-gray-400 font-bold ">
          Create New Room
        </p>

        <form onSubmit={handleSubmit} className="flex justify-center py-3">
          <input
            type="text"
            onChange={handleChange}
            name="roomId"
            placeholder="Create Your Secret Room Id."
            className="border outline-none focus:bg-gray-200 border-gray-300 rounded-l-md py-2 px-4 w-full md:w-1/2 "
          />
          <button type="submit" className="bg-black  text-white rounded-r-md px-8 cursor-pointer">
            create
          </button>
        </form>
        <p className=" text-center  w-full px-12 md:px-28 text-sm text-gray-400">
          Make sure this room id will be private and no one know about your
          private room id. if this room id will be leaked you then you have to
          create new room id{" "}
        </p>

        <h5 className="text-lg text-center py-8">
          {" "}
          You Have Exisiting Room id ?{" "}
          <a className="text-md text-blue-600 underline" href="/room">
            Join Exisiting Room
          </a>
        </h5>
      </div>
    </div>
  );
}

export default CreateRoom;
