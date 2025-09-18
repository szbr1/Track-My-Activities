
function Room() {
    return (
      <div className="min-h-screen w-full  flex justify-center items-center">
  
          <div className=" w-full m-3 p-3 md:w-[35vw] rounded-md border border-gray-200 shadow-md ">
              <p className="text-3xl text-center py-3  text-gray-400 font-bold ">Join Room</p>
   
              <form className="flex justify-center py-3">
                  <input type="text" placeholder="Enter Your Room Secret Id."  className="border outline-none focus:bg-gray-200 border-gray-300 rounded-l-md py-2 px-4 w-full md:w-1/2 " />
                  <button className="bg-black  text-white rounded-r-md px-8 cursor-pointer">join</button>
              </form>
              <p className=" text-center  w-full px-12 md:px-28 text-sm text-gray-400">Make sure this room id will be private  and no one know about your private room id. if this room id will be leaked you then you have to create new room id </p>
  
  
              <h5 className="text-lg text-center py-8"> Create new Room Id <a className="text-md text-blue-600 underline" href="/create-room">Create new Room</a></h5>
          </div>
  
        
      </div>
    )
  }
  
  export default Room