import express from "express";
import db from "./config/dbConnect.js";
// import livro from './models/Livro.js';
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandlers.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";

// const connection = await connectOnDB();
// .on() normalmente é um método de eventos
db.on("error", console.log.bind(console, "Erro de conexão!"));

db.once("open", () => {
	console.log("Conexão estabelecida com sucesso.");
});

// ROTAS DO EXPRESS (CRUD) para criação do servidor HTTP

const app = express();
app.use(express.json());
routes(app);

app.use(notFoundHandler);

// Middlewares: Função que será executada em toda requisição para a API
app.use(errorHandler);

// Se utilizo await DENTRO de uma função, preciso chamar o ASYNC fora dela

// Utilizar .json() quando utilizar dados complexos

// Quando recebemos dados via body, ele retornam em string, por isso é 
// necessário parsear para json

export default app;