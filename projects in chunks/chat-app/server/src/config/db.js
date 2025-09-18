import mongoose from "mongoose"

export const connectDB = async()=>{
  try {
    const db = await mongoose.connect(process.env.MONGO_URI)
    console.log(db.connection.host)
    console.log("✅ Connection Successfully Created.")
} catch (error) {
    console.error(error)
    console.log("❌ Connection Failed.")
    process.exit(1)
  }
}