import mongoose, { Aggregate } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    
});
userSchema.pre("save", async function (next) {
    const user = this
    if (!user.isModified("password")) {
        next();
    }
    user.password = await bcrypt.hash(user.password, 10);
});
userSchema.methods.generateJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.SECRET_KEY, { expiresIn: '5d' });
}
export const userModel = mongoose.model('users', userSchema);