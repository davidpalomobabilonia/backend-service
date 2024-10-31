import { Request, Response } from "express";
import { Appdatasource } from "../data-source";
import { Product } from "../entities/Product";

const productRepository = Appdatasource.getRepository(Product);

// obtener (GET) de todos los productos 
export const getAllproducts = async (req: Request, res: Response) => {
    try {
        const products = await productRepository.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ messgue: "error al obtener los productos." });
    }
}


// obtener (GET) un producto por id
export const getProductByiID = async (req: Request, res: Response) => {
    try {
        const product = await productRepository.findOneBy({
            id: parseInt(req.params.id)
        });
        if (product) {
            res.json(product);

        } else {
            res.status(404).json({ message: "producto no encntrado" })
        }
    } catch (error) {
        res.status(500).json({ message: "error al obtener el producto." });

    }
}

// crear un (POST) un producto 
export const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, description, price } = req.body; // sacando los datos del request
        const product = new Product();
        product.name = name,
            product.description = description;
        product.price = price;
        await productRepository.save(product);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({
            messge: "error al crear el producto"
        });
    }
};



// actualizar (POST) un producto 
export const updateProduct = async (req: Request, res: Response) => {
    try {
        const [name, description, price] = req.body;
        const product = await productRepository.findOneBy({
            id: parseInt(req.params.id)
        });

        if (product) {
            product.name = name ?? product.name;
            product.description = description ?? product.description;
            product.price = price ?? product.price;
            await productRepository.save(product);
            res.json(product);

        } else {
            res.status(404).json({
                message: "producto no encontrado"
            });
        }

    } catch (error) {
        res.status(500).json({
            message: "error al actualizar un producto"
        })
    }
};




// borrar (POST) un producto 
export const daleteProduct = async (req: Request, res: Response) => {
try {
    const product = await productRepository.findOneBy({
        id: parseInt(req.params.id)
    });

    if (product) {
        await productRepository.remove(product);
        res.json({
            message: "producto eliminado"
        });

    } else {
        res.status(404).json({
            message: "producto no encontrado"
        });
    }  
} catch (error) {
        res.status(500).json({
            message: "error al elminar el producto"
        })
    }
};