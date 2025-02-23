import { productService } from "../Services/Product.service";
import { Request, Response } from "express";

class ProductControllers {
    async find(req: Request, res: Response): Promise<void> {
        try {
            const products = await productService.findAll();
            res.json(products);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener productos", error: error});
        }
    }

    async save(req: Request, res: Response): Promise<void> {
        try {
            const product = await productService.create(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({ message: "Error al guardar producto", error: error });
        }
    }

    async findId({params}: Request, res: Response): Promise<void> {
        try{
            const id = params.id;
            const product = await  productService.findOne(id);
            res.status(201).json(product);
        }catch (e) {
            res.status(500).json({ message: "Error al guardar producto", error: e });
        }
    }
}

export const productsControllers = new ProductControllers();
