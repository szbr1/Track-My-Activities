 import jwt from 'jsonwebtoken'

 const jsonGenerate = (id, res)=>{
     try {
        const token = jwt.sign({userId: id} ,process.env.TOKEN, {expiresIn: "7d"})
       
            res.cookie('token', token, {
                maxAge: 7 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                secure: true,
                sameSite: "strict"
            }) 
    } catch (error) {
        return res.status(500).json('Entery fail')
    }
 }

 export default jsonGenerate;