import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [Inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "" 
  });

  const change= (e) => {
    const {name, value} = e.target;
    setInputs({
      ...Inputs,
      [name]: value
    })
  }

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className="p-12 shadow-2xl rounded w-[80%] md:w-[60%] lg:w-[40%] flex flex-col items-center justify-center">
        <div className="text-2xl flex flex-col lg:flex-row gap-2 text-center">
        <h1 className="font-bold"> Welcome ! </h1> 
        <span>
          Join as a new user
        </span>
        </div>
        <form action="" className="flex flex-col w-[100%] mt-8">
          <div className="flex flex-col mb-4">
            <label>Username</label>
            <input 
            type="text"   
            value={Inputs.username}
            name="username" 
            className="mt-2 outline-none border px-3 py-2 rounded border-zinc-400"
            onChange={change}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>Email</label>
            <input 
            type="text" 
            value={Inputs.email}
            name="email" 
            className="mt-2 outline-none border px-3 py-2 rounded border-zinc-400" 
            onChange={change} 
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>Password</label>
            <input 
              type={Inputs.password}
              value="" 
              name="password" 
              className="mt-2 outline-none border px-3 py-2 rounded border-zinc-400"
              onChange={change}
            />
            </div>
            <div className="flex mt-4">
              <button className="bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white px-4 py-2 rounded w-[40%]">
                Continue
              </button>
            </div>
        </form>
        <h4 className='mt-8'>
          Already have an account? <Link to="/login" className="text-blue-600 hover:text-blue-700 hover:font-semibold">Login</Link>
        </h4>
      </div>
    </div>
  )
}

export default SignUp