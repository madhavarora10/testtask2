
import { useRouter } from "next/router"
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useAuth } from "./AuthProvider";

export function AuthGuard({ children }) {
  const {user}=useAuth();
  const router = useRouter();
  console.log('user',user);

  useEffect(() => {
    
    if (!user) {
      router.push("/login")
      }else{
       var token = user
       var decoded = jwt_decode(token);
      }
    
  }, [user])

 
  
 
  if (user) {
    return <>{children}</>
  }


  return null
}
