import {Document , ObjectId} from "mongoose";


export interface ISpecialPrice extends Document {
    price: number;
    idProduct: ObjectId;
    idUser: ObjectId;
}