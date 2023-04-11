import React from 'react'
import { useCheckToken } from "../../components/auth/AuthProvider"
import Link from 'next/link';
import { useRouter } from 'next/router';

function login() {
    const [isLoggedIn,setLoggedIn]=useCheckToken();
const router=useRouter()
    const loginSet=async()=>{
        const res=await fetch('/api/login',{
          method:'POST'
        })
       res &&( 
        setLoggedIn(true),
        router.push('/')
        )
      }
  return (
    <div className= "bg-slate-900 h-screen flex flex-col justify-center p-10">
        
        <div className="bg-white text-4xl p-10">Login Page</div>
        <button onClick={loginSet} className="p-5 bg-black text-white mt-10">Login to procced</button>
    </div>
  )
}

export default login