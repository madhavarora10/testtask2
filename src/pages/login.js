import React,{useState,useEffect}from 'react'
import { useRouter } from 'next/router';
import { useAuth } from "../../components/auth/AuthProvider"


function login() {
    const { auth, initializing, getRedirect, clearRedirect, user, error } =
    useAuth()
  const [signInInProgress, setInProgress] = useState(false)

  const router = useRouter()



  useEffect(() => {
    if (!initializing) {
      if (user) {
        const redirect = getRedirect()
        console.log("redirect: ", redirect)
        if (redirect !== null) {
          router.push('/login') 
          clearRedirect()
        } else {
          router.back()
        }
      }
    }
  }, [router, getRedirect, clearRedirect, initializing, user])

    const loginSet=async()=>{
        try {
            setInProgress(true)
            await auth.signIn(2000)
          } catch (error) {
           console.log(error)
          }
        }
      
      
  return (
    <div className= "bg-slate-900 h-screen flex flex-col justify-center p-10">
        
        <div className="bg-white text-4xl p-10">Login Page</div>
        <button onClick={loginSet} className="p-5 bg-black text-white mt-10">Login to procced</button>
    </div>
  )
}

export default login