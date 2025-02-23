import mongoose, { Schema,  Model } from 'mongoose';
import {IProduct} from "../Interface/Product.Interface";

class ProductModel {
    private schema: Schema;

    constructor() {
        this.schema = new Schema<IProduct>(
            {
                name: { type: String, required: true },
                price: { type: Number, required: true },
            },
            { collection: 'Products' }
        );
    }


    public getModel(): Model<IProduct> {
        return mongoose.model<IProduct>('Products', this.schema);
    }
}

export const Product:Model<IProduct> = new ProductModel().getModel();
