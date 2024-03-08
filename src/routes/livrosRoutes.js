import express from "express";
import LivroController from "../controllers/livrosController.js";

const routes = express.Router();

// Quais funções serão chamadas no momento é feita uma requisição para cada uma dessas rotas abaixo
routes.get("/livros", LivroController.listBooks)
// Parâmetro de query (consulta)
routes.get("/livros/search", LivroController.listBooksByEditor)

routes.get("/livros/:id", LivroController.bookById)
routes.post("/livros", LivroController.newBook)
routes.put("/livros/:id", LivroController.editBook)
routes.delete("/livros/:id", LivroController.deleteBook)

export default routes;

// Express tem uma precedência de rotas (por complexidade)