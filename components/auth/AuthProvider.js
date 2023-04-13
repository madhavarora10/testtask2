import { getCookieParser } from "next/dist/server/api-utils";
import React, { Children, useContext, useEffect, useState } from "react";
import { Auth,User } from "./auth";


const auth = new Auth() 

export const AuthContext = React.createContext();

//const verifyToken = React.createContext();
const key='signInKey'
function setRedirect(redirect){
  window.sessionStorage.setItem(key,redirect)
}
function getRedirect(){
  window.sessionStorage.getItem(key)
}
function clearRedirect(redirect){
  window.sessionStorage.removeItem(key)
}


export function useAuth() {
  const auth = React.useContext(AuthContext)
  return auth
}


const AuthProvider = ({ children }) => {
  const [initialize,setInitializing] = useState(true)
  const [user,setUser] = useState(User)
useEffect(()=>{
  auth.resolveUser(2000).onAuthStateChanged((User) => {
    if (User) {
      setUser(user)
      
    } else {
      setUser(null)
     
    }
    setInitializing(false)
  })
}, [])


const value = {
  auth: Auth,
  user,
  initialize,
  setRedirect,
  getRedirect,
  clearRedirect,
}
  return (

    <AuthContext.Provider value={value} >
      {children}
    </AuthContext.Provider>

  )
}
export default AuthProvider

