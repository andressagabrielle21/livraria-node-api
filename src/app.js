import express from 'express';
import connectOnDB from './config/dbConnect.js';
// import livro from './models/Livro.js';
import routes from './routes/index.js';

const connection = await connectOnDB();
// .on() normalmente é um método de eventos
connection.on("error", (error) => {
  console.error("Erro de conexão!", error)
})

connection.once("open", () => {
  console.log("Conexão estabelecida com sucesso.");
})

// ROTAS DO EXPRESS (CRUD) para criação do servidor HTTP

const app = express();
routes(app)
// Middleware: 
// app.use(express.json())

// const livros = [
//   {
//     id: 1,
//     titulo: "Olhai os lirios do campo",
//     autor: "Erico Verissimo"
//   },
//   {
//     id: 2,
//     titulo: "A paixão segundo G.H.",
//     autor: "Clarice Lispector"
//   },
//   {
//     id: 3,
//     titulo: "O Estrangeiro",
//     autor: "Albert Camus"
//   }
// ]

// function searchBook(id) {
//   return livros.findIndex(livro => {
//     return livro.id === Number(id)
//   })
// }

// Passando pro express a responsabilidade de gerenciar as rotas
// app.get("/", (req, res) => {
//   res.status(200).send("Server sent data")
// })

// .get é o tipo de requisição que estamos fazendo
// app.get("/livros", async (req, res) => {
//   // Se utilizo await DENTRO de uma função, preciso chamar o ASYNC fora dela
//   const listBook = await livro.find({})
//   // Utilizar .json() quando utilizar dados complexos
//   res.status(200).json(listBook)
// })

// Retornar apenas um livro. ":" indica que esse é um dado variável
// app.get("/livros/:id", (req, res) => {
//   // Utilizar .json() quando utilizar dados complexos
//   // const listBook = await livro.findOne({id: })
//   const index = searchBook(req.params.id)
//   res.status(200).json(livros[index])
// })

// Criar novo dado
// app.post("/livros", (req, res) => {
//   // Para criar um novo dado, precisamos além do header e pequenas info, precisamos do body
//   // Quando recebemos dados via body, ele retornam em string, por isso é necessário parsear para json
//   livros.push(req.body)
//   // Status 201: Status para dado criado
//   res.status(201).send("Livro cadastrado!")
// })

// Alterar/Editar registro existente
// app.put("/livros/:id", (req, res) => {
//   const index = searchBook(req.params.id);
//   livros[index].titulo = req.body.titulo;
//   res.status(200).json(livros);
// })

// //Deletar registro
// app.delete("/livros/:id", (req, res) => {
//   const index = searchBook(req.params.id);
//   livros.splice(index, 1)
//   res.status(200).send("Item removido com sucesso.");
// })

export default app;

// PUT pode ser usado em situações em que há acesso ao recurso completo (por exemplo, todos os 
// campos do documento a ser atualizado) ou a necessidade de substituir totalmente o recurso. 
// É necessário enviar sempre o recurso completo (com todos os campos);
    // - PUT é considerado um método idempotente e sem efeitos colaterais, ao contrário de PATCH, e por isso um método “seguro”.

// PATCH pode ser usado para atualizações parciais e pode receber apenas o campo que será 
// atualizado, o que pode significar menor volume de tráfego de dados.

// Todo processo de requisição-resposta usando HTTP é sempre iniciado
// pelo lado cliente da requisição

