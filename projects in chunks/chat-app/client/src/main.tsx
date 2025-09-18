import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.tsx";
import SignIn from "./pages/signin.tsx";
import SignUp from "./pages/signup.tsx";
import Room from "./pages/room.tsx";
import CreateRoom from "./pages/create-room.tsx";
import { Toaster } from "react-hot-toast";
import Chat from "./dynamic-pages/chat.tsx";
import { CookiesProvider } from "react-cookie";
import ProtectedRoute from "../config/ProtectedRoute.tsx"

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <CookiesProvider defaultSetOptions={{path: "/"}}>

      <Toaster position="top-center" reverseOrder={false} />
    <Routes>
      
        <Route element={<ProtectedRoute> <Home /> </ProtectedRoute>} path="/Home" /> 
      
      <Route element={<SignIn />} path="/signin" />
      <Route element={<SignUp />} path="/signup" />
      <Route element={<ProtectedRoute><Room /></ProtectedRoute>} path="/room" />
      <Route element={<ProtectedRoute><Chat /></ProtectedRoute>} path="/chat/:id" />
      <Route element={<CreateRoom />} path="/create-room" />
      <Route path="/" element={<ProtectedRoute><App /></ProtectedRoute>} />
    </Routes>
  </CookiesProvider>
  </BrowserRouter>
);
