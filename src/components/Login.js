import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
//import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errormessage, setErrormessage] = useState(null);
  //const navigate = useNavigate();
  const dispatch=useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrormessage(message);
    
    if (message) return;

    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          // Update user profile
          updateProfile(user, {
            displayName: name.current.value,
          photoURL: USER_AVATAR
          }).then(() => {
            const {uid , email, displayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            
            //navigate("/browser");
          }).catch((error) => {
            setErrormessage(error.message);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(`${errorCode}: ${errorMessage}`);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(`${errorCode}: ${errorMessage}`);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={BG_URL} alt='background' />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-gray-300 bg-opacity-80'>
        <h1 className='font-bold text-3xl py-6'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && (
          <input ref={name} type='text' placeholder='Full Name' className='p-4 my-2 w-full bg-[rgb(232,240,254)] border-[1px] border-white rounded-md bg-opacity-10' />
        )}

        <input ref={email} type='text' placeholder='Email or mobile number' className='p-4 my-2 w-full bg-[rgb(232,240,254)] border-[1px] border-white rounded-md bg-opacity-10' />
        <input ref={password} type='password' placeholder='Password' className='p-4 my-2 w-full bg-[rgb(232,240,254)] border-[1px] border-white rounded-md bg-opacity-10' />

        <p className='text-red-500 font-bold text-lg py-2'>{errormessage}</p>

        <button className='p-4 my-2 bg-red-600 w-full rounded-md' onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className='p-6 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign up now" : "Already registered? Sign In Now..."}
        </p>
      </form>
    </div>
  );
};

export default Login;
