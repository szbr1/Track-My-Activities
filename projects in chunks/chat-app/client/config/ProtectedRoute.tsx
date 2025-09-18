import React from 'react'
import { Navigate } from 'react-router-dom';
import { useCookies} from "react-cookie"

function ProtectedRoute({children}: {children: React.ReactNode}) {

const [cookies] = useCookies(["token"])
  
  if(!cookies.token){
   
    return  <Navigate to={"/signin"} replace /> ;
  }

  return children
}

export default ProtectedRoute