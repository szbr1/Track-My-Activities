import { useEffect, useState } from "react";
import { useAppManager } from "../store/useAppManager";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function SignIn() {
  const [formData, setFormData] = useState({userId: "" });
  const navigate = useNavigate()
  const { signin ,signedIn} = useAppManager();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const SubmitForm = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    signin(formData);
    
  };

  console.log(signedIn)
   const [cookies] = useCookies(["token"])
       useEffect(()=>{
         if(cookies.token){
           navigate("/")
         }
       },[])

  return (
    <div className="min-h-screen w-full  flex justify-center items-center">
      <div className=" w-full m-3 p-3 md:w-[35vw] rounded-md border border-gray-200 shadow-md ">
        <p className="text-3xl text-center py-3  text-gray-400 font-bold ">
          Entry Point
        </p>

        <form onSubmit={SubmitForm} className="flex justify-center py-3">
          <input
            type="text"
            name="userId"
            onChange={handleChange}
            placeholder="Enter Your secret user id."
            className="border outline-none focus:bg-gray-200 border-gray-300 rounded-l-md py-2 px-4 w-full md:w-1/2 "
          />
          <button type="submit" className="bg-black  text-white rounded-r-md px-8 cursor-pointer">
            enter
          </button>
        </form>
        <p className=" text-center  w-full px-12 md:px-28 text-sm text-gray-400">
          Make sure this id is private and no one know about your private id. if
          this secret id will be leaked you then you have to create new id{" "}
        </p>

        <h5 className="text-lg text-center py-8">
          {" "}
          Create new Secret Id{" "}
          <a className="text-md text-blue-600 underline" href="/signup">
            Create Secret
          </a>
        </h5>
      </div>
    </div>
  );
}

export default SignIn;
