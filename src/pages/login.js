import React,{useState,useEffect}from 'react'

import axios from 'axios';
import {useRouter } from 'next/router';

function login() {
  const router=useRouter();



  const loginSet=async()=>{
    const user =await axios.post('/api/login');
    // console.log('from loginpage',user)
    router.push('/')
   
  }
  return (
    <div className= "bg-slate-900 h-screen flex flex-col justify-center p-10">
        
        <div className="bg-white text-4xl p-10">Login Page</div>
        <button onClick={loginSet} className="p-5 bg-black text-white mt-10">Login to procced</button>
    </div>
  )
}

export default login