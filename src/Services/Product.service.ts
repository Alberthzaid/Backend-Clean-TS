import { IProduct } from "../Interface/Product.Interface";
import { Product } from "../Entities/Products.schema";
import {Model, Schema} from "mongoose";

class ProductService {
    private productModel: Model<IProduct>;

    constructor() {
        this.productModel = Product;
    }

    async findAll() {
        try {
            return await this.productModel.find().exec();
        } catch (error) {
            console.error("Error finding products:", error);
            throw new Error("Error finding products.");
        }
    }

    async findOne(id:any) {
        try {
            return await this.productModel.findOne({_id:id}).exec();
        }catch (e) {
            console.error(e)
            throw new Error("Error finding product.");
        }
    }

    async create(product: IProduct) {
        try {
            const newProduct = new this.productModel(product);
            return await newProduct.save();
        } catch (error) {
            console.error("Error creating product:", error);
            throw new Error("Error creating product.");
        }
    }
}

export const productService = new ProductService();
