import {userService} from "../Services/Users.services";
import {Request, Response} from "express";


class UserControllers{
    async findAll(req: Request, res: Response){
        try{
            const users = await userService.findAll();
            res.status(201).json(users);
        }catch (error){
            res.status(500).json(error);
        }
    }

    async findOne({params}: Request, res: Response){
        try{
            const id = params.id;
            const user = await userService.findOne(id)
            res.status(201).json(user);
        }catch (error){
            res.status(500).json(error);
        }
    }

    async create({body}: Request, res: Response){
        try{
            const user = await userService.create(body);
            res.status(201).json(user);
        }catch (error){
            res.status(500).json(error);
        }
    }
}


export const userControllers = new UserControllers();