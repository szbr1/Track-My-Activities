import mongoose from "mongoose";


const monogoDB = async ()=>{
    try {
     await mongoose.connect(process.env.MONGO_URI)
     console.log('✅ Successfully connected with mongodb')
    } catch (error) {
     console.log('❌ Failed to connect with db', {error: error})
    }

    
} 

export default  monogoDB