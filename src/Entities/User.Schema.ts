import {Model , Schema } from "mongoose";
import {IUser} from "../Interface/User.Interface";
import mongoose from "mongoose";

class UserModel{
    private schema : Schema;

    constructor() {
        this.schema = new Schema<IUser>({
            name: {
                type: String,
                required: true,
            }
        },{collection:'Users'})
    }

    public getModel():Model<IUser>{
        return mongoose.model<IUser>('User' , this.schema);
    }

}

export const User:Model<IUser> = new UserModel().getModel();