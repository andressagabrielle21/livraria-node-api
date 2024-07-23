import ResError from "./../errors/ResError.js";

export default async function paginator(req, res, next) {
	try {
		let {limit = 5, page = 1, sortBy = "_id: -1"} = req.query;
  
		// split() separa a string em um elemento do array
		let [sortField, order] = sortBy.split(":");
  
		limit = parseInt(limit);
		page = parseInt(page);
		order = parseInt(order);

		const results = req.results;
  
		//Referecing form
		if (limit > 0 && page > 0) {
			// sort() com valor 1 -> Crescente, com valor -1 -> Decrescente
			const resultsPaginator = await results.find().sort({[sortField]: order}).skip((page - 1) * limit).limit(limit).exec();
			res.status(200).json(resultsPaginator);
		} else {
			next(new ResError());
		}
	} catch(error) {
		next(error);
	}
}

// Esse código depende de uma propriedade resultado guardada no objeto req. 
// Essa propriedade deve ser definida no método de controlador que queremos paginar. 
// Como exemplo, vamos considerar a rota GET /livros. Nessa rota, já foi registrado 
// o método listarLivros e o middleware Paginator