import { Schema, model } from "mongoose";
import User from './User';
const task = new Schema(
    {
        name: String,
        description:String,
        priority:Number,
        done:Boolean,
        user: { type: Schema.ObjectId, ref: "User" }
    },
    {
        timestamps: true,
        versionKey:false
    }
);

export default model('Task',task);