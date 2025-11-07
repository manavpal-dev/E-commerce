import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        mongoose.connection.on("connected", ()=>
        console.log("Database Connected"))

        await mongoose.connect(`${process.env.MONGO_URI}/E-com`);
    } catch(error){
        console.log(error.message, {message:"Database is not connected!!"})
    }
}
export default connectDB;