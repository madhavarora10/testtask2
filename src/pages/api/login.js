// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { serialize } from 'cookie';
import jwt from 'jsonwebtoken'
const KEY='ababaffffffffffbba'
const signToken=user=>{
 return jwt.sign({user},KEY
)};
 
export default function handler(req, res) {
  
  const token=signToken('madhav')
 
  res.setHeader('Set-Cookie',serialize('token',token,{
    httpOnly:true,
    path:"/"
  }))
  
    res.status(201).json({
      status:'success',
      data:'done'
    })
}
  