import axios from "axios";


export const login = async (data)=>{
    const res = await  axios.post('http://localhost:8000/api/login',data,{
        withCredentials: true
    })
    console.log('signup data', data)
}

export const signup = async (data)=>{
    const type = await axios.post('http://localhost:8000/api/register', data,{
        withCredentials: true
    })
    console.log(type.data)
}