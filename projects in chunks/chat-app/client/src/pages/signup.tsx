import { useState, type FormEvent } from "react";
import { useAppManager } from "../store/useAppManager";
import { useNavigate } from "react-router-dom";

function SignUp() {

    const [formData , setFormData] = useState({username: "", userId: ""})
    const {signup, signedIn} = useAppManager()
    const navigate = useNavigate()
     const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
          setFormData({...formData, [e.target.name]: e.target.value})
     }

     const SubmitForm = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(formData)
        signup(formData)
     }
    if(signedIn){
      navigate("/room")
      return;
    }
  return (
    <div className="min-h-screen w-full  flex justify-center items-center">
      <div className=" lg:w-[35vw] w-full rounded-md border border-gray-200 shadow-md mx-3 p-3 ">
        <p className="text-3xl text-center py-3  text-gray-400 font-bold ">
          Entry Point
        </p>

        <form onSubmit={SubmitForm} className="flex justify-center py-3 gap-3 items-center flex-col">
          <input
            type="text"
            name="userId"
            onChange={handleChange}
            placeholder="Create Secret Id."
            className="border outline-none focus:bg-gray-200 border-gray-300 rounded-l-md py-2 px-4 w-full  md:w-1/2 "
          />
          <input
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="This Name will Visible to all"
            className="border outline-none focus:bg-gray-200 border-gray-300 rounded-l-md py-2 px-4 w-full  md:w-1/2 "
          />
          <button type="submit" className="bg-black py-2 w-full  md:w-1/2 text-white rounded-md px-8 cursor-pointer">
            Create
          </button>
        </form>
        <p className=" text-center  w-full md:px-28 px-12 text-sm text-gray-400">
          Make sure this id is private and no one know about your private id. if
          this secret id will be leaked you then you have to create new id{" "}
        </p>

        <h5 className="text-lg text-center py-8">
          {" "}
          Already have secret key ?{" "}
          <a className="text-md text-blue-600 underline" href="/signin">
            Login with Secret
          </a>
        </h5>
      </div>
    </div>
  );
}

export default SignUp;
