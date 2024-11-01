import {  Router } from "express";
import {
    getAllproducts,
    getProductByiID,
    createProduct,
    updateProduct,
    daleteProduct 
}from "../controllers/productController";

const router = Router();

router.get("products/", getAllproducts);// traer todos los productos
router.get("products/:id", getProductByiID);// traer un solo producto
router.post("products/", createProduct);// crear un producto
router.put("products/:id", updateProduct);// actualizar un producto
router.delete("products/:id", daleteProduct);// borrar un producto
export default router;