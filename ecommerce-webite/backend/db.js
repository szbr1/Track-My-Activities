import mongoose from "mongoose";

const connectionDB = async ()=>{
      try {
         await mongoose.connect(process.env.MONGO_URI)
         console.log('✅ Connection Succesfull with Mongodb')
      } catch (error) {
         console.log('❌ Connection Failed', error)
         process.exit(1)
      }
}

export default connectionDB;