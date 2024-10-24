import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://kumarsanjeet966173:0QloShGzUBJD2MO@cluster0.tfxdw.mongodb.net/jobportal');
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;