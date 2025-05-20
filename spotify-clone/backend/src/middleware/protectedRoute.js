
export const protectedRoute = (req,res,next)=>{
    try {
    if(!req.auth.userId){
        return res.status(400).json('Login requried')
    } 
    next()
    } catch (error) {
    return     res.status(500).json('server error authenctication')
    }
}


