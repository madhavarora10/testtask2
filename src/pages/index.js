
import axios from "axios"
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react"


export default function Home() {
  
  const router=useRouter();

 
const logout=async()=>{
  const user =await axios.post('/api/logout');
 
}
const getUser=async()=>{
  const user =await axios.get('/api/user');
  console.log(user.data.jwt)
}


 return (
<div className=' bg-slate-900 h-screen flex flex-col justify-center p-10  '>


<Link href='/login'>
<button className="p-5 w-full bg-white text-black mt-10">Login page</button></Link>

<button onClick={getUser}  className="p-5 bg-white text-black mt-5">check user</button>
<button onClick={logout}  className="p-5 bg-white text-black mt-5">Logout</button>
<div className=" text-center p-5 bg-white text-black mt-5">
<Link href='/dashboard'>
<button className="w-full" >Dashboard</button></Link>
</div>
</div>
 )
}
