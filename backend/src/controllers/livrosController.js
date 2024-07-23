// Interface entre cada requisição e o que irá acontecer em cada requisição
import NotFound from "../errors/NotFound.js";
import {autor as autores, livro} from "../models/index.js";
// import autopopulate from "mongoose-autopopulate";
class LivroController {
	// static é quando queremos utilizar métodos de uma classe, sem precisar instanciar a mesma
	static listBooks = async (req, res, next) =>  {
		try {
			const searchBook = livro.find();
			req.results = searchBook;

			next();
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
			const listBookId = await livro.findById(id, {}, {autopopulate: false}).populate("autor");
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

	static listBooksByFilter = async (req, res, next) => {
		try {
			const search = await loadSearch(req.query);

			if (search !== null) {
				const booksByFilter = livro.find(search);

				req.results = booksByFilter;
				next();
			} else {
				res.status(200).send([]);
			}

		} catch (error) {
			next(error);
			// res.status(500).json({message: `${error.message} - FALHA NA BUSCA.`});
		}
	};
}

async function loadSearch (params) {
	const {editora, titulo, minPages, maxPages, nomeAutor} = params;

	let search = {};

	if (editora) search.editora = editora;
	// Operadores do MongoDB, caso os valores sejam objetos: { $regex: titulo, $options: "i"}
	if (titulo) search.titulo = new RegExp(titulo, "i");
	if (minPages) {search.paginas = {$gte: minPages};}
	if (maxPages) {search.paginas = {$lte: maxPages};}

	if (nomeAutor) {
		const autor = await autores.findOne({nome: nomeAutor});

		if (autor !== null) {
			search.autor = autor._id;
		} else {
			search = null;
		}
	}

	return search;
}

export default LivroController;

// Controller => Controlar a parte de requisição e resposta