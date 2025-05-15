import jwt from 'jsonwebtoken'

const jsonToken = (id,req)=>{
    
    const token = jwt.sign({userId: id}, process.env.TOKEN, {expiresIn: '7d'})
    req.token = token
    console.log(token)
}


export default jsonToken