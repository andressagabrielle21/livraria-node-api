import express from "express";
import AutorController from '../controllers/autorController.js';

const routes = express.Router();

// Quais funções serão chamadas no momento é feita uma requisição para cada uma dessas rotas abaixo
routes.get("/autores", AutorController.listAuthors)
routes.get("/autores/:id", AutorController.AuthorById)
routes.post("/autores", AutorController.newAuthor)
routes.put("/autores/:id", AutorController.editAuthor)
routes.delete("/autores/:id", AutorController.deleteAuthor)

export default routes;