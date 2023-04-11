import React from 'react'
import Link from 'next/link'
function Error() {
  return (
    <div className=" bg-slate-700 h-screen  flex flex-col justify-center items-center">
       <div className="bg-white text-center p-24  ">
       <h1 className="text-4xl" >You are not logged in</h1>
        <Link href='/'>
        <button className="mt-5 bg-black text-white p-5" >Homepage</button>
        </Link>
       </div>
    </div>
  )
}

export default Error