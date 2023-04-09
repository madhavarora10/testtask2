export default async function handler(req,res){
    const {cookies}=req;
    
    const jwt =cookies.token;
    if(!jwt){
        return res.json({message:'invalid token'})
    }
    console.log('ff',jwt)
    res.json({data:'done',jwt})
}