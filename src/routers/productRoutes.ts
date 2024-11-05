import {  Router } from "express";
import {
    getAllproducts,
    getProductByiID,
    createProduct,
    updateProduct,
    daleteProduct 
}from "../controllers/productController";

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Products
 *  description: CRUD relacionado con Productos 
 */

/**
 * @swagger
 * /api/products:
 *  get:
 *      summary: obtener todos los productos
 *      tags: [Products]
 *      responses:
 *          200:
 *              description: lista de productos
 */
router.get("/", getAllproducts);// traer todos los productos

/**
 * @swagger 
 * /api/products/{id}:
 *    get:
 *      summary: obtener un producto por ID
 *      tags: [Products]
 *      parameters:
 *          - in: path
 *            name : id
 *            required: true
 *            schema:
 *              type: integer
 *            description: ID del producto
 *      responses:
 *        200:
 *          description: detalles del producto
 *        400:
 *          description: producto no encontrado
 * 
 */
router.get("/:id", getProductByiID);// traer un solo producto

/**
 * @swagger 
 * /api/products:
 *      post:
 *          summary: crear un nuevo producto
 *          tags: [Products]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          required:
 *                              - name
 *                              - description
 *                              - price
 *                          properties:
 *                              name: 
 *                                  type: string
 *                              description:
 *                                  type: string
 *                              price:
 *                                  type: number
 *          responses:   
 *              201:
 *                  description: producto creado
 *              500:
 *                  description: error en el servidor 
 */
router.post("/", createProduct);// crear un producto
router.put("/:id", updateProduct);// actualizar un producto
router.delete("/:id", daleteProduct);// borrar un producto
export default router;