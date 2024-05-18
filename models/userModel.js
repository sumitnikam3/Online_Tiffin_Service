import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    cartData: {
        type: Object,
        default: {}
    }

},{minimize:false})

export const userModel = mongoose.models.user || mongoose.model("user",userSchema);
