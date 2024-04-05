import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://swifty:12121212@cluster0.b7tmjo9.mongodb.net/swift-delivery').then(()=>console.log("DB Connected"))
}