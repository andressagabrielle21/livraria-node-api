import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

// Schema é um objeto de configuração que define a estrutura e as propriedades de um documento
const livrosSchema = new mongoose.Schema({
	id: {type: mongoose.Schema.Types.ObjectId},
	titulo: {
		type: String,
		required: [true, "O título do livro é obrigatório"]
	},
	bookImage: {
		type: String,
		required: [true, "A imagem do livro é obrigatório"]
	},
	autor: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "autores",
		required: [true, "O(a) autor(a) é obrigatório"],
		autopopulate: true
	},
	editora: {
		type: String,
		enum: {
			values: ["Happers Collins", "Rocco", "Companhia das Letras"],
			message: "A editora {VALUE} não é válida."
		}
	},
	preco: {type: Number},
	paginas: {
		type: Number,
		validate: {
			// Dentro do objeto VALIDATOR, é possível fazer qualquer função, inclusive chamar bibliotecas externas
			validator: (value) => {
				return value >= 20 && value <= 3000;
			},
			message: "O número de páginas deve estar entre 20 e 3000. Valor fornecido: {VALUE}"
		}
	}
}, {versionKey: false});

// ("Collection do BD que se refere", O Schema/propriedades)
livrosSchema.plugin(autopopulate);
const livro = mongoose.model("livros", livrosSchema);

export default livro;