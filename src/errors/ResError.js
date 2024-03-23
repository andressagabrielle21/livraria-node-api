import BaseError from "./BaseError.js";

class ResError extends BaseError {
	constructor(message = "Um ou mais dados fornecidos estão incorretos.") {
		// super() será responsável por chamar os parâmetros do constructor do BaseError
		super(message, 400);
	}
}

export default ResError;