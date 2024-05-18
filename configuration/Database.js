import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb://localhost/Online-Tiffin-Services')
        .then(() => {
            console.log("DB connected");
        }).catch((error) => {
            console.log(error);
    });
}

// Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log('MongoDB connected');
// }).catch(err => {
//     console.error('MongoDB connection error:', err);
// });