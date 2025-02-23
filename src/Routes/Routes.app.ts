import {productsControllers} from "../Controllers/Product.controllers";
import {userControllers} from "../Controllers/User.controllers";
import {Router} from "express";
import {specialPriceControllers} from "../Controllers/SpecialPrice.controllers";


const router:Router = Router();

// Products
router.post('/post/product', productsControllers.save);
router.get('/get/product', productsControllers.find);
router.get('/get/product/:id' , productsControllers.findId);

//  Users
router.get('/get/users' , userControllers.findAll);
router.get('/user/:id' , userControllers.findOne);
router.post('/post/users', userControllers.create);


//Specials price
router.get('/price/user/:idUser' ,specialPriceControllers.getSpecialPricesByUser);
router.post('/post/especial' , specialPriceControllers.create);

export default router;