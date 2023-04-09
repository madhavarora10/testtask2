import { serialize } from "cookie";
export default async function(req,res){
    const {cookies}=req;
    const jwt =cookies.token;
    if(!jwt){
        return res.json({message:'you are already logged out'})
    }
    else{
        res.setHeader('Set-Cookie',serialize('token',null,{
            httpOnly:true,
            maxAge:-1,
            path:"/"
          }))
    }
    res.status(201).json({
        status:'Logout'
      })
}