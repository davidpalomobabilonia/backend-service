import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import {Book } from "../entities/Book";

const BooktRepository = AppDataSource.getRepository(Book);

// GET - Obtener Todos los Productos
export const getAllBook = async(red: Request, res: Response) => {
  try {
    const Book = await BooktRepository.find();
    res.json(Book);
  } catch(error) {
    res.status(500).json({ message: "Error al obtener libro." });
  }
};

// GET by ID - Obetener libros por ID
export const getBookyById = async(req: Request, res: Response) => {
  try {
    const Book = await BooktRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if(Book) {
      res.json(Book);
    } else {
      res.status(404).json({ message: "libro no encontrado" });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al obtener el libro." });
  }
};

// POST - Crear un nuevo Producto
export const createBook = async(req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body;
    const book = new Book();
    book.name = name;
    book.description = description;
    book.price = price;

    await BooktRepository.save(book);
    res.status(201).json(book);
  } catch(error) {
    res.status(500).json({ message: "Error al crear el libro." });
  }
};

// PUT - Actualizar un libro existente
export const updateBook = async(req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body;
    const book = await BooktRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if(book) {
      book.name = name ?? book.name;
      book.description = description ?? book.description;
      book.price = price ?? book.price;

      await BooktRepository.save(book);
      res.json(book);
    } else {
      res.status(404).json({ message: "libro no encontrado" });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al actualizar el libro." });
  }
};

// DELETE - Borrar un libro
export const deleteBook = async(req: Request, res: Response) => {
  try {
    const book = await BooktRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if (book) {
      await BooktRepository.remove(book);
      res.json({ message: "Libro eliminado." });
    } else {
      res.status(404).json({ message: "libro no encontrado." });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al eliminar el libro." });
  }
};