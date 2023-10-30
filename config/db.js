import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.Mongo_URL)
        console.log(`Connected ${conn.connection.host}`);
    }
    catch (error) {
        console.log(`error in mongodb ${error}`)
    }
}

export default connectDB;
