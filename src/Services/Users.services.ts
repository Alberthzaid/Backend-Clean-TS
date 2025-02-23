import {IUser} from "../Interface/User.Interface";
import {User} from "../Entities/User.Schema";
import {Model} from "mongoose";

class UsersServices{
    private usersModel:Model<IUser>;
    constructor() {
        this.usersModel = User;
    }

    async findAll(){
        try{
            return await this.usersModel.find().exec();
        }catch (e) {
            console.error(e);
            throw new Error("Error finding users");
        }
    }

    async findOne(id:any) {
        try{
            return await this.usersModel.find({_id:id}).exec();
        }
        catch (e) {
            console.error(e);
            throw new Error("Error finding user");
        }
    }

    async create(user : IUser){
        try{
            const newUser = new this.usersModel(user);
            return await newUser.save();
        }catch (e) {
            console.error(e)
        }
    }
}

export const userService = new UsersServices();