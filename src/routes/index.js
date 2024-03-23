import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autorRoutes.js";

// Ponto de entrada das Rotas

const routes = (app) => {
	app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

	//.use é um método que se utiliza para incluir middlewares na instância do express
	app.use(express.json(), livros, autores);
	// express.json é um middleware nativo do express para converter a resposta para JSON

};

export default routes;