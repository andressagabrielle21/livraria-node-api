import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

// Schema é um objeto de configuração que define a estrutura e as propriedades de um documento
const livrosSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  titulo: {type: String, required: true},
  autor: autorSchema,
  editora: {type: String},
  preco: {type: Number},
  paginas: {type: Number}
}, {versionKey: false});

// ("Collection do BD que se refere", O Schema/propriedades)
const livro = mongoose.model("livros", livrosSchema)

export default livro;