import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI
if(!MONGODB_URI) throw new Error("Please define MONGODB_URI");

let cached = global.mongoose
if(!cached) cached = global.mongoose = {conn: null, promise: null}

async function connectMongoDB() {
    if(cached.conn) return cached.conn

    if(!cached.promise){
        cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) =>mongoose)
    }
    cached.conn = await cached.promise
    console.log('Connected to MongoDB')
    return cached.conn
}
/*
const connectMongoDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log(error)
    }
}
    */

export default connectMongoDB