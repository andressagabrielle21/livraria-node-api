// Interface entre cada requisição e o que irá acontecer em cada requisição
import livro from "../models/Livro.js";
import {autor} from "../models/Autor.js";

class LivroController {
  // static é quando queremos utilizar métodos de uma classe, sem precisar instanciar a mesma
  static async listBooks(req, res) {
    try {
      const listBook = await livro.find({})
      res.status(200).json(listBook)
    } catch (error) {
      res.status(500).json({message: `${error} - Falha na requisição`})
    }
  }

  static async bookById(req, res) {
    try {
      const id = req.params.id
      const listBookId = await livro.findById(id)
      res.status(200).json(listBookId)
    } catch (error) {
      // 500 é um problema no servidor
      res.status(500).json({message: `${error.message} - FALHA AO ENCONTRAR LIVRO.`})
    }
  }
  
  static async newBook(req, res) {
    const addNewBook = req.body
    try {
      const findAuthor = await autor.findById(addNewBook.autor)
      const fullBook = {...addNewBook, autor: {...findAuthor._doc}}
      const addedBook = await livro.create(fullBook)
      res.status(201).json({message: "Livro cadastrado!", livro: addedBook})
    } catch (error) {
      res.status(500).json({message: `${error.message} - FALHA AO CADASTRAR LIVRO.`})
    }
  }

  static async editBook(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body)
      res.status(200).json({message: "Livro atualizado!"})
    } catch (error) {
      res.status(500).json({message: `${error.message} - FALHA AO EDITAR LIVRO.`})
    }
  }

  static async deleteBook(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id, req.body)
      res.status(200).json({message: "Livro removido com sucesso!"})
    } catch (error) {
      res.status(500).json({message: `${error.message} - FALHA AO DELETAR LIVRO.`})
    }
  }

  static async listBooksByEditor(req, res) {
    const editor = req.query.editora;
    try {
      const booksByEditor = await livro.find({editora: editor});
      res.status(200).json(booksByEditor)      
    } catch (error) {
      res.status(500).json({message: `${error.message} - FALHA NA BUSCA.`})
    }
  }
}

export default LivroController;

// Controller => Controlar a parte de requisição e resposta