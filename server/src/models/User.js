import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";


const UserModel = new Schema({
    username: String,
    email: String,
    password : String,
    image: String,
    },
    {
        timestamps: true,   
    }
);

UserModel.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };
  
UserModel.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
  }
  

export default model('User',UserModel);