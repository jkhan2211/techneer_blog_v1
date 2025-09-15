import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/page";
import MainLayout from './layout/MainLayout';
import AdminLayout from './layout/AdminLayout';
import Login from "./pages/Login/page";
import Signup from "./pages/SignUp/page";
import Profile from './pages/Profile/page';
import AllBlogs from './pages/All_Blogs/page';


const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} >
        <Route index element={<Home />} />
         <Route path="/all-blogs" element={<AllBlogs />} />
        <Route path="/profile" element={<Profile />} />
        </Route>
            <Route element={<AdminLayout />} >
            <Route path="/login"  element={<Login />} />
            <Route path="/signup"  element={<Signup />} />
        </Route>
      </Routes>
    </Router>
      

  )
}

export default App