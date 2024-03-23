// Quando exportamos uma lista de módulos, diferente de um "export default", devemos importar entre chaves
import NotFound from "../errors/NotFound.js";
import {autor} from "../models/Autor.js";

class AutorController {
	static listAuthors = async (req, res, next) => {
		try {
			const listAuthor = await autor.find({});
			res.status(200).json(listAuthor);
		} catch (error) {
			next(error);
			// res.status(500).json({message: `${error} - Falha na requisição`});
		}
	};

	static AuthorById = async (req, res, next) => {
		try {
			const id = req.params.id;
			const listAuthorId = await autor.findById(id);
			if (listAuthorId !== null) {
				res.status(200).json(listAuthorId);
			} else {
				next(new NotFound("FALHA AO ENCONTRAR AUTOR."));
			}
		} catch (error) {
			next(error);
		}
	};

	static newAuthor = async (req, res, next) => {
		try {
			let addNewAuthor = new autor(req.body);
			const addedAuthor = await addNewAuthor.save();
			res.status(201).send(addedAuthor.toJSON());
		} catch (error) {
			next(error);
			// res.status(500).json({message: `${error.message} - FALHA AO CADASTRAR AUTOR.`});
		}
	};

	static editAuthor = async (req, res, next) => {
		try {
			const id = req.params.id;
			const foundAuthor = await autor.findByIdAndUpdate(id, {$set: req.body});
			if (foundAuthor !== null) {
				res.status(200).send({message: "Autor atualizado!"});
			} else {
				next(new NotFound("Falha ao editar autor. Tente novamente"));
			}
		} catch (error) {
			next(error);
		}
	};

	static deleteAuthor = async (req, res, next) => {
		try {
			const id = req.params.id;
			const foundAuthor = await autor.findByIdAndDelete(id, req.body);

			if (foundAuthor !== null) {
				res.status(200).send({message: "Autor removido com sucesso!"});
			} else {
				next(new NotFound("Falha ao deletar autor. Autor não localizado."));
			}
		} catch (error) {
			next(error);
			// res.status(500).send({message: `${error.message} - FALHA AO DELETAR AUTOR.`});
		}
	};
}

export default AutorController;