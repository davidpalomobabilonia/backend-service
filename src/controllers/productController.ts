import { Request, Response } from "express";
import { Appdatasource } from "../data-source";
import { Product } from "../entities/Product";

const productRepository = Appdatasource. getRepository(Product);

// obtener (GET) de todos los productos 
export const getAllproducts = async(req:Request, res:Response) =>{
    try {
        const products = await productRepository.find();
        res.json(products);
    } catch(error){
        res.status(500).json ({messgue:"error al obtener los productos."});
    }
}


// obtener (GET) un producto por id
export const getProductByiID = async(req: Request, res: Response)=> {
    try {
        const product = await productRepository. findOneBy({
id: parseInt(req.params.id)
        });
        if(product) {
            res.json(product);
            
        } else {
            res.status(404).json ({message:"producto no encntrado"})
        }
    } catch(error) {
        res.status(500).json({message:"error al obtener el producto."});
    
    }
}