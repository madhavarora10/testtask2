import { getCookieParser } from "next/dist/server/api-utils";
import React, { Children, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const CheckToken = React.createContext();
const verifyToken = React.createContext();

export const useCheckToken = () => {
  return useContext(CheckToken)
};
export const useverifyToken = () => {
  return useContext(verifyToken)
};


const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false)

  return (

    <CheckToken.Provider value={[isLoggedIn,setLoggedIn]} >
      {children}
    </CheckToken.Provider>

  )
}
export default AuthProvider

