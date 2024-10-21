import React from 'react'
import Header from './Header';
import { useState } from 'react';
const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div >
    
      <Header/>
      <div className='absolute'>
      <img   src='https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_large.jpg' alt='logo '/>

      </div>
      <form className=' w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-gray-300 bg-opacity-80'>
      <h1 className='font-bold text-3xl py-6'>{isSignInForm ? "Sign In":"Sign Up"}</h1>

      {!isSignInForm &&(
        <input type='text' placeholder=' Full Name' className='p-4 my-2 w-full bg-[rgb(232,240,254)] border-[1px] border-white rounded-md bg-opacity-10'/>
      )}
        <input type='text' placeholder='Email or mobile number' className='p-4 my-2 w-full bg-[rgb(232,240,254)] border-[1px] border-white rounded-md bg-opacity-10'/>
        
       
        <input type='password' placeholder='Password' className='p-4 my-2 w-full  bg-[rgb(232,240,254)]  border-[1px] border-white rounded-md bg-opacity-10'/>
        <button className='p-4 my-2 bg-red-600 w-full rounded-md'>{isSignInForm ? "Sign In":"Sign Up"}</button>
      <p className='p-6  cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now":"Already registered? Sign In Now..."}</p>
      </form>
    </div>
  )
}

export default Login;
