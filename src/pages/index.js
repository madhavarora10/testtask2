import axios from "axios"
import { useState } from "react"


export default function Home() {
  const [data,setdata]=useState()
 const login=async()=>{
  const res=await fetch('/api/login',{
    method:'POST'
  }).then(()=>console.log('done'))
}
 const user=async()=>{
  const user =await axios.get('/api/user');
  console.log(user)
  setdata(user)
  // const res=await fetch('/api/user',{
  //   method:'GET'
  // }).then((t)=>console.log('done user',))
  // console.log(res.json())
}
const logout=async()=>{
  const user =await axios.post('/api/logout');
  console.log(user)

 
}

 return (
<div className=' bg-slate-900 h-screen flex flex-col justify-center p-10  '>
<button onClick={login}  className="p-5 bg-white text-black ">Login to procced</button>
<button onClick={user}  className="p-5 bg-white text-black mt-5">check user</button>
<button onClick={logout}  className="p-5 bg-white text-black mt-5">Logout</button>
{data?.data.message==="invalid token" &&
<div  className="text-white">you are not logged in</div>
}
</div>
  )
}
