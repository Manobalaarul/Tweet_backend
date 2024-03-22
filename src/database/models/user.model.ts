import mongoose,{Document,Schema} from "mongoose";
import { IUserInterface } from "../interfaces/user.interface";

const userSchema = new Schema<IUserInterface>({
    uid:{type:String,required:true},
    tweets:{type:[String],default:[]},
    firstname:{type:String,default:"User"},
    lastname:{type:String,default:"Name"},
    email:{type:String,required:true},
    createdAt:{type:String,required:true},
});

const UserModel = mongoose.model<IUserInterface>('UserModel',userSchema)
export default UserModel