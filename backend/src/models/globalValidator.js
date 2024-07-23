import mongoose from "mongoose";

//Validação global que impede que qualquer campo do tipo "String" receba uma string vazia
mongoose.Schema.Types.String.set("validate", {
	// validator: (valor) => valor.trim() !== "", -> Impedir qualquer string com espaços em branco
	validator: (value) => value !== "",
	message: ({path}) => `O campo ${path} foi fornecido em branco.`
});