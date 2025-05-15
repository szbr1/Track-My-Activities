//jwt
//verify
//decode
import jwt from 'jsonwebtoken'

const middleware = (req,res,next)=>{
    const header = req.headers.authorization
    if(!header){
        return res.status(400).json('No headers found')
    }
    const token = req.headers.authorization.split(' ')[1]
    if(!token){
        return res.status(401).json('no token found')
    }
    jwt.verify(token,process.env.TOKEN, (err,decode)=>{
        if(err){
            return res.status(401).json({error:err})
        }
        req.userId = decode.userId;
        next()
    })

}
export default middleware