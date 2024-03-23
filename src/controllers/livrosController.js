// Interface entre cada requisição e o que irá acontecer em cada requisição
import NotFound from "../errors/NotFound.js";
import livro from "../models/Livro.js";

class LivroController {
	// static é quando queremos utilizar métodos de uma classe, sem precisar instanciar a mesma
	static listBooks = async (req, res, next) =>  {
		try {
			//Referecing form
			const listBook = await livro.find().populate("autor").exec();
			res.status(200).json(listBook);
		} catch (error) {
			// 500 é um problema no servidor
			next(error);
			// res.status(500).json({message: `${error} - Falha na requisição`});
		}
	};

	static bookById = async (req, res, next) =>  {
		try {
			// Quando obtemos um valor por parâmetro de rota da URL, ele sempre retorna como string.
			const id = req.params.id;
			const listBookId = await livro.findById(id).populate("autor", "nome").exec();
			if (listBookId !== null) {
				res.status(200).send(listBookId);
			} else {
				// 404 -> quando um recurso não é localizado
				next(new NotFound("Livro não encontrado."));
			}
		} catch (error) {
			next(error);
		}
	};
  
	static newBook = async (req, res, next) =>  {
		try {
			let addNewBook = new livro(req.body);
			const addedBook = await addNewBook.save();

			res.status(201).send(addedBook.toJSON());
		} catch (error) {
			next(error);
			// res.status(500).json({message: `${error.message} - FALHA AO CADASTRAR LIVRO.`});
		}
	};

	static editBook = async (req, res, next) => {
		try {
			const id = req.params.id;
			const foundBook = await livro.findByIdAndUpdate(id, {$set: req.body});
			if (foundBook !== null) {
				res.status(200).send({message: "Livro atualizado!"});
			} else {
				next(new NotFound("Falha ao editar livro. Tente novamente."));
			}
		} catch (error) {
			next(error);
			// res.status(500).send({message: `${error.message} - FALHA AO EDITAR LIVRO.`});
		}
	};

	static deleteBook = async (req, res, next) => {
		try {
			const id = req.params.id;
			const foundBook = await livro.findByIdAndDelete(id);
			if (foundBook !== null) {
				res.status(200).send({message: "Livro removido com sucesso!"});
			} else {
				next(new NotFound("Falha ao deletar livro. Tente novamente."));
			}
		} catch (error) {
			next(error);
			// res.status(500).send({message: `${error.message} - FALHA AO DELETAR LIVRO.`});
		}
	};

	static listBooksByEditor = async (req, res, next) => {
		try {
			const editor = req.query.editora;
			const booksByEditor = await livro.find({editora: editor});
			res.status(200).send(booksByEditor);      
		} catch (error) {
			next(error);
			// res.status(500).json({message: `${error.message} - FALHA NA BUSCA.`});
		}
	};
}

export default LivroController;

// Controller => Controlar a parte de requisição e resposta