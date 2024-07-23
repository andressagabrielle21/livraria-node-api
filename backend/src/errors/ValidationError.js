import ResError from "./ResError.js";

export default class ValidationError extends ResError {
	constructor(error) {
		const messagesErrors = Object.values(error.errors).map(item => item.message).join("; ");
		super(`Erros foram encontrados: ${messagesErrors}`);
	}
}
