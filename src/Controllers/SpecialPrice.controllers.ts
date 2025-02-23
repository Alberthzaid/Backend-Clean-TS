import {specialPriceService} from "../Services/SpecialPrice.service";
import {Request, Response} from "express";

class SpecialPriceControllers{
    async create({body}:Request,res:Response){
        try{
            const specialPrice = await specialPriceService.create(body);
            res.status(201).json(specialPrice);
        }catch(err){
            res.status(500).json({error:err});
        }
    }

    async getSpecialPricesByUser({params}:Request, res:Response){
        try{
            const id = params.idUser;
            const respose = await specialPriceService.findOneByUser(id);
            res.status(201).json(respose);

        }catch (error) {
            res.status(500).json({error:error});
        }
    }
}


export const specialPriceControllers = new SpecialPriceControllers()