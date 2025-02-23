import {ISpecialPrice} from "../Interface/SpecialPrice.Interface";
import {Model , Schema} from "mongoose";
import mongoose from "mongoose";

class SpecialPriceModel {
    private schema: Schema;
    constructor() {
        this.schema = new Schema({
            price:{
                type: Number,
                required: true,
            },
            idUser:{
                type: Schema.Types.ObjectId,
                ref: 'User',
                required:true
            },
            idProduct:{
                type: Schema.Types.ObjectId,
                ref: 'Product',
                required:true
            }

        } , {collection:'preciosEspecialesPantoja13'})

    }

    public getModel():Model<ISpecialPrice>{
        return mongoose.model<ISpecialPrice>('PreciosEspecialesZaid13', this.schema)
    }
}


export const SpecialPrice:Model<ISpecialPrice> = new SpecialPriceModel().getModel();
