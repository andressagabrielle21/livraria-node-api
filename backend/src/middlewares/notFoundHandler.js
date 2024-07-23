import NotFound from "../errors/NotFound.js";

function notFoundHandler(req, res, next) {
	const error404 = new NotFound();
  // Quando executamos a função next(), ela retorna diretamente para o middlewares
	next(error404);
}

export default notFoundHandler;