
import { useRouter } from "next/router"
import { Children, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useAuth } from "./AuthProvider";

export function AuthGuard({ children }) {
  console.log('children',children)
  const {data}=useAuth();
  const router = useRouter();
  

  useEffect(() => {
    console.log('user',data);  
    if (!data) {
      router.push("/login")
      }else{
       var token = data
       var decoded = jwt_decode(token);
      }
    
  }, [])

 
  
 
  if (data) {
    return <>{children}</>
  }


  return null
}
