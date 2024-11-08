import { Router } from "express";
import {
  getAllBook,
  getBookyById,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/BookController";

const bookRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Book
 *   description: CRUD relacionado con libro
 */

/**
 * @swagger
 * /api/Book:
 *   get:
 *     summary: Obtener todos los libros
 *     tags: [Book]
 *     responses:
 *       200:
 *         description: Lista de libros 
 */
bookRoutes.get("/", getAllBook);

/**
 * @swagger
 * /api/Book/{id}:
 *   get:
 *     summary: Obtener un libro por ID
 *     tags: [Book]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del libro
 *     responses:
 *       200:
 *         description: Detalles del libro
 *       404:
 *         description: libro no encontrado
 */
bookRoutes.get("/:id", getBookyById);

/**
 * @swagger
 * /api/Book:
 *   post:
 *     summary: Crear un nuevo libro
 *     tags: [Book]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: libro creado
 *       500:
 *         description: Error en el servidor
 */
bookRoutes.post("/", createBook);

/**
 * @swagger
 * /api/Book/{id}:
 *   put:
 *     summary: Actualizar un libro existente
 *     tags: [Book]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del libro
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: libro actualizado
 *       404:
 *         description: libro no encontrado
 *       500:
 *         description: Error en el servidor
 */
bookRoutes.put("/:id", updateBook);

/**
 * @swagger
 * /api/Book/{id}:
 *   delete:
 *     summary: Eliminar un libro
 *     tags: [Book]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del libro
 *     responses:
 *       200:
 *         description: libro eliminado
 *       404:
 *         description: libro  no encontrado
 *       500:
 *         description: Error en el servidor
 */
bookRoutes.delete("/:id", deleteBook);

export default bookRoutes;
