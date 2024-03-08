// Quando exportamos uma lista de módulos, diferente de um "export default", devemos importar entre chaves
import {autor} from "../models/Autor.js";

class AutorController {
  static async listAuthors(req, res) {
    try {
      const listAuthor = await autor.find({})
      res.status(200).json(listAuthor)
    } catch (error) {
      res.status(500).json({message: `${error} - Falha na requisição`})
    }
  }

  static async AuthorById(req, res) {
    try {
      const id = req.params.id
      const listAuthorId = await autor.findById(id)
      res.status(200).json(listAuthorId)
    } catch (error) {
      res.status(500).json({message: `${error.message} - FALHA AO ENCONTRAR AUTOR.`})
    }
  }

  static async newAuthor(req, res) {
    try {
      const addNewAuthor = await autor.create(req.body)
      res.status(201).json({message: "Autor cadastrado!", autor: addNewAuthor})
    } catch (error) {
      res.status(500).json({message: `${error.message} - FALHA AO CADASTRAR AUTOR.`})
    }
  }

  static async editAuthor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body)
      res.status(200).json({message: "Autor atualizado!"})
    } catch (error) {
      res.status(500).json({message: `${error.message} - FALHA AO EDITAR AUTOR.`})
    }
  }

  static async deleteAuthor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id, req.body)
      res.status(200).json({message: "Autor removido com sucesso!"})
    } catch (error) {
      res.status(500).json({message: `${error.message} - FALHA AO DELETAR AUTOR.`})
    }
  }
}

export default AutorController;