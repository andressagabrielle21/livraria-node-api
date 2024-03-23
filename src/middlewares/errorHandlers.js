import { mongoose } from "mongoose";
import BaseError from "../errors/BaseError.js";
import ResError from "../errors/ResError.js";
import ValidationError from "../errors/ValidationError.js";
import NotFound from "../errors/NotFound.js";

// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {
	if (error instanceof mongoose.Error.CastError) {
		// 400 -> Bad Request (Fora do formato permitido)
		new ResError().sendResponse(res);
	} else if (error instanceof mongoose.Error.ValidationError) {
		new ValidationError(error).sendResponse(res);
	} else if (error instanceof NotFound) {
		error.sendResponse(res);
	} else {
		new BaseError().sendResponse(res);
	}
}
export default errorHandler;

// Todo middleware tem acesso à função next, que pode ser utilizada para 
// executar o próximo middleware registrado na aplicação ou para executar 
// diretamente o manipulador de erros quando recebe um erro como parâmetro.

// Middleware de erros normalmente recebe 4 parâmetros