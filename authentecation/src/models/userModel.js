import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  uername: {
    type: String,
    requried: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    requried: true,
  },
});

const UserModel = mongoose.models.users || mongoose.model("users", UserSchema);
export default UserModel;
