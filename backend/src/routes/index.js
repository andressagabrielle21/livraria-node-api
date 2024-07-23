import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autorRoutes.js";

// Ponto de entrada das Rotas

const routes = (app) => {
	app.route("/").get((req, res) => res.status(200).send("Livraria Server está funcionando!"));

	
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		next();
	});

	//.use é um método que se utiliza para incluir middlewares na instância do express
	app.use(express.json(), livros, autores);
	// express.json é um middleware nativo do express para converter a resposta para JSON

};

export default routes;