import BaseError from "./BaseError.js";

export default class NotFound extends BaseError {
	constructor(message = "Página não encontrada.") {
		super(message, 404);
	}
}
