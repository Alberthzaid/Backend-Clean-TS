import {ISpecialPrice} from "../Interface/SpecialPrice.Interface";
import {userService} from "./Users.services";
import {Model} from "mongoose";
import {SpecialPrice} from "../Entities/SpecialProce.Schema";
import {Product} from "../Entities/Products.schema";
import {IProduct} from "../Interface/Product.Interface";



class SpecialPriceService{
    private readonly priceModel:Model<ISpecialPrice>;
    private readonly productModel:Model<IProduct>;
    constructor() {
        this.priceModel = SpecialPrice;
        this.productModel = Product;
    }

    async create(Price : ISpecialPrice){
        try{
            const user = new this.priceModel(Price);
            return await user.save();
        }catch (e) {
            console.error(e);
            throw new Error("Error creating Special Price");
        }
    }

    async findOneByUser( idUser:any ){
        try {


            const userID = await userService.findOne(idUser);
            if (!userID) throw new Error("No user found with");

            const priceSpecial:ISpecialPrice[] = await this.priceModel.find({idUser: idUser}).lean();
            if (!priceSpecial) throw new Error("No price found with");

            const productIds = priceSpecial.map(item => item.idProduct);

            const products = await this.productModel.find({ _id: { $in: productIds } }).lean();

            const priceSpecialWithProducts = priceSpecial.map(item => ({
                ...item,
                product: products.find(prod => prod._id.toString() === item.idProduct.toString()) || null
            }));


            const response = {
                user: userID,
                priceSpecial: priceSpecialWithProducts,
            };

            return response;
        }catch (e) {
            console.error(e);
            throw new Error("Error creating Special Price");
        }
    }
}


export const specialPriceService = new SpecialPriceService();
