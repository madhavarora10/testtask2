// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { serialize } from 'cookie';
import jwt from 'jsonwebtoken'
const KEY='ababaffffffffffbba'
const signToken=user=>{
 return jwt.sign({user},KEY
)};
 
export default function handler(req, res) {
  
  const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZXhwaXJ5IjoxNjg5MTc4MjY3NjQzfQ.s_98aY9QvUd0TdNAJLv-wj7mDAK2a7Y9qsJfkr4Ac0o'
 
  res.setHeader('Set-Cookie',serialize('token',token,{
    
    path:"/"
  }))
  
    res.status(201).json({
      status:'success',
      data:'done'
    })
}
  