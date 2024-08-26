import mongoose from "mongoose"
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: [true, 'password is required'],
    }
  }, {timestamps: true}
  )

export const User = mongoose.model("User", userSchema)
// from here "User from right hand side is used for ref in other models"
// this can also be export const User_const = mongoose.model("User", userSchema) but keeping both same is standard practice