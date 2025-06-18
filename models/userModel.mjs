import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  age: {type: Number, min: 0},
  email: {
    type: String, required: true, unique: true, match: [/^\S+@\S+\.\S+$/, 'Невалідний email']
  }
});

export const UserModel = mongoose.model('User', userSchema);