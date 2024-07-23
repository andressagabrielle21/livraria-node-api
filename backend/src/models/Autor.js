import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
	id: {type: mongoose.Schema.Types.ObjectId},
	nome: {
		type: String,
		required: [true, "O nome do(a) autor(a) é obrigatório"]
	},
	authorImage: {
		type: String,
		required: [false]
	},
	nacionalidade: {type: String},
}, {versionKey: false});

const autor = mongoose.model("autores", autorSchema);

// o autorSchema pode importado como uma propriedade (externa) de Livro
export default autor;