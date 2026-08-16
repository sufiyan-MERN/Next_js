import mongoose from "mongoose";
const Schema= mongoose.Schema
const ObjectId=Schema.ObjectId

const UserSchema= new Schema({
    username:String,
    email: String,
    password: String
},{timestamps:true})

const TodoSchema= new Schema({
    userId:ObjectId,
    title:String,
    completed: Boolean
},{timestamps:true})

export const TodoModel= mongoose.model.todos ||mongoose.model("todos",TodoSchema)
export const UserModel= mongoose.model.users || mongoose.model("users",UserSchema)

const MONGO_URL=process.env.MONGO_URL

if (!MONGO_URL) {
  console.warn("MONGO_URI is not set");
} else if (mongoose.connection.readyState === 0) {
  mongoose
    .connect(MONGO_URL)
    .then(() => {
      console.log("db connected successfully");
    })
    .catch((err) => {
      console.error("db connection failed", err);
    });
}   