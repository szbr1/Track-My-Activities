import mongoose from 'mongoose'

const connectionDB = async ()=>{
    try {
     const db =   await mongoose.connect(process.env.MONGODB_URI)
     console.log('✅ Database Connection Successfull :',db.connection.host)

    } catch (error) {
        console.log("❌ Connection failed with database")
        process.exit(1)
    }
}

export default connectionDB;