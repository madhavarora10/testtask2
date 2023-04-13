
import React, { Children, useContext, useEffect, useState } from "react";
import axios from "axios";
const AuthContext=React.createContext()


export function useAuth() {
  const auth = React.useContext(AuthContext);
  console.log("from useAuth",auth);
  return auth
}


const AuthProvider = ({ children }) => {
  const [initialize,setInitializing] = useState(true)
  const [user,setUser] = useState()
// const getUser = useCallback(
//   async()=>{
//     console.log('called')
//     const res =await axios.get('/api/user');
//     setUser(res);
    
//   },[user]
// );

// useEffect(() => {
//   getUser()
 
// }, [user])


const [data, setData] = useState(null);

const fetchData = async () => {
  try {
    const response = await axios.get('/api/user');
    setData(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

useEffect(() => {
  fetchData();
}, []); // Empty dependency array to run the effect only once

const value = {
 
  data,
  initialize,
 
}
  return (

    <AuthContext.Provider value={value} >
      {children}
    </AuthContext.Provider>

  )
}
export default AuthProvider

